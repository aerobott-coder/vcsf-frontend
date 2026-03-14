import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Close menu on scroll
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const navLinks = [
        { name: "Home", path: "#home" },
        { name: "About Us", path: "#about" },
        { name: "Vision", path: "#vision" },
        { name: "What We Do", path: "#what-we-do" },
        { name: "Success Stories", path: "#success-stories" },
        { name: "Why Trust Us", path: "#why-trust-us" },
        { name: "Contact", path: "#contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-lg py-2 sm:py-3" : "bg-transparent py-3 sm:py-5"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center">

                    {/* Logo Section */}
                    <a href="#home" className="flex items-center space-x-2 sm:space-x-3 group">
                        <div className="w-9 sm:w-12 h-9 sm:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <img
                                src="/assets/logo.png"
                                alt="Vaishya Community Logo"
                                className="w-full h-full object-contain p-1"
                            />
                        </div>
                        <span className={`text-base sm:text-xl font-bold tracking-tight whitespace-nowrap transition-colors duration-300 ${
                            scrolled ? "text-[#0F2C59]" : "text-white"
                        }`}>
                            Vaishya <span className="text-[#D4AF37]">Community</span>
                            <span className="hidden md:inline"> Startup Foundations</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className={`text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-[#D4AF37] relative group ${
                                    scrolled ? "text-[#0F2C59]" : "text-white"
                                }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-lg transition-colors ${
                                scrolled ? "text-[#0F2C59] hover:bg-gray-100" : "text-white hover:bg-white/10"
                            }`}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu — full-screen overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 lg:hidden"
                            style={{ top: scrolled ? "48px" : "56px" }}
                            onClick={() => setIsOpen(false)}
                        />
                        {/* Menu panel */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden relative z-10"
                        >
                            <div className="flex flex-col px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.path}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        className="text-[#0F2C59] text-sm font-bold uppercase tracking-wide hover:text-[#D4AF37] transition-colors py-3 border-b border-gray-100 last:border-0 flex items-center justify-between"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <span className="text-[#D4AF37] text-lg">›</span>
                                    </motion.a>
                                ))}
                                <a
                                    href="#contact"
                                    className="bg-[#0F2C59] text-white text-center py-3.5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#1a3a6e] transition-colors mt-2 text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Join Now
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}