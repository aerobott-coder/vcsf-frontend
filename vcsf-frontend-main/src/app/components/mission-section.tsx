import { motion } from "motion/react";
import { TrendingUp, Rocket, Users, Zap, ShieldCheck, Landmark } from "lucide-react";

export function MissionSection() {
    const missionPoints = [
        {
            icon: <Landmark className="w-8 sm:w-10 h-8 sm:h-10 transition-colors duration-500" aria-hidden="true" />,
            title: "Startup Funding & Capital Access",
            description: "We bridge the gap between early-stage ventures and capital by providing direct startup funding and access to Mumbai’s leading investment networks."
        },
        {
            icon: <Users className="w-8 sm:w-10 h-8 sm:h-10 transition-colors duration-500" aria-hidden="true" />,
            title: "One-on-One Expert Mentorship",
            description: "Connect with seasoned entrepreneurs and industry veterans who provide actionable guidance to navigate the complexities of scaling a business."
        },
        {
            icon: <Rocket className="w-8 sm:w-10 h-8 sm:h-10 transition-colors duration-500" aria-hidden="true" />,
            title: "Strategic Business Networking",
            description: "Join an exclusive startup community in Mumbai where founders, investors, and strategic partners collaborate to unlock new market opportunities."
        },
        {
            icon: <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 transition-colors duration-500" aria-hidden="true" />,
            title: "Business Development & Scaling",
            description: "We provide the tools and resources necessary for sustainable business growth, from go-to-market strategies to operational excellence."
        },
        {
            icon: <ShieldCheck className="w-8 sm:w-10 h-8 sm:h-10 transition-colors duration-500" aria-hidden="true" />,
            title: "Skill Development for Founders",
            description: "Empowering the next generation of Vaishya leaders with technical and leadership skills required to thrive in a competitive startup ecosystem."
        }
    ];

    return (
        <section
            id="mission"
            aria-label="Vaishya Community Startup Foundation Mission — Startup Funding, Mentorship & Growth"
            className="py-14 sm:py-24 bg-white relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#0F2C59]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-lg sm:text-2xl mb-3 sm:mb-4 block">
                            Our Mission
                        </span>
                        <h2
                            className="text-[#0F2C59] text-2xl sm:text-4xl md:text-5xl mb-4 sm:mb-6"
                            style={{ fontWeight: 800 }}
                        >
                            Empowering the Next Generation of <span className="text-[#D4AF37]">Entrepreneurs in Mumbai</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Vaishya Community Startup Foundation is an impact-driven startup community in Mumbai. We accelerate business growth by connecting founders with critical startup funding, expert mentorship, and a powerful network of investors and industry leaders.
                        </p>
                    </motion.div>
                </div>

                {/* Mission Cards Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center"
                    role="list"
                    aria-label="Vaishya Community Startup Foundation mission pillars"
                >
                    {missionPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            role="listitem"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`w-full bg-gray-50 p-5 sm:p-8 rounded-2xl border border-gray-100 hover:bg-[#0F2C59] hover:shadow-2xl transition-all duration-500 group ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            <div
                                className="w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm border border-transparent group-hover:bg-[#0F2C59] group-hover:border-white/20 transition-all duration-500"
                                aria-hidden="true"
                            >
                                <div className="text-[#0F2C59] group-hover:text-white transition-colors duration-500">
                                    {point.icon}
                                </div>
                            </div>
                            <h3 className="text-[#0F2C59] text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors duration-500">
                                {point.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-white/80 transition-colors duration-500">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}