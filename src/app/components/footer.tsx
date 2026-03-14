import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F2C59] text-white pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Logo & Mission — full width on mobile */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg p-1.5">
                <img
                  src="/assets/logo.png"
                  alt="Vaishya Community Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl tracking-tight leading-none" style={{ fontWeight: 800 }}>
                Vaishya <span className="text-[#D4AF37]">Community</span>
              </span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-sm text-sm sm:text-base">
              Building unity through education, entrepreneurship, and service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg" style={{ fontWeight: 600 }}>Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Success Stories", href: "#" },
                { label: "Contact", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg" style={{ fontWeight: 600 }}>Programs</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Funding Support", "Mentorship", "Skill Development", "Networking Events", "Business Workshops"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg" style={{ fontWeight: 600 }}>Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Blog", "Knowledge Base", "FAQs", "Downloads", "Guidelines"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
            {/* Copyright */}
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © Vaishya Community Startup Foundation
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4">
              {[
                { href: "https://www.facebook.com/profile.php?id=61565981560352&sk=followers", Icon: Facebook },
                { href: "https://www.instagram.com/vaishyacommunitystartupfoundat/", Icon: Instagram },
                { href: "https://www.linkedin.com/in/vaishya-community-55120232b/", Icon: Linkedin },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300">
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}