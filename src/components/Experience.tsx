"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="bg-[#121212] py-32 px-8 text-white relative z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-medium tracking-widest text-[#3B82F6] uppercase mb-16 flex items-center gap-4">
            <span className="w-12 h-px bg-[#3B82F6]/50"></span>
            Experience
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-0 w-[2px] bg-white/5" />

          {/* Timeline Item */}
          <div className="relative">
  {/* Vertical Line */}
  <div className="absolute left-[27px] top-4 bottom-0 w-[2px] bg-white/5" />

  {/* 🔹 1. Z-First Internship */}
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative pl-20 sm:pl-32 mb-16"
  >
    <div className="absolute left-[13px] top-6 w-[30px] h-[30px] bg-[#121212] rounded-full flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-[#06B6D4] shadow-[0_0_15px_#06B6D4] animate-pulse" />
    </div>

    <div className="group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#3B82F6] via-[#06B6D4] to-transparent opacity-50 group-hover:opacity-100" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h4 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#3B82F6]" />
            Full Stack Developer Intern
          </h4>
          <p className="text-[#06B6D4] mt-2 font-medium">Z-First</p>
        </div>
        <div className="text-left md:text-right">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-mono">
            Sep 2025 — Nov 2025
          </span>
          <p className="text-gray-500 text-sm mt-2">Remote · Gurugram, India</p>
        </div>
      </div>

      <ul className="space-y-4 text-gray-400 font-light">
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Developed responsive frontend using React.js.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Built backend APIs using FastAPI and Python.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Managed databases with MongoDB and PostgreSQL.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Worked on real-world features and improved application performance.
        </li>
      </ul>
    </div>
  </motion.div>

  {/* 🔹 2. Edunet Internship */}
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="relative pl-20 sm:pl-32 mb-16"
  >
    <div className="absolute left-[13px] top-6 w-[30px] h-[30px] bg-[#121212] rounded-full flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_15px_#3B82F6] animate-pulse" />
    </div>

    <div className="group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#3B82F6] via-[#06B6D4] to-transparent opacity-50 group-hover:opacity-100" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h4 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#3B82F6]" />
            AI Intern
          </h4>
          <p className="text-[#06B6D4] mt-2 font-medium">Edunet Foundation</p>
        </div>
        <div className="text-left md:text-right">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-mono">
            Feb 2024 — Mar 2024
          </span>
          <p className="text-gray-500 text-sm mt-2">Remote</p>
        </div>
      </div>

      <ul className="space-y-4 text-gray-400 font-light">
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Completed AI internship under TechSaksham by Microsoft, SAP & Edunet.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Worked on hands-on AI projects and learning modules.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50" />
          Strengthened fundamentals of full-stack development.
        </li>
      </ul>
    </div>
  </motion.div>

  {/* 🔹 3. Learn & Build Training */}
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="relative pl-20 sm:pl-32"
  >
    <div className="absolute left-[13px] top-6 w-[30px] h-[30px] bg-[#121212] rounded-full flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-[#22C55E] shadow-[0_0_15px_#22C55E] animate-pulse" />
    </div>

    <div className="group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#22C55E] to-transparent opacity-50" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h4 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#22C55E]" />
            Full Stack Training Program
          </h4>
          <p className="text-[#22C55E] mt-2 font-medium">Learn & Build</p>
        </div>
        <div className="text-left md:text-right">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-mono">
            2024
          </span>
          <p className="text-gray-500 text-sm mt-2">Remote</p>
        </div>
      </div>

      <ul className="space-y-4 text-gray-400 font-light">
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#22C55E]/50" />
          Completed full-stack web development training program.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#22C55E]/50" />
          Built projects and improved frontend & backend fundamentals.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#22C55E]/50" />
          Completed Linux training with A grade certification.
        </li>
      </ul>
    </div>
  </motion.div>
</div>
          
        </div>
      </div>
    </section>
  );
}
