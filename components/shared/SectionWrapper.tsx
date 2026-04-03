interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  dark = true,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 ${
        dark ? "bg-movus-black text-movus-white" : "bg-cream text-movus-black"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
