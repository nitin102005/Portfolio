"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Syne, Inter } from "next/font/google";

// Fonts
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chatify - Real-Time Messaging Platform",
      category: "MERN Stack • WebSockets",
      image: "/projects/chat.png",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Full Stack • Payments • Admin Dashboard",
      image: "/projects/ecommerce.png",
    },
    {
      id: 3,
      title: "Resume Ranker & Analyzer",
      category: "AI Tool • Resume Scoring System",
      image: "/projects/ResumeRanker.png",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      category: "API Integration • Responsive UI",
      image: "/projects/weather.png",
    },
  ];

  return (
    <section className={`${inter.className} bg-[#0e0e0e] py-40 px-6 md:px-12 min-h-screen text-white relative z-20`}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h3
          className={`${syne.className} text-sm tracking-[0.35em] text-white/40 uppercase mb-24 flex items-center gap-4`}
        >
          <span className="w-10 h-px bg-white/20"></span>
          Selected Work
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group relative h-[420px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden p-10 flex flex-col justify-end transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)] cursor-pointer"
            >

              {/* Background Image */}
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain absolute inset-0 z-0 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-0" />

              {/* Content */}
              <div className="relative z-10 flex justify-between items-end">
                
                <div>
                  {/* Category */}
                  <p className="text-white/50 mb-3 text-xs tracking-widest uppercase font-medium">
                    {proj.category}
                  </p>

                  {/* Title (Syne) */}
                  <h4
                    className={`${syne.className} text-3xl md:text-4xl font-semibold leading-tight tracking-tight bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-transparent transition-all duration-500 group-hover:-translate-y-1`}
                  >
                    {proj.title}
                  </h4>
                </div>

                {/* Arrow Button */}
                <div className="bg-white text-black p-3 rounded-full opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.35)]">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>

              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border border-white/20" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
