// Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active link based on scroll position
            const sections = ['about', 'skills', 'projects', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#certifications", label: "Certifications" },
        { href: "#contact", label: "Contact" }
    ];

    // Function to handle resume download
    const handleResumeDownload = () => {
        // Replace with your actual resume file path
        const resumeUrl = '/MYcv.pdf'; // Place your resume file in the public folder
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Rashi_Sanger_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b] py-3'
                : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl sm:text-2xl font-bold text-white hover:text-[#FBBF24] transition-colors"
                    >
                        Rashi<span className="text-[#FBBF24]">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`text-sm lg:text-base font-medium transition-colors duration-300 relative group ${activeLink === link.href.substring(1)
                                        ? 'text-[#FBBF24]'
                                        : 'text-gray-300 hover:text-[#FBBF24]'
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FBBF24] transition-all duration-300 ${activeLink === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </a>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <motion.button
                        onClick={handleResumeDownload}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 bg-[#FBBF24] text-[#0f172a] px-4 py-2 rounded-lg hover:bg-[#F59E0B] transition-colors text-sm font-medium shadow-lg shadow-[#FBBF24]/20"
                    >
                        <FileText size={16} />
                        Resume
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-300 hover:text-[#FBBF24] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-[#1e293b] py-5 px-4 shadow-xl"
                    >
                        <div className="flex flex-col items-center gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-gray-300 hover:text-[#FBBF24] font-medium py-2 transition-colors ${activeLink === link.href.substring(1) ? 'text-[#FBBF24]' : ''
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <motion.button
                                onClick={handleResumeDownload}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-[#FBBF24] text-[#0f172a] px-6 py-2.5 rounded-lg hover:bg-[#F59E0B] transition-colors w-full justify-center font-medium"
                            >
                                <FileText size={16} />
                                Download Resume
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;