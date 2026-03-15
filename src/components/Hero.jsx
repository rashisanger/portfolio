// Hero.jsx
import { MapPin, Briefcase, Mail, Download, Eye, Github, Linkedin, Sparkles, Code, ChevronRight, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png';

function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [mounted, setMounted] = useState(false);

    const phrases = [
        'Full Stack Developer',
        'MERN Stack Specialist',
        'Problem Solver',
        'Team Leader'
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);

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

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const pulseAnimation = {
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <section className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden pt-16 sm:pt-20">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs - Yellow/Orange */}
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-[#FBBF24] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#FBBF24]/30 rounded-full"
                            style={{
                                left: `${(i * 10) % 100}%`,
                                top: `${(i * 15) % 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 20, 0],
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 5 + i,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4 sm:space-y-6 text-center lg:text-left"
                    >
                        {/* Greeting Chip */}
                        <motion.div
                            variants={fadeInLeft}
                            className="inline-flex items-center gap-2 bg-[#1e293b] border border-[#334155] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mx-auto lg:mx-0"
                        >
                            <motion.div
                                className="w-2 h-2 bg-green-500 rounded-full"
                                animate={pulseAnimation}
                            />
                            <span className="text-xs sm:text-sm text-gray-300">Available for opportunities</span>
                            <Sparkles size={14} className="text-[#FBBF24] ml-1" />
                        </motion.div>

                        {/* Name with improved layout - "Hi, I'm" on one line, name on next */}
                        <motion.div variants={fadeInLeft}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                <span className="block">Hi, I'm</span>
                                <span className="block mt-1 sm:mt-2">
                                    <span className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#FB923C] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient font-extrabold">
                                        Rashi Sanger
                                    </span>
                                </span>
                            </h1>
                            {/* Subtle decorative line */}
                            <motion.div
                                className="h-1 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#FB923C] rounded-full mt-3 w-20 mx-auto lg:mx-0"
                                initial={{ width: 0 }}
                                animate={{ width: "5rem" }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            />
                        </motion.div>

                        {/* Typing Animation */}
                        <motion.div
                            variants={fadeInLeft}
                            className="h-12 sm:h-16 mt-4"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 flex items-center gap-2 justify-center lg:justify-start">
                                <Code className="text-[#FBBF24]" size={20} />
                                <span>I'm a </span>
                                <span className="text-[#FBBF24] font-semibold border-r-2 border-[#FBBF24] pr-2 min-w-[150px] sm:min-w-[180px]">
                                    {text}
                                </span>
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeInLeft}
                            className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Computer Science Engineering student passionate about building scalable web applications and solving real-world problems using code.
                        </motion.p>

                        {/* Location and Status - Yellow accents */}
                        <motion.div
                            variants={fadeInLeft}
                            className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
                        >
                            {[
                                { icon: MapPin, text: "Punjab, India" },
                                { icon: Briefcase, text: "Open to internships" },
                                { icon: Code, text: "CGPA: 8.47" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-1 sm:gap-2 bg-[#1e293b] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#334155]"
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "#FBBF24",
                                        backgroundColor: "#1e293b"
                                    }}
                                >
                                    <item.icon size={12} className="text-[#FBBF24]" />
                                    <span className="text-xs sm:text-sm text-gray-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeInLeft}
                            className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative overflow-hidden bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#0f172a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium shadow-lg shadow-[#FBBF24]/25 text-sm sm:text-base"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Eye size={16} />
                                    View Projects
                                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#FB923C]"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>

                            <motion.button
                                onClick={handleResumeDownload}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-[#1e293b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#2d3a4f] transition-all duration-300 border border-[#334155] text-sm sm:text-base"
                            >
                                <Download size={16} />
                                Download Resume
                            </motion.button>
                        </motion.div>

                        {/* Social Links - Yellow on hover */}
                        <motion.div
                            variants={fadeInLeft}
                            className="flex gap-2 sm:gap-3 pt-4 justify-center lg:justify-start"
                        >
                            {[
                                { icon: Github, link: "https://github.com/rashisanger", label: "GitHub" },
                                { icon: Linkedin, link: "https://www.linkedin.com/in/rashi-sanger-5b991a343/", label: "LinkedIn" },
                                { icon: Mail, link: "mailto:rashisanger@email.com", label: "Email" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-[#FBBF24] transition-colors group"
                                    whileHover={{
                                        y: -3,
                                        transition: { type: "spring", stiffness: 400 }
                                    }}
                                >
                                    <social.icon size={16} className="text-gray-400 group-hover:text-[#FBBF24] transition-colors" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Profile Image Container */}
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                            {/* Animated Rings - Yellow/Orange */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-[#FBBF24]/30"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-[#F59E0B]/20"
                                animate={{
                                    scale: [1.1, 1.2, 1.1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />

                            {/* Background Gradient - Yellow/Orange */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            {/* Image Frame */}
                            <motion.div
                                className="relative w-full h-full rounded-full border-4 border-[#FBBF24]/30 overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={profilePic}
                                    alt="Rashi Sanger"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Tech Icons - Yellow/Orange */}
                            <motion.div
                                className="absolute -right-2 sm:-right-4 top-12 sm:top-16 p-2 sm:p-3 bg-[#1e293b] rounded-xl border border-[#334155] shadow-lg"
                                animate={floatAnimation}
                            >
                                <Code2 size={16} className="text-[#FBBF24]" />
                            </motion.div>

                            <motion.div
                                className="absolute -left-2 sm:-left-4 bottom-12 sm:bottom-16 p-2 sm:p-3 bg-[#1e293b] rounded-xl border border-[#334155] shadow-lg"
                                animate={floatAnimation}
                                transition={{ delay: 1 }}
                            >
                                <Sparkles size={16} className="text-[#F59E0B]" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Text */}
            <motion.div
                className="absolute right-0 bottom-0 text-[80px] sm:text-[120px] md:text-[200px] font-bold text-white/5 select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                RASHI
            </motion.div>
        </section>
    );
}

export default Hero;