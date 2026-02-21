import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { VisionSection } from "./components/vision-section";
import { MissionSection } from "./components/mission-section";
import { WhatWeDo } from "./components/what-we-do";
import { SuccessStories } from "./components/success-stories";
import { WhyTrustUs } from "./components/why-trust-us";
import { CallToAction } from "./components/call-to-action";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Section 1: Hero Carousel */}
      <HeroSection />

      {/* Section 2: About Us */}
      <AboutSection />

      {/* Section 3: Our Vision */}
      <VisionSection />

      {/* Section 4: Our Mission */}
      <MissionSection />

      {/* Section 5: What We Do */}
      <WhatWeDo />

      {/* Section 6: Success Stories / Testimonials */}
      <SuccessStories />

      {/* Section 7: Why Trust Us */}
      <WhyTrustUs />

      {/* Section 8: Call to Action */}
      <CallToAction />

      {/* Section 9: Contact & Newsletter */}
      <ContactSection />

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}