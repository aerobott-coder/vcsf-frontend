import { motion } from "motion/react";
import { Shield, Heart, Handshake, CheckCircle2 } from "lucide-react";

export function WhyTrustUs() {
    const trustPoints = [
        {
            icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" aria-hidden="true" />,
            title: "Expert Entrepreneur Mentorship",
            description: "Scaling Mumbai startups through personalized business guidance and mentorship."
        },
        {
            icon: <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" aria-hidden="true" />,
            title: "Startup Funding Support",
            description: "Providing seed capital to help Mumbai entrepreneurs launch and grow new ventures."
        },
        {
            icon: <Handshake className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" aria-hidden="true" />,
            title: "Business Growth Programs",
            description: "Specialized training in Mumbai for sustainable and scalable commercial success."
        }
    ];

    const checkPoints = [
        "Expert entrepreneur mentorship in Mumbai",
        "Proven business growth and scaling programs",
        "Reliable startup funding support for founders",
        "Ethical and community-driven startup ecosystem"
    ];

    return (
        <section
            id="why-trust-us"
            aria-label="Why Trust Vaishya Community Foundation — Registered Non-Profit, Ethical & Transparent"
            className="py-14 sm:py-24 bg-gray-50 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 sm:gap-16">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-lg sm:text-2xl mb-3 sm:mb-4 block">
                                Why Trust Us
                            </span>
                            <h2
                                className="text-[#0F2C59] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-8 leading-[1.2] tracking-[0.5px] overflow-hidden"
                                style={{ fontWeight: 800 }}
                            >
                                Why Mumbai Entrepreneurs Trust Our <span className="text-[#D4AF37]">Startup Support</span>
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
                                Vaishya Community Foundation offers expert entrepreneur mentorship and business growth programs to help Mumbai startups scale with confidence through reliable funding support.
                            </p>

                            {/* Hidden SEO Paragraph */}
                            <p className="sr-only">
                                Vaishya Community Foundation provides startup support in Mumbai, entrepreneur mentorship, and business growth programs for new ventures through funding and seed capital.
                            </p>

                            <div
                                className="space-y-3 sm:space-y-4 mb-7 sm:mb-10"
                                role="list"
                                aria-label="Reasons to trust Vaishya Community Foundation"
                            >
                                {checkPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        role="listitem"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center gap-2 sm:gap-3"
                                    >
                                        <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
                                        <span className="text-[#0F2C59] font-medium text-sm sm:text-base">{point}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="inline-block bg-[#0F2C59] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl relative"
                            >
                                <p className="text-sm sm:text-lg italic font-medium">
                                    "Empowering the next generation of Mumbai startups through trusted mentorship and funding."
                                </p>
                                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#0F2C59] rotate-45 transform" aria-hidden="true"></div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Feature Cards */}
                    <div
                        className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                        role="list"
                        aria-label="Vaishya Community Foundation trust pillars"
                    >
                        {trustPoints.map((item, index) => (
                            <motion.div
                                key={index}
                                role="listitem"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`bg-white p-5 sm:p-8 rounded-3xl shadow-lg border-b-4 border-[#D4AF37] hover:-translate-y-2 transition-transform duration-300 ${index === 2 ? "sm:col-span-2" : ""
                                    }`}
                            >
                                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-inner" aria-hidden="true">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#0F2C59] text-base sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}