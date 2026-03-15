// Contact.jsx
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Heart, Send, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
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

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const floatAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "rashi.sanger09@email.com",
            link: "mailto:rashi.sanger09@email.com",
            color: "from-[#FBBF24] to-[#F59E0B]",
            bgColor: "bg-[#FBBF24]/10",
            description: "Drop a message anytime"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 6239547995",
            link: "tel:+916239547995",
            color: "from-[#F59E0B] to-[#FB923C]",
            bgColor: "bg-[#F59E0B]/10",
            description: "Available on WhatsApp"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Lovely Professional University, Punjab",
            link: "https://maps.google.com/?q=LPU+Punjab",
            color: "from-[#FB923C] to-[#FBBF24]",
            bgColor: "bg-[#FB923C]/10",
            description: "Based in India"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            username: "@rashisanger",
            link: "https://github.com/rashisanger",
            color: "from-[#FBBF24] to-[#F59E0B]",
            bgColor: "bg-[#FBBF24]/10",
            stats: "15+ repos"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            username: "Rashi Sanger",
            link: "https://www.linkedin.com/in/rashi-sanger-5b991a343/",
            color: "from-[#F59E0B] to-[#FB923C]",
            bgColor: "bg-[#F59E0B]/10",
            stats: "500+ connections"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-[#0a0f1a] overflow-hidden relative">

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-[#FBBF24]/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                {/* Additional floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#FBBF24]/20 rounded-full"
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Section Header with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Get In <span className="text-[#FBBF24]">Touch</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-400 mt-4 max-w-2xl mx-auto"
                    >
                        Let's connect and collaborate • Available for opportunities and interesting projects
                    </motion.p>
                </motion.div>

                {/* Main Contact Info Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Contact Methods */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={scaleIn}
                                whileHover={{
                                    y: -8,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                                className="group relative bg-[#1e293b] p-6 rounded-2xl border border-[#334155] hover:border-[#FBBF24] transition-all duration-300 overflow-hidden"
                            >
                                {/* Animated Background Gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                {/* Icon with animated background */}
                                <motion.div
                                    className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <method.icon className="text-[#FBBF24]" size={24} />
                                    <motion.div
                                        className="absolute inset-0 rounded-xl bg-[#FBBF24]/20"
                                        animate={pulseAnimation}
                                    />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-white font-semibold mb-1 text-lg">{method.label}</h3>
                                <p className="text-sm text-gray-400 mb-2 line-clamp-1">{method.value}</p>
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                    <Sparkles size={12} className="text-[#FBBF24]" />
                                    {method.description}
                                </p>

                                {/* Hover Indicator */}
                                <motion.div
                                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    animate={floatAnimation}
                                >
                                    <ExternalLink size={16} className="text-[#FBBF24]" />
                                </motion.div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#FBBF24]/0 group-hover:border-[#FBBF24]/30 transition-all duration-300 rounded-tr-2xl" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] mb-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <motion.div
                                className="p-3 bg-[#FBBF24]/10 rounded-xl"
                                animate={floatAnimation}
                            >
                                <Heart className="text-[#FBBF24]" size={24} />
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Connect on Social Media</h3>
                                <p className="text-sm text-gray-400">Follow me for updates and tech insights</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 400 }
                                    }}
                                    className="group relative bg-[#0f172a] p-5 rounded-xl border border-[#334155] hover:border-[#FBBF24] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <social.icon className="text-[#FBBF24]" size={20} />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-medium mb-0.5">{social.label}</h4>
                                            <p className="text-xs text-gray-400 mb-1">{social.username}</p>
                                            <p className="text-[10px] text-[#FBBF24] font-medium">{social.stats}</p>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-500 group-hover:text-[#FBBF24] group-hover:translate-x-1 transition-all" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability Banner */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative bg-gradient-to-r from-[#FBBF24]/10 via-[#F59E0B]/10 to-[#FB923C]/10 rounded-2xl p-8 border border-[#334155] text-center overflow-hidden"
                    >
                        {/* Animated background rings */}
                        <motion.div
                            className="absolute inset-0 opacity-20"
                            animate={{
                                background: [
                                    'radial-gradient(circle at 20% 20%, #FBBF24, transparent 50%)',
                                    'radial-gradient(circle at 80% 80%, #F59E0B, transparent 50%)',
                                    'radial-gradient(circle at 20% 20%, #FBBF24, transparent 50%)'
                                ]
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />

                        <motion.div
                            className="relative z-10"
                            animate={floatAnimation}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#FBBF24]/20 px-4 py-2 rounded-full mb-4">
                                <Send size={16} className="text-[#FBBF24]" />
                                <span className="text-xs text-[#FBBF24] font-medium">Open for Opportunities</span>
                            </div>
                        </motion.div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Let's Work <span className="text-[#FBBF24]">Together</span>
                        </h3>

                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            I'm currently looking for internship opportunities and collaborative projects.
                            Feel free to reach out if you'd like to work together!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="mailto:rashi.sanger09@email.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative overflow-hidden bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#0f172a] px-8 py-4 rounded-xl font-medium shadow-lg shadow-[#FBBF24]/25"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Mail size={18} />
                                    Email Me
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#FB923C]"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>

                            {/* FIXED: Added target="_blank" and rel="noopener noreferrer" */}
                            <motion.a
                                href="https://www.linkedin.com/in/rashi-sanger-5b991a343/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-[#1e293b] text-white px-8 py-4 rounded-xl hover:bg-[#2d3a4f] transition-all duration-300 border border-[#334155]"
                            >
                                <Linkedin size={18} />
                                Connect on LinkedIn
                            </motion.a>
                        </div>

                        {/* Response time indicator */}
                        <motion.div
                            className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400"
                            animate={pulseAnimation}
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Usually responds within 24 hours</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-16"
                >
                    <motion.p
                        className="text-gray-500 text-sm flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Heart size={14} className="text-[#FBBF24]" />
                        Designed & Built with Framer Motion and TailwindCSS
                        <Heart size={14} className="text-[#FBBF24]" />
                    </motion.p>
                    <p className="text-gray-600 text-xs mt-2">
                        © {new Date().getFullYear()} Rashi Sanger. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;