import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BecomeMemberModal } from "./become-a-member";

function CustomArrow({ onClick, direction }: { onClick?: () => void; direction: "left" | "right" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-3 md:left-12" : "right-3 md:right-12"
      } z-10 w-9 h-9 md:w-14 md:h-14 bg-white/20 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300`}
    >
      <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
    </button>
  );
}

interface SlideProps {
  image: string;
  heading: string;
  subheading: string;
  onDonateClick: () => void;
  onContactClick: () => void;
  onMemberClick: () => void;
}

function HeroSlide({ image, heading, subheading, onDonateClick, onContactClick, onMemberClick }: SlideProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 12, ease: "linear" }}
      >
        <ImageWithFallback
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.9) blur(2px)" }}
        />
        <div className="absolute inset-0 bg-[#0F2C59]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/65 via-black/40 to-[#0F2C59]/55"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-[900px] mx-auto">

          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 sm:mb-6"
          >
            <span
              className="text-[#D4AF37] text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase drop-shadow-lg"
              style={{ fontWeight: 600 }}
            >
              COMMUNITY • GROWTH • EMPOWERMENT
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 drop-shadow-2xl px-2"
            style={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            {heading}
          </motion.h1>

          {/* Animated Gold Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-[#D4AF37] mx-auto mb-4 sm:mb-6 shadow-lg"
          />

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/90 text-sm sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 drop-shadow-lg px-4"
            style={{ fontWeight: 500 }}
          >
            {subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center px-4 sm:px-0"
          >
            <button
              onClick={onMemberClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white border-2 border-white rounded-[10px] hover:bg-white hover:text-[#0F2C59] transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-lg sm:min-w-[180px] text-sm sm:text-base"
              style={{ fontWeight: 600 }}
            >
              Become a Member
            </button>
            <button
              onClick={onDonateClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white border-2 border-white rounded-[10px] hover:bg-white hover:text-[#0F2C59] transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-lg sm:min-w-[180px] text-sm sm:text-base"
              style={{ fontWeight: 600 }}
            >
              Support Us
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white border-2 border-white rounded-[10px] hover:bg-white hover:text-[#0F2C59] transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-lg sm:min-w-[180px] text-sm sm:text-base"
              style={{ fontWeight: 600 }}
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — hide on very short screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 cursor-pointer hidden sm:flex"
      >
        <ChevronDown className="w-6 h-6 drop-shadow-lg" />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const [showQR, setShowQR] = useState(false);
  const [showMember, setShowMember] = useState(false);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80",
      heading: "Empowering Vaishya Entrepreneurs for a Stronger Future",
      subheading: "Supporting visionary leaders to build impactful businesses.",
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
      heading: "Education. Innovation. Growth.",
      subheading: "Equipping the community with mentorship and practical knowledge.",
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
      heading: "Fueling Startups with Strategic Support",
      subheading: "Connecting founders with funding and guidance.",
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
      heading: "Stronger Together as a Community",
      subheading: "Building networks that create lasting impact.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: "ease-in-out",
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-6 sm:bottom-8 w-full">
        <ul className="flex justify-center gap-2 sm:gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white/40 hover:bg-white transition-all duration-300" />
    ),
  };

  return (
    <>
      <section id="home" className="hero-carousel">
        <style>{`
          .hero-carousel .slick-dots li button:before {
            display: none;
          }
          .hero-carousel .slick-dots li.slick-active button {
            background: #D4AF37;
            width: 28px;
            border-radius: 9999px;
          }
          @media (min-width: 640px) {
            .hero-carousel .slick-dots li.slick-active button {
              width: 36px;
            }
          }
          .hero-carousel .slick-slide > div {
            height: 100vh;
          }
        `}</style>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <HeroSlide
              key={index}
              {...slide}
              onDonateClick={() => setShowQR(true)}
              onContactClick={handleContactClick}
              onMemberClick={() => setShowMember(true)}
            />
          ))}
        </Slider>
      </section>

      {/* QR Code Modal — bottom sheet on mobile */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              className="bg-white rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl w-full sm:max-w-md sm:mx-4 text-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" />
              <p className="text-gray-500 text-sm mb-4">Scan the QR code with any UPI app</p>
              <img
                src="/assets/PNB QR_page-0001.jpg"
                alt="PNB Donation QR Code"
                className="w-full rounded-xl border border-gray-100 max-w-[280px] mx-auto"
              />
              <button
                onClick={() => setShowQR(false)}
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