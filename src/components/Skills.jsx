// Skills.jsx
import {
    FaReact, FaNodeJs, FaGitAlt, FaJs,
    FaHtml5, FaCss3Alt, FaPython
} from 'react-icons/fa';
import {
    SiMongodb, SiTailwindcss, SiExpress,
    SiCplusplus, SiMysql
} from 'react-icons/si';
import { Code2, Server, Wrench, Database, Users, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            icon: Code2,
            iconColor: "from-[#FBBF24] to-[#F59E0B]",
            skills: [
                { name: "C++", icon: SiCplusplus, level: 85, color: "#00599C", gradient: "from-blue-600 to-blue-400" },
                { name: "JavaScript", icon: FaJs, level: 85, color: "#F7DF1E", gradient: "from-yellow-500 to-amber-500" },
                { name: "Python", icon: FaPython, level: 75, color: "#3776AB", gradient: "from-green-500 to-emerald-500" }
            ]
        },
        {
            title: "Frameworks",
            icon: Palette,
            iconColor: "from-[#F59E0B] to-[#FB923C]",
            skills: [
                { name: "React", icon: FaReact, level: 85, color: "#61DAFB", gradient: "from-cyan-500 to-blue-500" },
                { name: "HTML", icon: FaHtml5, level: 85, color: "#E34F26", gradient: "from-orange-500 to-red-500" },
                { name: "CSS", icon: FaCss3Alt, level: 85, color: "#1572B6", gradient: "from-blue-500 to-indigo-500" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: 80, color: "#06B6D4", gradient: "from-teal-500 to-cyan-500" }
            ]
        },
        {
            title: "Backend",
            icon: Server,
            iconColor: "from-[#FB923C] to-[#FBBF24]",
            skills: [
                { name: "Node.js", icon: FaNodeJs, level: 80, color: "#339933", gradient: "from-green-600 to-green-400" },
                { name: "Express.js", icon: SiExpress, level: 80, color: "#ffffff", gradient: "from-gray-600 to-gray-400" },
                { name: "REST APIs", level: 85, gradient: "from-purple-500 to-pink-500" }
            ]
        },
        {
            title: "Databases",
            icon: Database,
            iconColor: "from-[#FBBF24] to-[#F59E0B]",
            skills: [
                { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248", gradient: "from-green-600 to-emerald-500" },
                { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1", gradient: "from-blue-600 to-cyan-500" }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: Wrench,
            iconColor: "from-[#F59E0B] to-[#FB923C]",
            skills: [
                { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032", gradient: "from-orange-600 to-red-500" },
                { name: "GitHub", icon: FaGitAlt, level: 85, color: "#ffffff", gradient: "from-purple-600 to-pink-500" },
                { name: "VS Code", level: 90, gradient: "from-blue-500 to-indigo-500" }
            ]
        },
        {
            title: "Soft Skills",
            icon: Users,
            iconColor: "from-[#FB923C] to-[#FBBF24]",
            skills: [
                { name: "Problem Solving", level: 90, gradient: "from-purple-500 to-pink-500" },
                { name: "Leadership", level: 85, gradient: "from-amber-500 to-orange-500" },
                { name: "Time Management", level: 85, gradient: "from-green-500 to-emerald-500" },
                { name: "Team Collaboration", level: 90, gradient: "from-blue-500 to-cyan-500" }
            ]
        }
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const skillBarVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: { duration: 1, ease: "easeOut", delay: 0.3 }
        })
    };

    return (
        <section id="skills" className="py-24 bg-[#0a0f1a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Skills
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
                        className="text-gray-400 mt-4"
                    >
                        Technologies and tools I work with
                    </motion.p>
                </motion.div>

                {/* Skills Grid with Stagger Animation */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleIn}
                            whileHover={{
                                y: -8,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="bg-[#1e293b] rounded-2xl p-8 border border-[#334155] hover:border-[#FBBF24] transition-colors duration-300 group"
                        >
                            {/* Header with Icon Animation */}
                            <motion.div
                                className="flex items-center gap-3 mb-8"
                                whileHover="hover"
                            >
                                <motion.div
                                    className={`p-3 bg-gradient-to-r ${category.iconColor} rounded-xl`}
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <category.icon className="text-white" size={24} />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </motion.div>

                            {/* Skills List - Original bar colors preserved */}
                            <div className="space-y-5">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={skill.level}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <motion.div
                                                className="flex items-center gap-2"
                                                whileHover={{ x: 5 }}
                                            >
                                                {skill.icon && (
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <skill.icon
                                                            style={{ color: skill.color }}
                                                            size={16}
                                                        />
                                                    </motion.div>
                                                )}
                                                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                            </motion.div>
                                            <motion.span
                                                className="text-xs text-gray-500"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>
                                        <div className="w-full bg-[#334155] rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full`}
                                                variants={skillBarVariants}
                                                custom={skill.level}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Corner Animation - Yellow theme */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 90 }}
                                style={{
                                    background: 'radial-gradient(circle at top right, rgba(251, 191, 36, 0.1), transparent 70%)'
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating Tech Icons Animation - Yellow on hover */}
                <motion.div
                    className="relative h-20 mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Git', 'C++', 'Python'].map((tech, i) => (
                            <motion.span
                                key={i}
                                className="px-4 py-2 bg-[#1e293b] text-gray-300 text-sm rounded-full border border-[#334155]"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 + (i * 0.1) }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.05,
                                    backgroundColor: '#FBBF24',
                                    color: '#0f172a',
                                    borderColor: '#FBBF24',
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;