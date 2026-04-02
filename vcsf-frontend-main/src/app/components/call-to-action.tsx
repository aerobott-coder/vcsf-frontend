import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BecomeMemberModal } from "./become-a-member";

export function CallToAction() {
  const [showQR, setShowQR] = useState(false);
  const [showMember, setShowMember] = useState(false);

  return (
    <>
      <section
        id="join-us"
        aria-label="Join Vaishya Community Foundation — Become a Member or Donate"
        className="py-16 sm:py-24 bg-gradient-to-br from-[#0F2C59] to-[#082040] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-white mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl"
              style={{ fontWeight: 700 }}
            >
              Join a Growing Startup & Business Community in Mumbai.
            </h2>
            <p className="text-white/80 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Become part of a community supporting entrepreneurs through mentorship, funding, and business growth programs. Help build a stronger future while growing your own journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowMember(true)}
                aria-label="Become a member of Vaishya Community Foundation"
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#D4AF37] text-[#0F2C59] rounded-xl hover:bg-[#E5C158] transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/50 sm:min-w-[220px] text-base sm:text-lg"
                style={{ fontWeight: 600 }}
              >
                Become a Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowQR(true)}
                aria-label="Donate to support Vaishya Community Foundation"
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white hover:text-[#0F2C59] transition-all duration-300 shadow-2xl sm:min-w-[220px] text-base sm:text-lg"
                style={{ fontWeight: 600 }}
              >
                Donate & Support Us
              </motion.button>
            </div>

            {/* Trust Line */}
            <p className="text-white/60 text-sm mt-6 sm:mt-8 font-medium tracking-wide">
              Trusted by entrepreneurs and growing startups across Mumbai.
            </p>

            {/* Hidden SEO Boost */}
            <p className="sr-only">
              startup community Mumbai, entrepreneur mentorship, startup funding support, business growth programs India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Donate to Vaishya Community Foundation via UPI"
          >
            <motion.div
              className="bg-white rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl w-full sm:max-w-md sm:mx-4 text-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle for mobile */}
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" aria-hidden="true" />
              <h3 className="text-[#0F2C59] font-bold text-base sm:text-lg mb-1">
                Donate to Vaishya Community Foundation
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Scan the QR code with any UPI app to support Vaishya community initiatives
              </p>
              <img
                src="/assets/PNB QR_page-0001.jpg"
                alt="UPI QR code to donate to Vaishya Community Foundation via PNB bank"
                className="w-full rounded-xl border border-gray-100 max-w-[280px] mx-auto"
                loading="lazy"
                width="280"
                height="280"
              />
              <button
                onClick={() => setShowQR(false)}
                aria-label="Close donation QR code modal"
                className="mt-5 w-full py-3 bg-[#0F2C59] text-white rounded-xl text-sm hover:bg-[#082040] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BecomeMemberModal isOpen={showMember} onClose={() => setShowMember(false)} />
    </>
  );
}