"use client";

import { motion } from "framer-motion";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Syne } from "next/font/google";

// Font
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FooterCTA() {
  return (
    <section className={`${syne.className} bg-[#0e0e0e] py-32 px-6 md:px-12 relative overflow-hidden z-20 flex flex-col items-center justify-center min-h-[60vh]`}>

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[700px] h-[700px] bg-linear-to-tr from-[#040505] to-[#060606] rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
          Let’s Build Something <br className="hidden md:block" /> Meaningful Together
        </h2>

        {/* Subtext */}
        <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed">
          I'm open to full-stack roles, freelance projects, and collaborations.
          Let’s create scalable and impactful digital products.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16">

          {/* Email */}
          <a
            href="mailto:nitinpokhariya20@gmail.com"
            className="group relative px-8 py-4 border border-white/20 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-black transition-colors">
              Get In Touch
            </span>
          </a>

          {/* Resume */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Nitin_Singh_Pokhariya_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
          >
            Download Resume
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-8">
          <a href="https://github.com/nitin102005" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:-translate-y-1 transition-all duration-300">
            <SiGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nitin-singh-pokhariya-922a1a280/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/nitin_pokhariya" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#E4405F] hover:-translate-y-1 transition-all duration-300">
            <SiInstagram className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-8 text-white/30 text-sm">
        © {new Date().getFullYear()} Nitin Singh Pokhariya
      </div>
    </section>
  );
}
