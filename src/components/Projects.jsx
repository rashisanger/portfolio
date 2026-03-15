// Projects.jsx
import { Github, ExternalLink, Calendar, Code2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import imc from "../assets/imc.png";
import clovix from "../assets/clovix.png";
import quickchat from "../assets/quickchat.png";

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "QuickChat – Real-time Student Communication Platform",
            date: "2025",
            image: quickchat,
            description: "A full-stack real-time chat application with social feed features built for students to connect and communicate seamlessly.",
            longDescription: "A real-time communication platform for students to chat, share posts, and interact through comments and reactions.",
            points: [
                "Implemented real-time messaging with Socket.io including typing indicators, message read receipts (✓✓), and online/offline user status tracking",
                "Developed a social feed allowing users to create posts, share images via Cloudinary, like content, and comment with emoji support",
                "Built secure JWT authentication system with protected routes and persistent login using token storage",
                "Designed responsive dark-themed UI with TailwindCSS and smooth animations",
                "Deployed on Vercel (frontend), Render (backend), and MongoDB Atlas with CI/CD pipeline"
            ],
            tech: ["MERN Stack", "Socket.io", "JWT", "Cloudinary", "TailwindCSS", "Framer Motion", "Vercel", "Render"],
            github: "https://github.com/rashisanger/chat-app",
            live: "https://chat-app-two-sand-45.vercel.app/",
            gradient: "from-[#FBBF24] to-[#F59E0B]"
        },
        {
            id: 2,
            title: "IMC-MERN Stack E-Commerce Website",
            date: "December 2025",
            image: imc,
            description: "A complete e-commerce platform with product management, user authentication, and secure payment integration.",
            longDescription: "Full-stack MERN e-commerce application with JWT authentication and admin dashboard.",
            points: [
                "Co-developed full-stack MERN e-commerce with JWT-based authentication and role-based admin access",
                "Designed scalable product management APIs supporting CRUD operations, filtering, sorting, and search",
                "Built secure admin dashboard with protected routes for product, user, and order management",
                "Integrated Cloudinary for cloud-based image storage and Razorpay payment gateway",
                "Implemented Redux Toolkit for centralized state management"
            ],
            tech: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT", "Razorpay", "Vercel"],
            github: "https://github.com/rashisanger",
            live: "https://imc-frontend-mu.vercel.app/",
            gradient: "from-[#F59E0B] to-[#FB923C]"
        },
        {
            id: 3,
            title: "CLOVIX - AI-Based Color Recommendation",
            date: "March 2025",
            image: clovix,
            description: "An AI-powered fashion assistant that detects skin tone and recommends clothing colors using computer vision.",
            longDescription: "A smart fashion assistant that uses computer vision to help users find their perfect colors.",
            points: [
                "Developed web app with real-time skin tone detection using MediaPipe with ~92% accuracy",
                "Designed personalized recommendation engine reducing decision-making time by ~35-40%",
                "Integrated affiliate-based e-commerce links for curated fashion products",
                "Built mobile accessible UI with React and Tailwind CSS",
                "Implemented REST-ready scalable architecture for future backend integration"
            ],
            tech: ["React", "TailwindCSS", "MediaPipe", "JavaScript", "HTML", "CSS", "Vercel"],
            github: "https://github.com/rashisanger",
            live: "https://www.clovix.in/",
            gradient: "from-[#FB923C] to-[#FBBF24]"
        }
    ];

    const toggleExpand = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    return (
        <section id="projects" className="py-24 bg-[#0f172a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Featured <span className="text-[#FBBF24]">Projects</span>
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
                        Real-world applications I've built from scratch
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const isExpanded = expandedProject === project.id;

                        return (
                            <div
                                key={project.id}
                                className="bg-[#1e293b] rounded-2xl border border-[#334155] overflow-hidden hover:border-[#FBBF24] transition-all duration-300 hover:shadow-lg hover:shadow-[#FBBF24]/10"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden group">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg`}>
                                        {project.date}
                                    </div>

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full hover:scale-110 transition-transform hover:rotate-360"
                                        >
                                            <Github size={20} className="text-[#0f172a]" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full hover:scale-110 transition-transform hover:rotate-360"
                                        >
                                            <ExternalLink size={20} className="text-[#0f172a]" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-3 text-white hover:text-[#FBBF24] transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 5).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-[#0f172a] text-gray-300 text-xs rounded-full border border-[#334155] hover:bg-[#FBBF24] hover:text-[#0f172a] hover:border-[#FBBF24] transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 5 && (
                                            <span className="px-2.5 py-1 bg-[#0f172a] text-gray-300 text-xs rounded-full border border-[#334155]">
                                                +{project.tech.length - 5}
                                            </span>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <div className="flex items-center justify-between pt-3 border-t border-[#334155]">
                                        <button
                                            onClick={() => toggleExpand(project.id)}
                                            className="flex items-center gap-2 text-sm text-[#FBBF24] hover:text-[#F59E0B] transition-colors font-medium"
                                        >
                                            <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
                                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                                                <ChevronRight size={16} />
                                            </span>
                                        </button>

                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 bg-[#0f172a] rounded-lg hover:bg-[#2d3a4f] transition-colors"
                                            >
                                                <Github size={16} className="text-gray-400" />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 bg-[#0f172a] rounded-lg hover:bg-[#2d3a4f] transition-colors"
                                            >
                                                <ExternalLink size={16} className="text-gray-400" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Expanded Details - Enhanced Visual Styling */}
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 pt-4 border-t-2 border-[#FBBF24] bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-lg p-4"
                                        >
                                            <p className="text-sm text-gray-300 mb-4 font-medium border-l-2 border-[#FBBF24] pl-3 italic">
                                                {project.longDescription}
                                            </p>
                                            <ul className="space-y-3">
                                                {project.points.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-3 text-sm text-gray-300"
                                                    >
                                                        <span className="text-[#FBBF24] font-bold mt-0.5">•</span>
                                                        <span className="leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View More Projects Button */}
                <div className="text-center mt-16">
                    <a
                        href="https://github.com/rashisanger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#0f172a] px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FBBF24]/20 transition-all duration-300 hover:scale-105"
                    >
                        <Github size={20} />
                        View All on GitHub
                        <span className="animate-pulse">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;