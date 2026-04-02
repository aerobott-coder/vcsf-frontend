import { Navbar } from "./components/navbar";
import { motion } from "motion/react";
import { TrendingUp, PieChart, Users, Zap, Landmark, CheckCircle2, ArrowRight, Mail } from "lucide-react";

export default function BlogFundingGuide() {
    const fundingStages = [
        {
            stage: "Bootstrapping & FFF",
            desc: "The initial phase where you use your own savings or contributions from Friends, Family, and Fools.",
            importance: "High - Proves your skin in the game.",
            icon: <Zap className="w-6 h-6 text-[#D4AF37]" />
        },
        {
            stage: "Angel Investment",
            desc: "High-net-worth individuals providing capital in exchange for convertible debt or ownership equity.",
            importance: "Medium - Bridges the gap to institutional VC.",
            icon: <Users className="w-6 h-6 text-[#D4AF37]" />
        },
        {
            stage: "Venture Capital (Pre-Seed/Seed)",
            desc: "Formal funding from investment firms to accelerate initial growth and product-market fit.",
            importance: "Critical - Sets the stage for rapid scaling.",
            icon: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <Navbar forceSolid />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#0F2C59]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#D4AF37] uppercase bg-white/10 rounded-full backdrop-blur-sm">
                            Investment Resources
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Startup Funding <span className="text-[#D4AF37]">Guide for Beginners</span>
                        </h1>
                        <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
                            Demystifying the world of venture capital, angel investment, and equity for first-time founders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg prose-headings:text-[#0F2C59] prose-p:text-gray-600">
                            <h2 className="text-3xl font-bold mb-8">Understanding the Funding Landscape</h2>
                            <p className="mb-8">
                                Securing funding is one of the most challenging aspects of starting a business. It's not just about the money; it's about finding the right partners who believe in your vision and can provide mentorship and industry connections.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-16">
                                {fundingStages.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group"
                                    >
                                        <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                        <h3 className="text-lg font-bold text-[#0F2C59] mb-2">{item.stage}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37]">{item.importance}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold mb-8">What Investors Look For</h2>
                            <div className="space-y-6 mb-16">
                                {[
                                    { title: "Strong Team", text: "Founders with relevant experience and a clear division of responsibilities." },
                                    { title: "Market Size", text: "A massive, growing target market that justifies high-risk investment." },
                                    { title: "Traction", text: "Proof of concept through recurring revenue, user growth, or pilot programs." },
                                    { title: "Unique Moat", text: "What makes your solution defensible against current and future competitors?" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-[#0F2C59] mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-gold/5 border-2 border-dashed border-[#D4AF37]/30 rounded-3xl mb-16">
                                <h3 className="text-xl font-bold text-[#0F2C59] mb-4 flex items-center gap-2">
                                    <Landmark className="text-[#D4AF37]" /> The "VCSF" Advantage
                                </h3>
                                <p className="text-gray-700 italic">
                                    "Members of the Vaishya Community Startup Foundation get priority access to our network of Angel Investors and a dedicated pitch-deck review session twice a year."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-[3rem] bg-[#0F2C59] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Pitch?</h2>
                            <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
                                Join our community to connect with experienced mentors who can help you refine your pitch and secure your first round of funding.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-[#D4AF37] hover:bg-[#c4a132] text-[#0F2C59] font-bold rounded-xl transition-all">
                                    Become a Member
                                </button>
                                <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20">
                                    View Pitch Templates
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-sm">
                    © 2026 Vaishya Community Startup Foundations. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
