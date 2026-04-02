import { Navbar } from "./components/navbar";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

const blogPosts = [
    {
        title: "How to Start a Business in Mumbai",
        excerpt: "A comprehensive step-by-step roadmap for entrepreneurs navigating the legal and cultural landscape of India's financial hub.",
        href: "/blog/start-business",
        author: "VCSF Team",
        readTime: "8 min read",
        category: "Startup Guide",
        imageOverlay: "from-blue-600/20 to-indigo-900/40"
    },
    {
        title: "Startup Funding Guide for Beginners",
        excerpt: "Demystifying venture capital and angel investment stages for first-time founders looking to raise their initial capital.",
        href: "/blog/funding-guide",
        author: "Investment Team",
        readTime: "6 min read",
        category: "Investment",
        imageOverlay: "from-amber-500/20 to-orange-900/40"
    }
];

export default function Blog() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar forceSolid />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    
                    {/* PAGE HEADER */}
                    <div className="max-w-4xl mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-4 block">
                                Resources & Knowledge
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F2C59] mb-6 leading-tight">
                                Blogs & Strategic <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F2C59] to-[#D4AF37]">Business Insights</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                Stay informed with the latest trends, legal updates, and strategic advice tailored for the Vaishya community's startup ecosystem.
                            </p>
                        </motion.div>
                    </div>

                    {/* FEATURED POST (OR GRID) */}
                    <div className="grid lg:grid-cols-2 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.href}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative block bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,44,89,0.1)]"
                            >
                                {/* CARD BACKGROUND DECORATION */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${post.imageOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative p-8 md:p-10 h-full flex flex-col z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 text-[#0F2C59] text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                                            <Tag size={12} />
                                            {post.category}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#0F2C59]/5 flex items-center justify-center text-[#0F2C59] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 group-hover:bg-[#D4AF37] group-hover:text-white">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F2C59] mb-4 leading-tight">
                                        {post.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed group-hover:text-gray-900 transition-colors">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-6 pt-6 border-t border-gray-100 group-hover:border-[#D4AF37]/20">
                                        <div className="flex items-center gap-2 text-xs font-bold text-[#0F2C59]">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">
                                                {post.author.charAt(0)}
                                            </div>
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <BookOpen size={14} />
                                            Article
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* EMPTY STATE / COMING SOON CARD */}
                        <div className="p-8 md:p-10 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center bg-gray-50/50">
                            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 text-gray-400">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-400 mb-2">More Insights Coming</h3>
                            <p className="text-sm text-gray-400 max-w-[250px]">
                                We are drafting more articles on legal compliance and marketing strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}