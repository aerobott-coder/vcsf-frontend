import { motion } from "motion/react";
import { Sunrise, Users, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VisionSection() {
    const visionHighlights = [
        {
            icon: <Sunrise className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" />,
            title: "Rising Opportunities",
            description: "Creating new paths for education and growth."
        },
        {
            icon: <Users className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" />,
            title: "United Community",
            description: "Building strength through shared values and support."
        },
        {
            icon: <ShieldCheck className="w-6 sm:w-8 h-6 sm:h-8 text-[#D4AF37]" />,
            title: "Self-Reliance",
            description: "Empowering individuals to lead a dignified life."
        }
    ];

    return (
        <section id="vision" className="relative py-14 sm:py-24 bg-[#0F2C59] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=80"
                    alt="Rising Sun background"
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
                                Building a <span className="text-[#D4AF37]">Self-Reliant</span> Future Together
                            </h2>
                            <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                                To build a strong, united, and self-reliant Vaishya community where every
                                individual has access to education, entrepreneurship, and a dignified life.
                            </p>
                        </motion.div>

                        {/* Icon Highlights — 1-col mobile, 3-col md+ */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8">
                            {visionHighlights.map((item, index) => (
                                <motion.div
                                    key={index}
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

                    {/* Right Side: Image — hidden on mobile to save space, shown md+ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex w-full lg:w-2/5 justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#BFA12C] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-[#1a3a6e] p-2 rounded-2xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
                                    alt="Unity and Growth"
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