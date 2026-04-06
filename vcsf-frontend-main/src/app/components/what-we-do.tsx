import { motion } from "motion/react";
import { Landmark, Rocket, Handshake, TrendingUp } from "lucide-react";

const cards = [
    {
        icon: Landmark,
        title: "Startup Funding",
        description: "Access early-stage seed capital to kickstart your business in Mumbai.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80&fit=crop",
        imageAlt: "Startup funding and seed capital support in Mumbai",
        tag: "Funding",
    },
    {
        icon: Rocket,
        title: "Expert Mentorship",
        description: "Get one-on-one guidance from seasoned entrepreneurs to scale your venture.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
        imageAlt: "One-on-one startup mentorship in Mumbai",
        tag: "Mentorship",
    },
    {
        icon: Handshake,
        title: "Startup Community",
        description: "Connect with a powerful network of founders and investors for strategic growth.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&fit=crop",
        imageAlt: "Strategic business networking for startups in Mumbai",
        tag: "Community",
    },
    {
        icon: TrendingUp,
        title: "Business Growth",
        description: "Master the scaling process through our specialized development workshops.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&fit=crop",
        imageAlt: "Business growth workshops and startup training",
        tag: "Growth",
    },
];

export function WhatWeDo() {
    return (
        <section
            id="what-we-do"
            aria-label="How We Support Startups and Entrepreneurs in Mumbai"
            className="py-14 sm:py-24 bg-[#F9F7F2] overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2
                        className="text-[#0F2C59] text-2xl sm:text-4xl"
                        style={{ fontWeight: 800, lineHeight: 1.2, letterSpacing: '0.5px' }}
                    >
                        How We Support Startups and Entrepreneurs in Mumbai
                    </h2>
                    <p className="text-gray-500 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                        We help entrepreneurs and startups grow through funding support, mentorship, skill development, and a strong business network in Mumbai.
                    </p>
                </motion.div>

                {/* Cards Grid: 1-col mobile → 2-col sm → 4-col lg */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    role="list"
                    aria-label="Vaishya Community Startup Foundation services"
                >
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                role="listitem"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -12 }}
                                className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-[0_20px_50px_rgba(15,44,89,0.15)] hover:ring-1 hover:ring-[#D4AF37]/30 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative h-40 sm:h-48 shrink-0">
                                    <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                                        <img
                                            src={card.image}
                                            alt={card.imageAlt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {/* Tag Badge */}
                                    <span
                                        className="absolute top-4 left-4 bg-[#D4AF37] text-[#0F2C59] text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase font-black tracking-widest z-20 shadow-sm"
                                    >
                                        {card.tag}
                                    </span>

                                    {/* Floating Icon with Glow */}
                                    <div
                                        className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-white z-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                        aria-hidden="true"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#F9F7F2] flex items-center justify-center group-hover:bg-[#0F2C59] transition-colors duration-500">
                                            <Icon className="w-5 h-5 text-[#0F2C59] group-hover:text-white transition-colors duration-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Content */}
                                <div className="flex flex-col flex-grow pt-10 px-6 pb-8 text-center bg-white">
                                    <h3
                                        className="text-[#0F2C59] text-base sm:text-lg mb-3 min-h-[48px] flex items-center justify-center group-hover:text-[#D4AF37] transition-colors duration-500"
                                        style={{ fontWeight: 800, lineHeight: 1.3 }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-500">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Subtle Bottom Bar with Glow */}
                                <div
                                    className="h-1.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                                    aria-hidden="true"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}