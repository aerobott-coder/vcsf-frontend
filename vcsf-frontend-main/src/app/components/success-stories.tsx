import { motion } from "motion/react";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SuccessStories() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Tech Solutions",
      image: "/assets/rajesh.jfif",
      imageAlt: "Rajesh Kumar — Mumbai startup founder who secured seed capital through VCSF",
      text: "Securing startup funding and mentorship from VCSF helped us scale our Mumbai team into a thriving 50+ employee tech company.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      business: "Sharma Exports",
      image: "/assets/priya.jfif",
      imageAlt: "Priya Sharma — Mumbai entrepreneur empowered by VCSF business networking",
      text: "VCSF's high-level business networking provided the essential connections and growth opportunities my Mumbai export business needed to expand.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      business: "Patel Manufacturing",
      image: "/assets/amit.jfif",
      imageAlt: "Amit Patel — Business owner who benefited from VCSF mentorship and workshops",
      text: "The phenomenal business growth workshops and mentorship at VCSF made navigating Mumbai's startup ecosystem seamless and highly rewarding.",
      rating: 5,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vaishya Community Startup Foundation",
    "url": "https://vcsf.org",
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      }
    }))
  };

  return (
    <section
      id="success-stories"
      aria-label="Vaishya Community Foundation Success Stories — Entrepreneur Testimonials"
      className="py-12 sm:py-20 bg-white"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-[#0F2C59] mb-3 sm:mb-4 text-2xl sm:text-4xl leading-[1.2] tracking-[0.5px]" style={{ fontWeight: 800 }}>
            Real Startup Success Stories from Mumbai Entrepreneurs
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover how Mumbai’s startup ecosystem is growing through mentorship, funding, and business support. We help entrepreneurs scale their startups with confidence and real-world guidance.          </p>

          {/* Hidden SEO Keywords */}
          <p className="sr-only">
            Vaishya Community Startup Foundation in Mumbai offers startup success stories from local entrepreneurs. Our platform provides mentorship, funding support, and business growth opportunities for startups in Mumbai's professional ecosystem.
          </p>
        </motion.div>
 
        {/* Success Stories Slider */}
        <div className="mx-auto max-w-7xl">
          <Slider
            dots={true}
            infinite={true}
            speed={800}
            autoplay={true}
            autoplaySpeed={7000}
            slidesToShow={3}
            slidesToScroll={1}
            pauseOnHover={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 py-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[340px] border border-gray-100/50"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  {/* Top Section: Profile & Info */}
                  <div className="flex flex-col items-center text-center">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-[#D4AF37] shadow-sm"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                    <h3
                      className="text-gray-900 font-bold text-lg mb-1"
                      itemProp="author"
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4"
                      itemProp="name"
                    >
                      {testimonial.business}
                    </p>
                  </div>
 
                  {/* Middle Section: Testimonial Text */}
                  <div className="flex-grow flex items-center justify-center">
                    <p
                      className="text-gray-600 text-sm leading-relaxed text-center italic"
                      itemProp="reviewBody"
                    >
                      "{testimonial.text}"
                    </p>
                  </div>
 
                  {/* Bottom Section: Star Rating */}
                  <div
                    className="flex gap-1 justify-center pt-6 mt-auto border-t border-gray-50"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}