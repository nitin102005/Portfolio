"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

export default function AboutMe() {
  return (


    <>

<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400;600&display=swap');
 
        .am-section {
          background: #0a0a0a;
          position: relative;
          z-index: 20;
          overflow: hidden;
          padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 4rem);
        }
 
        /* grain overlay */
        .am-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
        }
 
        /* horizontal rule accent */
        .am-hr {
          height: 1px;
          background: linear-gradient(90deg, #c9a84c 0%, transparent 100%);
          margin-bottom: 2rem;
          width: 48px;
        }
 
        .am-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c9a84c;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.6rem;
        }
 
        .am-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: #fff;
          margin-bottom: 2rem;
        }
 
        .am-h2 em {
          font-style: italic;
          color: #c9a84c;
        }
 
        .am-body {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.48);
        }
 
        .am-body p + p { margin-top: 1.2rem; }
 
        .am-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          // border: 1px solid rgba(201,168,76,0.22);
          // background: rgba(201,168,76,0.04);
          border-radius: 2px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          // color: rgba(201,168,76,0.7);
          transition: border-color 0.2s, background 0.2s;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(6px);
  color: rgba(255, 255, 255, 0.8);
        }
        .am-tag:hover {
          border-color: rgba(201,168,76,0.55);
          background: rgba(201,168,76,0.08);
        }
 
        /* orbiting graphic */
        .am-orb-wrap {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
 
        .am-orb-bg {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 38% 38%,
            rgba(201,168,76,0.1) 0%,
            rgba(201,168,76,0.03) 40%,
            transparent 70%);
          border: 1px solid rgba(201,168,76,0.12);
        }
 
        .am-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.12);
        }
 
        .am-node {
          position: absolute;
          border-radius: 50%;
          background: #c9a84c;
          box-shadow: 0 0 10px 3px rgba(201,168,76,0.45);
        }
 
        .am-center-mark {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #c9a84c;
          box-shadow: 0 0 24px 8px rgba(201,168,76,0.5);
          position: relative;
          z-index: 2;
        }
 
        @keyframes orb-spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes orb-spin-ccw { to { transform: rotate(-360deg); } }
        @keyframes pulse-slow   { 0%,100%{ opacity:.5 } 50%{ opacity:1 } }
 
        .spin-cw  { animation: orb-spin-cw  28s linear infinite; }
        .spin-ccw { animation: orb-spin-ccw 18s linear infinite; }
        .spin-cw2 { animation: orb-spin-cw  42s linear infinite; }
        .pulse-s  { animation: pulse-slow   3s ease-in-out infinite; }
 
        /* tilt card wrapper */
        .tilt-card { perspective: 900px; }
      `}</style>




    <section className="bg-[#121212] py-32 px-8 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* LEFT: Abstract AI Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 overflow-hidden bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.1)]">
            {/* Simulated Neural Network Graphic */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#3B82F6]/20 to-[#06B6D4]/5 rounded-full blur-3xl" />
            <svg className="w-full h-full text-white/20 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" />

              {/* Glowing nodes */}
              <circle cx="100" cy="10" r="3" className="fill-[#3B82F6]" />
              <circle cx="190" cy="100" r="3" className="fill-[#06B6D4]" />
              <circle cx="100" cy="190" r="3" className="fill-[#3B82F6]" />
              <circle cx="10" cy="100" r="3" className="fill-[#06B6D4]" />
              <circle cx="164" cy="36" r="3" className="fill-white" />
              <circle cx="36" cy="164" r="3" className="fill-white" />
            </svg>
            {/* Pulse ring */}
            <div className="absolute w-20 h-20 bg-[#3B82F6] rounded-full blur-2xl opacity-20 animate-pulse" />
          </div>
        </motion.div>

        {/* RIGHT: Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 text-white"
        >
          <h3 className="text-sm font-medium tracking-widest uppercase mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-white"></span>
            About Me
          </h3>
            <div className="am-body">

          <h2 className="text-4xl  md:text-5xl font-bold mb-8 tracking-tight">
            Building modern web applications that solve real problems.
          </h2>

          <div className="am-body">
              <p>
                I'm Nitin Singh Pokhariya — a Full Stack Developer passionate about
                building real-world web applications with clean design and scalable
                architecture.
              </p>
              <p>
                I specialise in React, Next.js, Node.js, and MongoDB — from
                real-time chat apps to e-commerce platforms and API-based tools,
                always focused on performance, security, and user experience.
              </p>
              <p>
                I enjoy turning complex ideas into simple, functional products —
                constantly learning, building, and improving with every project.
              </p>
            </div>
            </div>

          {/* Tags */}
          <div style={{ display:"flex", flexWrap:"wrap",
              gap:"0.75rem", marginTop:"2.2rem" }}>
              <motion.div whileHover={{ y: -2 }} className="am-tag">
                <MapPin size={12}  />
                Uttarakhand, India
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="am-tag">
                <GraduationCap size={12}  />
                B.Tech · Computer Science
              </motion.div>
            </div>
        </motion.div>

      </div>
    </section>
    </>



    
  );
}
