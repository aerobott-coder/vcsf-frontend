import { motion } from "motion/react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { contactApi, newsletterApi } from "@/services/api";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formData,       setFormData]       = useState({ name: "", email: "", message: "" });
  const [contactStatus,  setContactStatus]  = useState<FormStatus>("idle");

  const [newsletterEmail,  setNewsletterEmail]  = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<FormStatus>("idle");

  // ── Contact form submit ───────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("loading");

    try {
      await contactApi.submit({
        name:    formData.name,
        email:   formData.email,
        message: formData.message,
      });

      setContactStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setContactStatus("idle"), 3000);
    } catch {
      setContactStatus("error");
      setTimeout(() => setContactStatus("idle"), 3000);
    }
  };

  // ── Newsletter form submit ────────────────────────────────────────────────
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    try {
      await newsletterApi.subscribe(newsletterEmail);

      setNewsletterStatus("success");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    } catch {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0F2C59] mb-2 text-2xl sm:text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            {contactStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 sm:py-16 gap-4 text-center"
              >
                <CheckCircle className="w-12 sm:w-14 h-12 sm:h-14 text-green-500" />
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2C59]">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#0F2C59] mb-1.5 sm:mb-2 text-sm sm:text-base">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all text-sm sm:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#0F2C59] mb-1.5 sm:mb-2 text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#0F2C59] mb-1.5 sm:mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {contactStatus === "error" && (
                  <p className="text-sm text-red-500">Failed to send. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={contactStatus === "loading"}
                  className="w-full px-8 py-3.5 sm:py-4 bg-[#D4AF37] text-[#0F2C59] rounded-lg hover:bg-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                  style={{ fontWeight: 600 }}
                >
                  {contactStatus === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0F2C59] mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Contact Information
            </h2>
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F2C59]" />
                </div>
                <div>
                  <h3 className="text-[#0F2C59] mb-1 text-sm sm:text-base" style={{ fontWeight: 600 }}>Address</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Vaishya Community Startup Foundation, Ground Floor, Hotel Sahara Star
                    <br />
                    Vile Parle East, Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F2C59]" />
                </div>
                <div>
                  <h3 className="text-[#0F2C59] mb-1 text-sm sm:text-base" style={{ fontWeight: 600 }}>Phone</h3>
                  <a href="tel:+919660990000" className="text-gray-600 text-sm sm:text-base hover:text-[#D4AF37] transition-colors">
                    +91 96609 90000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F2C59]" />
                </div>
                <div>
                  <h3 className="text-[#0F2C59] mb-1 text-sm sm:text-base" style={{ fontWeight: 600 }}>Email</h3>
                  <a
                    href="mailto:vaishyacommunitystartupfoundat@gmail.com"
                    className="text-gray-600 text-sm sm:text-base hover:text-[#D4AF37] transition-colors break-all"
                  >
                    vaishyacommunitystartupfoundat@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <h3 className="text-[#0F2C59] mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontWeight: 600 }}>Follow Us</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61565981560352&sk=followers"
                    target="_blank" rel="noopener noreferrer"
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-[#0F2C59] rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300 group">
                    <Facebook className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:text-[#0F2C59]" />
                  </a>
                  <a href="https://www.instagram.com/vaishyacommunitystartupfoundat/"
                    target="_blank" rel="noopener noreferrer"
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-[#0F2C59] rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300 group">
                    <Instagram className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:text-[#0F2C59]" />
                  </a>
                  <a href="https://www.linkedin.com/in/vaishya-community-55120232b/"
                    target="_blank" rel="noopener noreferrer"
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-[#0F2C59] rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300 group">
                    <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:text-[#0F2C59]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F5F5] rounded-2xl p-6 sm:p-12 text-center"
        >
          <h2 className="text-[#0F2C59] mb-3 sm:mb-4 text-xl sm:text-2xl md:text-4xl" style={{ fontWeight: 700 }}>
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Stay updated with the latest news, events, and opportunities from our community
          </p>

          {newsletterStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-green-500" />
              <p className="text-[#0F2C59] font-semibold text-sm sm:text-base">You're subscribed! Thank you.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-6 py-3.5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all text-sm sm:text-base"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4AF37] text-[#0F2C59] rounded-lg hover:bg-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                  style={{ fontWeight: 600 }}
                >
                  {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {newsletterStatus === "error" && (
                <p className="text-sm text-red-500 mt-3">Failed to subscribe. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}