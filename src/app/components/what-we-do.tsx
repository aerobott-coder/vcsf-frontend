import { motion } from "motion/react";
import { BookOpen, Briefcase, Users, Leaf } from "lucide-react";

const cards = [
    {
        icon: BookOpen,
        title: "Education & Skill Development",
        description:
            "We conduct workshops, seminars, and career guidance programs to empower individuals with the knowledge and skills they need to thrive.",
        image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80&fit=crop",
        tag: "Learn & Grow",
    },
    {
        icon: Briefcase,
        title: "Startup & Business Support",
        description:
            "We guide new entrepreneurs with mentorship, networking opportunities, and resources to turn their business ideas into reality.",
        image:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
        tag: "Build & Thrive",
    },
    {
        icon: Users,
        title: "Women Empowerment",
        description:
            "We support women through vocational training, self-employment programs, and business guidance to foster independence and confidence.",
        image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&fit=crop",
        tag: "Rise & Lead",
    },
    {
        icon: Leaf,
        title: "Community & Social Impact",
        description:
            "We bring the community together through cultural events, social initiatives, and collaborative programs that strengthen our roots.",
        image:
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&fit=crop",
        tag: "Connect & Impact",
    },
];

export function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-24 bg-[#F9F7F2] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >


                    <h2
                        className="text-[#0F2C59]"
                        style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.2 }}
                    >
                        What We Do
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                        Empowering the Vaishya community through education, entrepreneurship, and social
                        upliftment — one initiative at a time.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/70 via-transparent to-transparent" />

                                    {/* Tag badge */}
                                    <span
                                        className="absolute top-3 left-3 bg-[#D4AF37] text-[#0F2C59] text-xs px-3 py-1 rounded-full"
                                        style={{ fontWeight: 700, letterSpacing: "0.04em" }}
                                    >
                                        {card.tag}
                                    </span>

                                    {/* Icon circle */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg border-4 border-white z-10">
                                        <Icon className="w-6 h-6 text-[#0F2C59]" />
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="pt-10 px-5 pb-6 text-center">
                                    <h3
                                        className="text-[#0F2C59] mb-2"
                                        style={{ fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                                </div>

                                {/* Bottom accent bar on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
