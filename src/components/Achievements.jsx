// Achievements.jsx
import { Users, Calendar, Target, Medal, Code2, Award, Trophy, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import clubPhoto from '../assets/club-pic.jpg'; // Add your club group photo here

function Achievements() {
    // LeetCode data
    const leetcodeData = {
        username: "rashisanger1",
        rank: "536,852",
        problemsSolved: 260,
        acceptance: "66.73%",
        maxStreak: 13,
        totalActiveDays: 102,
        badges: 2,
        mostRecentBadge: "100 Days Badge 2025",
        languages: ["C++", "Java"]
    };

    // Animation variants
    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
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
        <section id="achievements" className="py-20 bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                        Achievements
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        transition={{ duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] mx-auto rounded-full"
                    />
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

                    {/* Left Column - CEO Achievement */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden hover:border-[#FBBF24] transition-all duration-300 h-full">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={clubPhoto}
                                    alt="ARAMBH Student Organization"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent" />
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#FBBF24]">
                                    <span className="text-xs text-white">ARAMBH Team 2025</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Medal size={18} className="text-[#FBBF24]" />
                                    <span className="text-xs text-[#FBBF24] font-medium uppercase tracking-wider">Position of Responsibility</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">
                                    CEO at <span className="text-[#FBBF24]">ARAMBH</span>
                                </h3>

                                <p className="text-xs text-gray-400 mb-3">
                                    Since August 2025
                                </p>

                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Organized and managed two university events, leading a team of 50+ students to handle planning, coordination and marketing ensuring smooth operations and high participation.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-[#0f172a] p-2 rounded-lg text-center">
                                        <Users size={14} className="mx-auto mb-1 text-[#FBBF24]" />
                                        <div className="text-sm font-bold text-white">50+</div>
                                        <div className="text-[10px] text-gray-400">Members</div>
                                    </div>
                                    <div className="bg-[#0f172a] p-2 rounded-lg text-center">
                                        <Calendar size={14} className="mx-auto mb-1 text-[#FBBF24]" />
                                        <div className="text-sm font-bold text-white">2</div>
                                        <div className="text-[10px] text-gray-400">Events</div>
                                    </div>
                                    <div className="bg-[#0f172a] p-2 rounded-lg text-center">
                                        <Target size={14} className="mx-auto mb-1 text-[#FBBF24]" />
                                        <div className="text-sm font-bold text-white">1000+</div>
                                        <div className="text-[10px] text-gray-400">Attendees</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - LeetCode Achievement */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5 hover:border-[#FBBF24] transition-all duration-300 h-full">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-[#FBBF24]/10 rounded-lg">
                                    <Code2 className="text-[#FBBF24]" size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">LeetCode</h3>
                                    <p className="text-xs text-gray-400">@{leetcodeData.username}</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="text-[10px] text-gray-400">Rank</p>
                                    <p className="text-sm font-bold text-[#FBBF24]">#{leetcodeData.rank}</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-[#0f172a] p-3 rounded-lg text-center">
                                    <Trophy size={18} className="mx-auto mb-1 text-[#FBBF24]" />
                                    <div className="text-lg font-bold text-white">{leetcodeData.problemsSolved}</div>
                                    <div className="text-[10px] text-gray-400">Solved</div>
                                </div>
                                <div className="bg-[#0f172a] p-3 rounded-lg text-center">
                                    <Zap size={18} className="mx-auto mb-1 text-[#FBBF24]" />
                                    <div className="text-lg font-bold text-white">{leetcodeData.maxStreak}</div>
                                    <div className="text-[10px] text-gray-400">Max Streak</div>
                                </div>
                                <div className="bg-[#0f172a] p-3 rounded-lg text-center">
                                    <Award size={18} className="mx-auto mb-1 text-[#FBBF24]" />
                                    <div className="text-lg font-bold text-white">{leetcodeData.badges}</div>
                                    <div className="text-[10px] text-gray-400">Badges</div>
                                </div>
                                <div className="bg-[#0f172a] p-3 rounded-lg text-center">
                                    <Calendar size={18} className="mx-auto mb-1 text-[#FBBF24]" />
                                    <div className="text-lg font-bold text-white">{leetcodeData.totalActiveDays}</div>
                                    <div className="text-[10px] text-gray-400">Active Days</div>
                                </div>
                            </div>

                            {/* Recent Badge */}
                            <div className="bg-[#0f172a] p-3 rounded-lg border border-[#334155] mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded-full flex items-center justify-center text-sm">
                                        🏆
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-medium">{leetcodeData.mostRecentBadge}</p>
                                        <p className="text-[10px] text-gray-400">Most Recent</p>
                                    </div>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-gray-400">Languages:</span>
                                <div className="flex gap-1">
                                    {leetcodeData.languages.map((lang, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-[#0f172a] text-[#FBBF24] text-[10px] rounded-full border border-[#334155]">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Acceptance Rate */}
                            <div className="flex items-center justify-between text-xs mb-3">
                                <span className="text-gray-400">Acceptance Rate:</span>
                                <span className="text-white font-medium">{leetcodeData.acceptance}</span>
                            </div>

                            {/* View Profile Link */}
                            <motion.a
                                href="https://leetcode.com/u/rashisanger1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-[#FBBF24] hover:text-[#F59E0B] transition-colors"
                                whileHover={{ x: 3 }}
                            >
                                View Full Profile
                                <ExternalLink size={12} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Simple Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-500 text-xs mt-8"
                >
                    Leadership • Coding • Problem Solving
                </motion.p>
            </div>
        </section>
    );
}

export default Achievements;