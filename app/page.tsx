import { Hero } from "@/components/sections/Hero";
import { WhatIsEMS } from "@/components/sections/WhatIsEMS";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { WhyMovus } from "@/components/sections/WhyMovus";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABlock } from "@/components/sections/CTABlock";
import { ContactSection } from "@/components/sections/ContactSection";
import { PhotoGrid } from "@/components/sections/PhotoGrid";
import { Transformations } from "@/components/sections/Transformations";
import { generateLocalBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      <Hero />
      <WhatIsEMS />
      <ProgramsGrid />
      <WhyMovus />
      <HowItWorks />
      <Transformations />
      <Testimonials />
      <FAQ />
      <CTABlock />
      <ContactSection />
      <PhotoGrid />
    </>
  );
}
