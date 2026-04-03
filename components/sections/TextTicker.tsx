const tickerItems = [
  "ΕΞΥΠΝΗ ΠΡΟΠΟΝΗΣΗ",
  "ΓΡΗΓΟΡΑ ΑΠΟΤΕΛΕΣΜΑΤΑ",
  "THIS IS YOUR MOVUS MOMENT",
  "350+ ΜΥΕΣ",
  "20 ΛΕΠΤΑ",
  "PREMIUM EMS",
  "ΠΑΤΡΑ",
];

export function TextTicker() {
  const repeatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden py-5 md:py-6" aria-hidden="true">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="animate-ticker flex whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="text-movus-white/[0.07] text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.03em] mx-4 md:mx-6"
          >
            {item}
            <span className="mx-4 md:mx-6 text-movus-orange/20">·</span>
          </span>
        ))}
      </div>
      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </div>
  );
}
