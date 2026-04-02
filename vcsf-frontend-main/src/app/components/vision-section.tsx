import { motion } from "motion/react";
import { Sunrise, Users, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VisionSection() {
    const visionHighlights = [
        {
            icon: <Sunrise className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" aria-hidden="true" />,
            title: "Startup Opportunities in Mumbai",
            description: "Creating opportunities for entrepreneurs through funding support, mentorship programs, and startup guidance."
        },
        {
            icon: <Users className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" aria-hidden="true" />,
            title: "Strong Business Network",
            description: "Building a powerful network of entrepreneurs, mentors, and investors within the Vaishya community."
        },
        {
            icon: <ShieldCheck className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" aria-hidden="true" />,
            title: "Entrepreneur Growth & Support",
            description: "Helping startups grow through mentorship, business development, and real-world guidance."
        }
    ];

    return (
        <section
            id="vision"
            aria-label="Vaishya Community Foundation Vision — Self-Reliant Future"
            className="relative py-14 sm:py-24 bg-[#0F2C59] overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=80"
                    alt="Sunrise symbolising hope and growth for the Vaishya community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59] via-[#0F2C59]/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-3/5 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-lg sm:text-2xl mb-3 sm:mb-4 block">
                                Our Vision
                            </span>
                            <h2
                                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-8 leading-tight"
                                style={{ fontWeight: 800 }}
                            >
                                Building a <span className="text-[#D4AF37]">Self-Reliant</span> Vaishya Startup Community Together
                            </h2>
                            <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                                Vaishya Community Startup Foundation aims to build a strong and self-reliant startup community in Mumbai by supporting entrepreneurs with access to funding, mentorship, and business opportunities. We focus on empowering individuals from the Vaishya community to grow successful and sustainable ventures.
                            </p>
                        </motion.div>

                        {/* Icon Highlights — 1-col mobile, 3-col md+ */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8"
                            role="list"
                            aria-label="Vision highlights of Vaishya Community Foundation"
                        >
                            {visionHighlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    role="listitem"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 flex sm:flex-col items-start sm:items-start gap-3 sm:gap-0"
                                >
                                    <div className="mb-0 sm:mb-4 flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-[#D4AF37]">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-white/70">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex w-full lg:w-2/5 justify-center"
                    >
                        <div className="relative group">
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#BFA12C] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                                aria-hidden="true"
                            ></div>
                            <div className="relative bg-[#1a3a6e] p-2 rounded-2xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
                                    alt="Vaishya community members united for growth, education, and entrepreneurship"
                                    className="rounded-xl w-full h-[380px] lg:h-[450px] object-cover filter brightness-90 hover:brightness-100 transition duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}