import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-[#0F2C59] text-white pt-10 sm:pt-16 pb-6 sm:pb-8"
      aria-label="Vaishya Community Foundation — Site Footer"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">

          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg p-1.5">
                <img
                  src="/assets/logo.png"
                  alt="Vaishya Community Startup Foundation Mumbai logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="48"
                  height="48"
                />
              </div>
              <span
                className="text-lg sm:text-xl tracking-tight leading-none font-extrabold"
                itemProp="name"
              >
                Vaishya <span className="text-[#D4AF37]">Startup Foundation</span>
              </span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-sm text-sm sm:text-base mb-6" itemProp="description">
              Empowering Mumbai founders with expert startup funding, entrepreneur mentorship, and business networking across India.
            </p>

            {/* Hidden SEO Keyword Block */}
            <div className="sr-only">
              startup funding Mumbai, entrepreneur mentorship Mumbai, business networking Mumbai, startup support India, Vaishya startup community
            </div>
          </div>

          {/* Column 2: Explore */}
          <nav aria-label="Explore Vaishya Community Startup Foundation programs">
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Explore</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Startup Programs", href: "#about" },
                { label: "Startup Success Stories", href: "#success-stories" },
                { label: "Contact Our Mumbai Team", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Startup Support */}
          <nav aria-label="Mumbai startup support and programs">
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Startup Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Startup Funding Mumbai",
                "Entrepreneur Mentorship",
                "Business Growth Workshops",
                "Startup Networking Events",
                "Business Skill Development",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#what-we-do"
                    className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Entrepreneur Resources */}
          <nav aria-label="Entrepreneurship and business resources">
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Entrepreneur Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Startup Insights Blog",
                "Business Knowledge Base",
                "Entrepreneur FAQs",
                "Resource Downloads",
                "Community Guidelines",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">

            {/* Copyright */}
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vaishya Community Startup Foundation. Registered Non-Profit Trust, Mumbai, India. Dedicated Startup and Entrepreneur Support.
            </p>

            {/* Social Media Icons */}
            <div
              className="flex gap-3 sm:gap-4"
              role="list"
              aria-label="Connect with our startup community on social media"
            >
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61565981560352&sk=followers",
                  Icon: Facebook,
                  label: "Join our startup community on Facebook",
                },
                {
                  href: "https://www.instagram.com/vaishyacommunitystartupfoundat/",
                  Icon: Instagram,
                  label: "Follow our Mumbai entrepreneur journey on Instagram",
                },
                {
                  href: "https://www.linkedin.com/in/vaishya-community-55120232b/",
                  Icon: Linkedin,
                  label: "Connect with Mumbai founders on LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  aria-label={label}
                  className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300"
                >
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-white/40 text-center mt-8 pt-6 border-t border-white/10 uppercase tracking-widest font-medium">
          Vaishya Community Startup Foundation Mumbai – Empowering Business Growth through Funding, Mentorship, and Entrepreneurship.
        </p>
      </div>
    </footer>
  );
}