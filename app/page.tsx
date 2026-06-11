import { Hero } from "@/components/sections/Hero";
import { WhatIsEMS } from "@/components/sections/WhatIsEMS";
import { SpaceExperience } from "@/components/sections/SpaceExperience";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { WhyMovus } from "@/components/sections/WhyMovus";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Transformations } from "@/components/sections/Transformations";
import { Community } from "@/components/sections/Community";
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
      <Community />
      <Testimonials />
      {/* image / imageAlt / items / helperText default to content/home/home.json (Tina-managed) */}
      <FAQ imageVariant="illustration" />
      <ContactSection />
      {/* Bonus sections, appended after Contact per source-design extra-section choice */}
      {/* Hidden pre-launch — needs design rework. Component still imported above
          so a one-line uncomment restores it. See space_experience_pending.md memory. */}
      {/* <SpaceExperience /> */}
      <PhotoGrid />
    </>
  );
}
