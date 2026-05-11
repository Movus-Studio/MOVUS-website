import { Hero } from "@/components/sections/Hero";
import { WhatIsEMS } from "@/components/sections/WhatIsEMS";
import { SpaceExperience } from "@/components/sections/SpaceExperience";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { WhyMovus } from "@/components/sections/WhyMovus";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { PhotoGrid } from "@/components/sections/PhotoGrid";
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
      <ContactSection />
      {/* Bonus sections, appended after Contact per source-design extra-section choice */}
      <SpaceExperience />
      <PhotoGrid />
    </>
  );
}
