import { Navbar } from "./components/navbar";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Briefcase, FileText, Landmark, ShieldCheck, Mail } from "lucide-react";

export default function BlogStartBusiness() {
    const sections = [
        {
            id: "planning",
            title: "1. Initial Planning & Foundation",
            icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
            content: (
                <>
                    <p className="mb-4">Choosing the right legal structure is the first step. In Mumbai's dynamic market, you have several options:</p>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Private Limited Company:</strong> Best for startups looking to scale and raise venture capital.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>LLP (Limited Liability Partnership):</strong> Popular for professional services with lower compliance costs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Sole Proprietorship:</strong> Simplest form, ideal for small, individual-led operations.</span>
                        </li>
                    </ul>
                </>
            )
        },
        {
            id: "registration",
            title: "2. The MCA Registration Process",
            icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
            content: (
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                    <p className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Five Crucial Steps:</p>
                    <ol className="space-y-4">
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F2C59] text-white flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h4 className="font-bold text-[#0F2C59]">Obtain DSC & DIN</h4>
                                <p className="text-gray-600 text-sm">Digital Signature Certificates and Director Identification Numbers are mandatory for all directors.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F2C59] text-white flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h4 className="font-bold text-[#0F2C59]">Name Approval (SPICe+)</h4>
                                <p className="text-gray-600 text-sm">Apply for a unique business name through the Ministry of Corporate Affairs (MCA) portal.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F2C59] text-white flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h4 className="font-bold text-[#0F2C59]">Draft MOA & AOA</h4>
                                <p className="text-gray-600 text-sm">Prepare the Memorandum and Articles of Association defining your company's objectives and rules.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            )
        },
        {
            id: "licenses",
            title: "3. Essential Local Licenses",
            icon: <Landmark className="w-6 h-6 text-[#D4AF37]" />,
            content: (
                <p className="mb-4">
                    Operating in Mumbai requires specific permits from the <strong>Brihanmumbai Municipal Corporation (BMC)</strong>. 
                    The most critical is the <strong>Shop and Establishment License</strong> (Gumasta License), which is mandatory 
                    for any commercial premises within city limits. Depending on your industry, you may also need FSSAI for food businesses 
                    or an Import-Export Code (IEC).
                </p>
            )
        },
        {
            id: "growth",
            title: "4. Post-Registration & Growth",
            icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
            content: (
                <p>
                    Once registered, focus on opening a current bank account and applying for GST if your turnover exceeds ₹40 lakhs. 
                    Mumbai offers a rich ecosystem of investors and mentors. Networking is the lifeblood of business here—join communities 
                    to accelerate your path to success.
                </p>
            )
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <Navbar forceSolid />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#0F2C59]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#D4AF37] uppercase bg-white/10 rounded-full backdrop-blur-sm">
                            Startup Guide
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            The Definitive Guide to Starting a <span className="text-[#D4AF37]">Business in Mumbai</span>
                        </h1>
                        <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
                            Navigate the legal, financial, and cultural landscape of India's financial capital with our step-by-step roadmap for entrepreneurs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        
                        {/* MAIN CONTENT */}
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none prose-headings:text-[#0F2C59] prose-p:text-gray-600">
                                <p className="text-xl font-medium text-[#0F2C59] mb-12 border-l-4 border-[#D4AF37] pl-6 italic">
                                    "Mumbai is not just a city; it's a dream for millions. For entrepreneurs, it offers unparalleled access to capital, talent, and a market that never sleeps."
                                </p>

                                {sections.map((section) => (
                                    <motion.div 
                                        key={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="mb-12 pb-12 border-b border-gray-100 last:border-0"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-[#0F2C59]/5 flex items-center justify-center">
                                                {section.icon}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0">{section.title}</h2>
                                        </div>
                                        <div className="text-lg leading-relaxed text-gray-700">
                                            {section.content}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-[#0F2C59] mb-6">Quick Checklist</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Digital Signature Certificate",
                                            "Company Name Reservation",
                                            "PAN & TAN Registration",
                                            "Bank Account Opening",
                                            "GST Registration",
                                            "Professional Tax Enrollment"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#0F2C59] to-[#1a3a6e] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                        
                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
                                <Mail className="w-10 h-10 text-[#D4AF37]" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Vaishya Community</h2>
                            <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
                                Subscribe to our newsletter to receive exclusive startup resources, news, and community event invites.
                            </p>
                            
                            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-all"
                                />
                                <button className="px-8 py-4 bg-[#D4AF37] hover:bg-[#c4a132] text-[#0F2C59] font-bold rounded-xl transition-all whitespace-nowrap">
                                    Subscribe Now
                                </button>
                            </form>
                            <p className="mt-6 text-white/40 text-xs uppercase tracking-widest font-bold">
                                No spam. Just value. Every week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER PLACEHOLDER */}
            <footer className="py-12 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-sm">
                    © 2026 Vaishya Community Startup Foundations. All rights reserved.
                </p>
            </footer>
        </div>
    );
}