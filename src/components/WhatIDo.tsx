"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { BrainCircuit, Code2, LayoutTemplate, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    id: 1,
    index: "01",
    title: "Full Stack Engineering",
    short: "MERN · Auth · Performance",
    description:
      "Designing and developing scalable MERN stack applications with secure authentication and optimized performance.",
    icon: Code2,
  },
  {
    id: 2,
    index: "02",
    title: "Real-time Systems",
    short: "WebSockets · Live Data",
    description:
      "Building real-time communication platforms with WebSockets, enabling fast and seamless user interactions.",
    icon: BrainCircuit,
  },
  {
    id: 3,
    index: "03",
    title: "Backend & API Dev",
    short: "REST · Node · FastAPI",
    description:
      "Creating secure REST APIs and integrating external services to handle dynamic and real-time data efficiently.",
    icon: LayoutTemplate,
  },
  {
    id: 4,
    index: "04",
    title: "Modern UI Development",
    short: "React · Next.js · Motion",
    description:
      "Crafting responsive, visually appealing interfaces focused on usability, performance, and user experience.",
    icon: Sparkles,
  },
];

function ServiceRow({ s, i }: { s: (typeof services)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = s.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
      className="wid-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* white fill slides from left */}
      <motion.div
        className="wid-row-fill"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* index */}
      <span className="wid-num" style={{ color: hovered ? "rgba(10,10,10,0.3)" : "rgba(255,255,255,0.18)" }}>
        {s.index}
      </span>

      {/* icon box */}
      <motion.div
        className="wid-icon"
        animate={{
          background: hovered ? "#0a0a0a" : "rgba(255,255,255,0.04)",
          borderColor: hovered ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.09)",
        }}
        transition={{ duration: 0.3 }}
      >
        <Icon
          size={17}
          style={{
            color: hovered ? "#fff" : "rgba(255,255,255,0.5)",
            transition: "color 0.3s",
          }}
        />
      </motion.div>

      {/* title + tag */}
      <div className="wid-title-col">
        <h4
          className="wid-card-title"
          style={{ color: hovered ? "#0a0a0a" : "#fff" }}
        >
          {s.title}
        </h4>
        <span
          className="wid-tag"
          style={{ color: hovered ? "rgba(10,10,10,0.45)" : "rgba(255,255,255,0.25)" }}
        >
          {s.short}
        </span>
      </div>

      {/* description fades in */}
      <motion.p
        className="wid-desc"
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
        transition={{ duration: 0.28, delay: hovered ? 0.07 : 0 }}
        style={{ color: "rgba(10,10,10,0.58)" }}
      >
        {s.description}
      </motion.p>

      {/* arrow */}
      <motion.div
        className="wid-arrow-wrap"
        animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.28 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke={hovered ? "#0a0a0a" : "#fff"} strokeWidth="1.6">
          <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function WhatIDo() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400&display=swap');

        .wid-section {
          background: #0a0a0a;
          position: relative;
          z-index: 20;
          overflow: hidden;
          padding: clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,4rem);
        }
        .wid-section::before {
          content:''; position:absolute; inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.03; pointer-events:none;
        }

        .wid-inner { max-width:1100px; margin:0 auto; }

        .wid-header {
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:2rem;
          margin-bottom:clamp(3rem,6vw,5rem);
          padding-bottom:clamp(2rem,4vw,3rem);
          border-bottom:1px solid rgba(255,255,255,0.07);
        }

        .wid-eyebrow {
          font-family:'JetBrains Mono',monospace;
          font-size:0.6rem;
          letter-spacing:0.38em;
          text-transform:uppercase;
          color:rgba(255,255,255,0.3);
          margin-bottom:1rem;
          display:flex;
          align-items:center;
          gap:0.75rem;
        }

        .wid-heading {
          font-family:'Syne',sans-serif;
          font-size:clamp(2.8rem,7vw,5.5rem);
          font-weight:800;
          color:#fff;
          line-height:0.9;
          letter-spacing:-0.04em;
        }

        .wid-heading-outline {
          -webkit-text-stroke:1px rgba(255,255,255,0.22);
          color:transparent;
        }

        .wid-count {
          font-family:'Syne',sans-serif;
          font-size:clamp(4rem,11vw,8.5rem);
          font-weight:800;
          color:rgba(255,255,255,0.04);
          line-height:1;
          letter-spacing:-0.06em;
          pointer-events:none;
          user-select:none;
        }

        /* ── rows ── */
        .wid-list { display:flex; flex-direction:column; }

        .wid-row {
          position:relative;
          display:flex;
          align-items:center;
          gap:clamp(1rem,2.5vw,2.2rem);
          padding:clamp(1.3rem,2.8vw,1.9rem) 0;
          border-bottom:1px solid rgba(255,255,255,0.06);
          overflow:hidden;
          cursor:default;
        }
        .wid-row:first-child { border-top:1px solid rgba(255,255,255,0.06); }

        .wid-row-fill {
          position:absolute; inset:0;
          background:#e8e4dc;
          transform-origin:left;
          z-index:0;
          border-radius:0;
        }

        .wid-num {
          font-family:'JetBrains Mono',monospace;
          font-size:0.58rem;
          letter-spacing:0.22em;
          min-width:2rem;
          position:relative; z-index:1;
          flex-shrink:0;
          transition:color 0.3s;
        }

        .wid-icon {
          display:inline-flex;
          align-items:center; justify-content:center;
          width:38px; height:38px;
          border-radius:3px;
          border:1px solid rgba(255,255,255,0.09);
          flex-shrink:0;
          position:relative; z-index:1;
        }

        .wid-title-col {
          display:flex; flex-direction:column; gap:0.2rem;
          min-width:clamp(150px,23vw,250px);
          position:relative; z-index:1;
        }

        .wid-card-title {
          font-family:'Syne',sans-serif;
          font-size:clamp(1rem,2vw,1.4rem);
          font-weight:700;
          line-height:1.1;
          transition:color 0.3s;
        }

        .wid-tag {
          font-family:'JetBrains Mono',monospace;
          font-size:0.56rem;
          letter-spacing:0.18em;
          text-transform:uppercase;
          transition:color 0.3s;
        }

        .wid-desc {
          font-family:'Outfit',sans-serif;
          font-size:clamp(0.82rem,1.15vw,0.93rem);
          font-weight:300;
          line-height:1.65;
          flex:1;
          position:relative; z-index:1;
        }
        @media(max-width:600px){ .wid-desc{ display:none; } }

        .wid-arrow-wrap {
          margin-left:auto;
          flex-shrink:0;
          position:relative; z-index:1;
        }

        .wid-footer {
          margin-top:clamp(2.5rem,5vw,4rem);
          display:flex;
          align-items:center;
          gap:1.5rem;
        }
        .wid-footer-line {
          flex:1; height:1px;
          background:rgba(255,255,255,0.05);
        }
        .wid-footer-text {
          font-family:'JetBrains Mono',monospace;
          font-size:0.58rem;
          letter-spacing:0.3em;
          text-transform:uppercase;
          color:rgba(255,255,255,0.18);
          white-space:nowrap;
        }
      `}</style>

      <section className="wid-section">
        <div style={{
          position:"absolute",top:0,left:0,right:0,height:1,
          background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)",
        }} />

        <div className="wid-inner">

          {/* ── Header ── */}
          <motion.div
            className="wid-header"
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.65, ease:[0.16,1,0.3,1] }}
          >
            <div>
              <div className="wid-eyebrow">
                <span style={{ width:26, height:1, background:"rgba(255,255,255,0.18)", display:"inline-block" }} />
                What I Do
              </div>
              <h2 className="wid-heading">
                Services<br />
                <span className="wid-heading-outline">&amp; Skills</span>
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end" }}>
              <span className="wid-count">06</span>
              <span className="wid-footer-text">Areas of expertise</span>
            </div>
          </motion.div>

          {/* ── Rows ── */}
          <div className="wid-list">
            {services.map((s, i) => (
              <ServiceRow key={s.id} s={s} i={i} />
            ))}
          </div>

          {/* ── Footer rule ── */}
          <motion.div
            className="wid-footer"
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            transition={{ duration:0.6, delay:0.45 }}
          >
            <div className="wid-footer-line" />
            <span className="wid-footer-text">Full-stack · 2026</span>
            <div className="wid-footer-line" />
          </motion.div>

        </div>

        <div style={{
          position:"absolute",bottom:0,left:0,right:0,height:1,
          background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)",
        }} />
      </section>
    </>
  );
}
