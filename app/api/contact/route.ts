import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Το όνομα είναι υποχρεωτικό").max(120),
  email: z.string().trim().email("Μη έγκυρη διεύθυνση email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  interest: z.string().trim().max(60).optional().or(z.literal("")),
  goal: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Πες μας λίγα παραπάνω").max(4000),
  website: z.string().max(500).optional().or(z.literal("")),
});

const ALLOWED_HOSTS = new Set([
  "movus.gr",
  "www.movus.gr",
  "localhost:3000",
  "localhost:3001",
]);

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const host = request.headers.get("host") ?? "";
  if (!ALLOWED_HOSTS.has(host) && !host.endsWith(".vercel.app")) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: "validation", message: firstIssue?.message ?? "invalid" },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY missing");
    return NextResponse.json(
      { ok: false, error: "server_misconfigured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Όνομα", data.name],
    ["Email", data.email],
  ];
  if (data.phone) rows.push(["Τηλέφωνο", data.phone]);
  if (data.interest) rows.push(["Πρόγραμμα", data.interest]);
  if (data.goal) rows.push(["Στόχος", data.goal]);

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#5C5C66;font:14px/1.5 -apple-system,Segoe UI,sans-serif;vertical-align:top;white-space:nowrap">${escape(
          label
        )}</td><td style="padding:8px 0;color:#0A0A0A;font:14px/1.5 -apple-system,Segoe UI,sans-serif">${escape(
          value
        )}</td></tr>`
    )
    .join("");

  const html = `<!doctype html>
<html><body style="margin:0;background:#F5F5F5;padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;border:1px solid #E8E8E8">
    <tr><td style="background:#0A0A0A;padding:24px 32px">
      <div style="font:700 12px/1 -apple-system,Segoe UI,sans-serif;letter-spacing:0.12em;color:#FF6B35;text-transform:uppercase">MOVUS · Νέο μήνυμα</div>
      <div style="font:700 22px/1.3 -apple-system,Segoe UI,sans-serif;color:#FFFFFF;margin-top:8px">${escape(data.name)}</div>
    </td></tr>
    <tr><td style="padding:24px 32px">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${rowsHtml}</table>
      <div style="margin-top:24px;padding:16px;background:#F5F5F5;border-radius:8px;color:#0A0A0A;font:14px/1.6 -apple-system,Segoe UI,sans-serif;white-space:pre-wrap">${escape(data.message)}</div>
    </td></tr>
    <tr><td style="padding:16px 32px;background:#FAFAFA;color:#5C5C66;font:12px/1.5 -apple-system,Segoe UI,sans-serif">
      Απάντησε απευθείας σε αυτό το email — η διεύθυνση reply-to είναι του αποστολέα.
    </td></tr>
  </table>
</body></html>`;

  try {
    const result = await resend.emails.send({
      from: "MOVUS <noreply@movus.gr>",
      to: ["info@movus.gr"],
      replyTo: data.email,
      subject: `Νέο μήνυμα από ${data.name}${data.interest ? ` (${data.interest})` : ""}`,
      html,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 }
    );
  }
}
