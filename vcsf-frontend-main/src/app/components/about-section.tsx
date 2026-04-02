import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
    return (
        <section id="about" aria-label="About Vaishya Community Startup Foundation" className="py-12 sm:py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                                alt="Startup mentorship and funding support in Mumbai"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0F2C59]/10 hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#0F2C59]/5 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-lg sm:text-2xl mb-3 sm:mb-4 block">
                            About Us
                        </span>

                        <h2
                            className="text-[#0F2C59] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-8"
                            style={{ fontWeight: 800, lineHeight: 1.2 }}
                        >
                            Building a Stronger <span className="text-[#D4AF37]">Vaishya Business Community</span> in Mumbai
                        </h2>

                        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                            <p>
                                Vaishya Community Startup Foundation supports entrepreneurs in Mumbai through startup funding, mentorship, and business development programs. Our goal is to help individuals from the Vaishya community build successful and sustainable businesses.
                            </p>
                            <p>
                                As a growing startup community in Mumbai, we connect founders, mentors, and investors to create real opportunities for students, young entrepreneurs, and small business owners. Through networking, guidance, and practical support, we help businesses grow faster and scale effectively.
                            </p>
                        </div>

                        <motion.div
                            className="mt-8 sm:mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <a
                                href="#contact"
                                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#0F2C59] text-white rounded-lg hover:bg-[#D4AF37] hover:text-[#0F2C59] transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Join the Startup Community
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}