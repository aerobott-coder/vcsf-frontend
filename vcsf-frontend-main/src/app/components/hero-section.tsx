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
      className={`absolute top-1/2 -translate-y-1/2 ${direction === "left" ? "left-3 md:left-12" : "right-3 md:right-12"
        } z-10 w-10 h-10 bg-white/20 hover:bg-[#D4AF37] rounded-full flex items-center justify-center`}
    >
      <Icon className="w-5 h-5 text-white" />
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

function HeroSlide({
  image,
  heading,
  subheading,
  onDonateClick,
  onContactClick,
  onMemberClick,
}: SlideProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt="Startup mentorship and funding support in Mumbai"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.9)" }}
        />

        {/* SAME LOOK OVERLAY (optimized) */}
        <div className="absolute inset-0 bg-[#0F2C59]/60"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/50 via-black/30 to-[#0F2C59]/50"></div>
      </div>

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
            <span className="text-[#D4AF37] text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase">
              VAISHYA STARTUP COMMUNITY • MUMBAI • ENTREPRENEUR SUPPORT          </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.2] tracking-[0.5px]"
          >
            {heading}
          </motion.h1>

          {/* Underline */}
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/90 text-lg sm:text-xl mb-10"
          >
            {subheading}
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onMemberClick}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0F2C59]"
            >
              Become a Member
            </button>

            <button
              onClick={onDonateClick}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0F2C59]"
            >
              Support Us
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0F2C59]"
            >
              Contact Us
            </button>
          </div>

          <p className="sr-only">
            Vaishya Community Startup Foundation in Mumbai supports entrepreneurs with startup funding, mentorship, and business growth opportunities.
          </p>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        <ChevronDown />
      </div>
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
      image: "/assets/hero.webp",
      heading: "Empowering Vaishya Entrepreneurs for a Stronger Future",
      subheading: "Helping startups grow through community support, networking, and funding opportunities across Mumbai.",
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
      heading: "Education. Innovation. Growth.",
      subheading: "We help entrepreneurs grow their startups through funding support, mentorship programs, and a strong business network in Mumbai.",
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
      heading: "Startup Support, Funding & Mentorship for Entrepreneurs in Mumbai",
      subheading: "Helping entrepreneurs in Mumbai grow through funding opportunities, mentorship, and strong business networks.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <>
      <section id="home" className="hero-carousel">
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

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setShowQR(false)}
          >
            <div className="bg-white p-6 rounded-xl text-center">
              <p className="mb-4">Scan QR to donate</p>
              <img src="/assets/PNB QR_page-0001.jpg" className="max-w-[250px] mx-auto" />
              <button
                onClick={() => setShowQR(false)}
                className="mt-4 px-4 py-2 bg-[#0F2C59] text-white rounded"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BecomeMemberModal isOpen={showMember} onClose={() => setShowMember(false)} />
    </>
  );
}