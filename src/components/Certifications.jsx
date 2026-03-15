// Certifications.jsx
import { Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

function Certifications() {
    const certifications = [
        {
            title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
            issuer: "Infosys",
            date: "December 2025",
            link: "https://drive.google.com/file/d/1XPPVFEdcwRY1dcrxNaldhauQzL-O7M4w/view?usp=sharing",
            icon: "🤖",
            gradient: "from-blue-500 to-cyan-500" // Kept original
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "April 2025",
            link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730049504247715.pdf",
            icon: "☁️",
            gradient: "from-purple-500 to-pink-500" // Kept original
        }
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="certifications" className="py-20 bg-[#0a0f1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Sparkles size={24} className="text-[#FBBF24]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Certifications
                        </h2>
                        <Sparkles size={24} className="text-[#F59E0B]" />
                    </div>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        transition={{ duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] mx-auto rounded-full"
                    />
                </motion.div>

                {/* Certifications Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            whileHover={{
                                y: -5,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                            className="group bg-[#1e293b] rounded-xl p-6 border border-[#334155] hover:border-[#FBBF24] transition-all duration-300 hover:shadow-lg hover:shadow-[#FBBF24]/10"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon - Kept original gradient */}
                                <motion.div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg`}
                                    whileHover={{ rotate: 5 }}
                                >
                                    {cert.icon}
                                </motion.div>

                                <div className="flex-1">
                                    <h3 className="text-base font-semibold text-white mb-3 group-hover:text-[#FBBF24] transition-colors">
                                        {cert.title}
                                    </h3>

                                    <div className="space-y-2 mb-4">
                                        <motion.div
                                            className="flex items-center gap-2 text-sm text-gray-400"
                                            whileHover={{ x: 2 }}
                                        >
                                            <Award size={14} className="text-[#FBBF24]" />
                                            <span>{cert.issuer}</span>
                                        </motion.div>
                                        <motion.div
                                            className="flex items-center gap-2 text-sm text-gray-400"
                                            whileHover={{ x: 2 }}
                                        >
                                            <Calendar size={14} className="text-[#FBBF24]" />
                                            <span>{cert.date}</span>
                                        </motion.div>
                                    </div>

                                    {/* Fixed: Added target="_blank" and rel="noopener noreferrer" */}
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-[#FBBF24] hover:text-[#F59E0B] transition-colors"
                                        whileHover={{ x: 3 }}
                                    >
                                        View Certificate
                                        <ExternalLink size={14} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Certifications;