import { motion } from "motion/react";
import { GraduationCap, Rocket, HeartHandshake, Globe, Handshake } from "lucide-react";

export function MissionSection() {
    const missionPoints = [
        {
            icon: <GraduationCap className="w-10 h-10 text-[#0F2C59]" />,
            title: "Education & Skills",
            description: "Promote education and skill development to empower individuals for a competitive world."
        },
        {
            icon: <Rocket className="w-10 h-10 text-[#0F2C59]" />,
            title: "Startup Culture",
            description: "Encourage startup and business culture through mentorship, networking, and resources."
        },
        {
            icon: <HeartHandshake className="w-10 h-10 text-[#0F2C59]" />,
            title: "Women Empowerment",
            description: "Empower women through specialized training, employment opportunities, and support systems."
        },
        {
            icon: <Globe className="w-10 h-10 text-[#0F2C59]" />,
            title: "Social Welfare",
            description: "Support social welfare and community service initiatives to uplift the underserved."
        },
        {
            icon: <Handshake className="w-10 h-10 text-[#0F2C59]" />,
            title: "Unity & Ethics",
            description: "Build unity and foster strong ethical values in society for a more harmonious world."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F2C59]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-2xl mb-4 block">
                            Our Mission
                        </span>
                        <h2
                            className="text-[#0F2C59] text-4xl md:text-5xl mb-6"
                            style={{ fontWeight: 800 }}
                        >
                            Our Commitment to <span className="text-[#D4AF37]">Growth</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We are dedicated to creating a supportive ecosystem that fosters innovation,
                            inclusivity, and ethical development for every member of our community.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {missionPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0F2C59] transition-colors duration-300">
                                <div className="group-hover:text-white transition-colors duration-300">
                                    {point.icon}
                                </div>
                            </div>
                            <h3 className="text-[#0F2C59] text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                                {point.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
