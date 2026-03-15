// About.jsx
import { GraduationCap, Calendar, MapPin, Target, Code2, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
    const education = [
        {
            degree: "B.Tech - Computer Science Engineering",
            institution: "Lovely Professional University",
            location: "Punjab, India",
            period: "August 2023 - Present",
            score: "CGPA: 8.47",
            icon: GraduationCap,
            color: "from-[#FBBF24] to-[#F59E0B]"
        },
        {
            degree: "Intermediate (12th)",
            institution: "MGM Public School",
            location: "Ludhiana, Punjab",
            period: "April 2021 - March 2023",
            score: "90.6%",
            icon: Calendar,
            color: "from-[#F59E0B] to-[#FB923C]"
        },
        {
            degree: "Matriculation (10th)",
            institution: "MGM Public School",
            location: "Ludhiana, Punjab",
            period: "April 2020 - March 2021",
            score: "94.2%",
            icon: Award,
            color: "from-[#FB923C] to-[#FBBF24]"
        }
    ];

    const interests = [
        { icon: Code2, text: "Full Stack Development" },
        { icon: Target, text: "Problem Solving" },
        { icon: Heart, text: "Open Source" }
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="about" className="py-24 bg-[#0f172a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        About Me
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Bio with Staggered Animation */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-300 leading-relaxed"
                        >
                            I am a Computer Science student with a strong interest in full stack development and problem solving.
                            I enjoy transforming ideas into functional and user-friendly applications.
                        </motion.p>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-300 leading-relaxed"
                        >
                            My technical interests include web development, system design basics, and data structures & algorithms.
                            I actively practice coding problems and work on projects to strengthen my understanding of scalable applications.
                        </motion.p>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-300 leading-relaxed"
                        >
                            I believe in learning by building, which is why I continuously experiment with new technologies and develop
                            projects that solve real problems.
                        </motion.p>

                        {/* Interests Pills */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap gap-3 pt-4"
                        >
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-full border border-[#334155] hover:border-[#FBBF24] transition-colors cursor-default"
                                >
                                    <interest.icon size={16} className="text-[#FBBF24]" />
                                    <span className="text-sm text-gray-300">{interest.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Quick Stats with Animation */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-3 gap-4 pt-6"
                        >
                            {[
                                { value: "3+", label: "Projects" },
                                { value: "8.47", label: "CGPA" },
                                { value: "2+", label: "Years" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
                                    className="bg-[#1e293b]/50 p-4 rounded-xl border border-[#334155] text-center"
                                >
                                    <div className="text-2xl font-bold text-[#FBBF24]">{stat.value}</div>
                                    <div className="text-xs text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right column - Education with Staggered Animation */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="text-2xl font-semibold text-white mb-6"
                        >
                            Education
                        </motion.h3>

                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ scale: 1.02, x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-[#1e293b] p-6 rounded-xl border border-[#334155] hover:border-[#FBBF24] transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Animated background gradient on hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    initial={false}
                                />

                                <div className="flex gap-4 relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className={`p-3 bg-gradient-to-r ${item.color} rounded-xl h-fit`}
                                    >
                                        <item.icon className="text-white" size={24} />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{item.degree}</h4>
                                        <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                                        <div className="flex flex-wrap items-center gap-4 mb-2 text-xs text-gray-500">
                                            <motion.span
                                                whileHover={{ x: 2 }}
                                                className="flex items-center gap-1"
                                            >
                                                <MapPin size={12} />
                                                {item.location}
                                            </motion.span>
                                            <motion.span
                                                whileHover={{ x: 2 }}
                                                className="flex items-center gap-1"
                                            >
                                                <Calendar size={12} />
                                                {item.period}
                                            </motion.span>
                                        </div>
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 text-[#ffffff] text-xs rounded-full`}
                                        >
                                            {item.score}
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Current Focus - Simplified with yellow theme */}
                        <motion.div
                            variants={scaleIn}
                            className="bg-[#1e293b] p-6 rounded-xl border border-[#334155] mt-6"
                        >
                            <div className="flex items-center gap-3">
                                <Target className="text-[#FBBF24]" size={20} />
                                <div>
                                    <p className="text-white font-medium">Current Focus</p>
                                    <p className="text-gray-400 text-sm">Improving problem solving skills & building full stack projects</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;