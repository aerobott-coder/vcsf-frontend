import { motion } from "motion/react";
import { Sunrise, Users, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VisionSection() {
    const visionHighlights = [
        {
            icon: <Sunrise className="w-8 h-8 text-[#D4AF37]" />,
            title: "Rising Opportunities",
            description: "Creating new paths for education and growth."
        },
        {
            icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
            title: "United Community",
            description: "Building strength through shared values and support."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
            title: "Self-Reliance",
            description: "Empowering individuals to lead a dignified life."
        }
    ];

    return (
        <section id="vision" className="relative py-24 bg-[#0F2C59] overflow-hidden">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=80"
                    alt="Rising Sun background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59] via-[#0F2C59]/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-3/5 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-2xl mb-4 block">
                                Our Vision
                            </span>
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight"
                                style={{ fontWeight: 800 }}
                            >
                                Building a <span className="text-[#D4AF37]">Self-Reliant</span> Future Together
                            </h2>
                            <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
                                To build a strong, united, and self-reliant Vaishya community where every
                                individual has access to education, entrepreneurship, and a dignified life.
                            </p>
                        </motion.div>

                        {/* Icon Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {visionHighlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                                >
                                    <div className="mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-2 text-[#D4AF37]">{item.title}</h3>
                                    <p className="text-sm text-white/70">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visual Element / Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/5 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#BFA12C] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-[#1a3a6e] p-2 rounded-2xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
                                    alt="Unity and Growth"
                                    className="rounded-xl w-full h-[450px] object-cover filter brightness-90 hover:brightness-100 transition duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
