import { useEffect } from "react";

// 🔥 FIX TypeScript errors
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-3YBJ5T66NT";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;

    window.gtag('js', new Date());
    window.gtag('config', 'G-3YBJ5T66NT');

  }, []);

  // 🔥 Fix: Scroll to hash on mount (for cross-page navigation)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small timeout to ensure DOM is ready
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#0F2C59] mb-4">
          Vaishya Community Startup Foundation in Mumbai
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The Vaishya Community Startup Foundation is dedicated to supporting entrepreneurs in Mumbai through funding, mentorship, and networking opportunities. We help startups grow faster by connecting them with the right resources, guidance, and business ecosystem.
        </p>
      </section>

      <AboutSection />
      <VisionSection />
      <MissionSection />
      <WhatWeDo />
      <SuccessStories />
      <WhyTrustUs />

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#0F2C59]">
          Latest Startup Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/blog/start-business" className="p-5 border rounded-lg hover:shadow-md">
            <h3 className="font-semibold text-[#0F2C59]">
              How to Start a Business in Mumbai
            </h3>
            <p className="text-sm text-gray-600">
              Learn step-by-step process for starting your startup in Mumbai.
            </p>
          </a>

          <a href="/blog/funding-guide" className="p-5 border rounded-lg hover:shadow-md">
            <h3 className="font-semibold text-[#0F2C59]">
              Startup Funding Guide
            </h3>
            <p className="text-sm text-gray-600">
              A comprehensive guide to securing your first round of investment.
            </p>
          </a>
        </div>
      </section>

      <CallToAction />
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F2C59]">
            Startup Mentorship & Funding in Mumbai: Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-lg text-[#0F2C59] mb-2">
                How can I get startup support or mentorship in Mumbai?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide expert startup mentorship in Mumbai and comprehensive entrepreneur support, connecting you with seasoned business leaders and growth resources to scale your venture.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#0F2C59] mb-2">
                Does the foundation provide startup funding in Mumbai?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we offer startup funding support and access to seed capital for qualified entrepreneurs in Mumbai looking to launch and scale their business ideas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#0F2C59] mb-2">
                What business networking opportunities are available?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our foundation hosts exclusive business networking events in Mumbai, allowing founders to build valuable connections and explore new startup growth opportunities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#0F2C59] mb-2">
                Who is eligible for your entrepreneur support programs?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our entrepreneur support and business growth programs are primarily designed for ambitious founders in Mumbai looking for mentorship and funding to scale successfully.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}