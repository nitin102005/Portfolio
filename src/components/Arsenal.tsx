"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiOpenai
} from "react-icons/si";

import { AiOutlineRobot, AiOutlineCode, AiOutlineApi, AiOutlineSafety } from "react-icons/ai";
import { SiSocketdotio, SiCloudinary, SiAxios, SiGithub, SiVercel, SiRender } from "react-icons/si";
// import { SparklesIcon } from "@heroicons/react/24/solid"; // Custom placeholder for internal AI agents
// Keeping generic icons or text for LangGraph, CrewAI, Antigravity if distinct icons aren't standard in Si

export default function Arsenal() {
  const row1 = [
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  ];

  const row2 = [
    { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    { name: "OpenAI API", icon: <SiOpenai className="text-[#412991]" /> },
    { name: "Gemini API", icon: <AiOutlineRobot className="text-[#8E75B2]" /> },
    { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];

  return (
    <section className="bg-[#121212] py-20 overflow-hidden relative z-20">
      
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#121212] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#121212] to-transparent z-10" />

      <div className="flex flex-col gap-8 w-[200%] md:w-[150%] lg:w-[120%]">
        
        {/* Row 1 - Moves Left */}
        <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-6"
        >
          {/* Double array to create seamless loop */}
          {[...row1, ...row1, ...row1].map((tech, idx) => (
            <div key={`r1-${idx}`} className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap group hover:border-[#3B82F6]/50 transition-colors">
              <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
              <span className="text-sm font-medium text-white/90">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moves Right */}
        <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-6 relative left-[-200px]"
        >
          {[...row2, ...row2, ...row2].map((tech, idx) => (
            <div key={`r2-${idx}`} className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap group hover:border-[#06B6D4]/50 transition-colors">
              <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
              <span className="text-sm font-medium text-white/90">{tech.name}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function SparklesIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M10.1 2.182a1.5 1.5 0 0 1 2.8 0l1.417 4.542a1.5 1.5 0 0 0 1.059 1.059l4.542 1.417a1.5 1.5 0 0 1 0 2.8l-4.542 1.417a1.5 1.5 0 0 0-1.059 1.059l-1.417 4.542a1.5 1.5 0 0 1-2.8 0l-1.417-4.542a1.5 1.5 0 0 0-1.059-1.059l-4.542-1.417a1.5 1.5 0 0 1 0-2.8l4.542-1.417a1.5 1.5 0 0 0 1.059-1.059l1.417-4.542z"/>
        </svg>
    )
}
