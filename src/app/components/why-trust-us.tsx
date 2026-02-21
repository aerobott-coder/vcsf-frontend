import { motion } from "motion/react";
import { Shield, Heart, Handshake, CheckCircle2 } from "lucide-react";

export function WhyTrustUs() {
    const trustPoints = [
        {
            icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
            title: "Registered Trust",
            description: "We are a officially registered non-profit trust dedicated to social welfare."
        },
        {
            icon: <Heart className="w-8 h-8 text-[#D4AF37]" />,
            title: "Ethical & Transparent",
            description: "Our operations are built on a foundation of absolute transparency and ethics."
        },
        {
            icon: <Handshake className="w-8 h-8 text-[#D4AF37]" />,
            title: "Community Focused",
            description: "Every initiative is designed to uplift and strengthen our community roots."
        }
    ];

    const checkPoints = [
        "Registered non-profit trust",
        "Transparent and ethical working",
        "Community-focused initiatives",
        "Long-term vision for development",
        "Dedicated team and volunteers"
    ];

    return (
        <section id="why-trust-us" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-2xl mb-4 block">
                                Why Trust Us
                            </span>
                            <h2
                                className="text-[#0F2C59] text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight"
                                style={{ fontWeight: 800 }}
                            >
                                Building Trust Through <span className="text-[#D4AF37]">Action & Values</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                Our foundation is built on the belief that real change comes from consistent,
                                ethical, and transparent work. We are committed to the long-term prosperity
                                of our community.
                            </p>

                            <div className="space-y-4 mb-10">
                                {checkPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                                        <span className="text-[#0F2C59] font-medium">{point}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="inline-block bg-[#0F2C59] text-white px-8 py-4 rounded-2xl shadow-xl relative"
                            >
                                <p className="text-lg italic font-medium">
                                    "Our work is driven by values, not profit."
                                </p>
                                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#0F2C59] rotate-45 transform"></div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Feature Cards */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {trustPoints.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`bg-white p-8 rounded-3xl shadow-lg border-b-4 border-[#D4AF37] hover:-translate-y-2 transition-transform duration-300 ${index === 2 ? "sm:col-span-2" : ""
                                    }`}
                            >
                                <div className="w-16 h-16 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#0F2C59] text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
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
