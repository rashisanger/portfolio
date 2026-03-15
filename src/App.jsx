// App.jsx
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Show/hide back to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen relative">
      {/* Scroll Progress Bar - Updated to yellow/orange */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
      >
        {/* Hero Section */}
        <motion.section variants={sectionVariants}>
          <Hero />
        </motion.section>

        {/* About Section */}
        <motion.section variants={sectionVariants}>
          <About />
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={sectionVariants}>
          <Skills />
        </motion.section>

        {/* Projects Section */}
        <motion.section variants={sectionVariants}>
          <Projects />
        </motion.section>

        {/* Certifications Section */}
        <motion.section variants={sectionVariants}>
          <Certifications />
        </motion.section>

        {/* Achievements Section (CEO + LeetCode combined) */}
        <motion.section variants={sectionVariants}>
          <Achievements />
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={sectionVariants}>
          <Contact />
        </motion.section>
      </motion.main>

      {/* Back to Top Button - Updated to yellow */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-[#FBBF24] text-[#0f172a] rounded-full shadow-lg shadow-[#FBBF24]/25 hover:bg-[#F59E0B] transition-colors z-50 ${isVisible ? "block" : "hidden"
          }`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={24} />
      </motion.button>

      {/* Floating Particles Background - Updated to yellow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FBBF24]/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;