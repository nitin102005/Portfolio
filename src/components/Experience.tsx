"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { useRef, useState, useCallback } from "react";

/* ─── Data ────────────────────────────────────────────────────────── */
const experiences = [
  {
    index: "01",
    role: "Full Stack Developer Intern",
    company: "Z-First",
    period: "Sep 2025 — Nov 2025",
    location: "Remote · Gurugram, India",
    type: "Internship",
    points: [
      "Developed responsive frontend using React.js.",
      "Built backend APIs using FastAPI and Python.",
      "Managed databases with MongoDB and PostgreSQL.",
      "Worked on real-world features and improved application performance.",
    ],
  },
  {
    index: "02",
    role: "AI Intern",
    company: "Edunet Foundation",
    period: "Feb 2024 — Mar 2024",
    location: "Remote",
    type: "Internship",
    points: [
      "Completed AI internship under TechSaksham by Microsoft, SAP & Edunet.",
      "Worked on hands-on AI projects and learning modules.",
      "Strengthened fundamentals of full-stack development.",
    ],
  },
  {
    index: "03",
    role: "Full Stack Training Program",
    company: "Learn & Build",
    period: "2024",
    location: "Remote",
    type: "Training",
    points: [
      "Completed full-stack web development training program.",
      "Built projects and improved frontend & backend fundamentals.",
      "Completed Linux training with A grade certification.",
    ],
  },
];

/* ─── Motion constants ─────────────────────────────────────────────── */
// Organic cubic — gentle accel, elastic-feeling settle
const E = [0.19, 1, 0.22, 1] as const;

// Spring for scroll-linked values: zero bounce, silk-smooth
const SPRING = { stiffness: 55, damping: 18, mass: 0.5 };

/* ─── AnimatePresence variants ─────────────────────────────────────── */
const listVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
  exit:    { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, x: 14, filter: "blur(4px)" },
  visible:  {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.46, ease: [0.19, 1, 0.22, 1] },
  },
  exit: {
    opacity: 0, x: -5, filter: "blur(2px)",
    transition: { duration: 0.22, ease: "easeIn" as const },
  },
};

const metaVariants: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1], delay: 0.07 + i * 0.05 },
  }),
  exit: {
    opacity: 0, y: -4,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

/* ─── Component ────────────────────────────────────────────────────── */
export default function Experience() {
  const [active, setActive] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = useCallback(
    (i: number) => setActive(prev => (prev === i ? -1 : i)),
    []
  );

  /* Scroll-linked header — spring-smoothed so it never judders */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.1"],
  });
  const sp      = useSpring(scrollYProgress, SPRING);
  const headerY = useTransform(sp, [0, 1], [36, 0]);
  const headerO = useTransform(sp, [0, 0.55], [0, 1]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400&display=swap');

        /* Only what Tailwind can't express */

        .ex-h { font-family:'Syne',sans-serif; font-size:clamp(2.8rem,7vw,5.5rem); font-weight:800; color:#fff; line-height:0.9; letter-spacing:-0.04em; }
        .ex-h-ghost { -webkit-text-stroke:1px rgba(255,255,255,0.2); color:transparent; }
        .ex-ghost-num { font-family:'Syne',sans-serif; font-size:clamp(4rem,11vw,8rem); font-weight:800; color:rgba(255,255,255,0.04); line-height:1; letter-spacing:-0.06em; user-select:none; }

        /* Noise texture overlay */
        .ex-noise::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.03;
        }

        /* CSS colour transitions — smoother than JS-driven re-renders */
        .tr-color  { transition: color       0.44s cubic-bezier(0.19,1,0.22,1); }
        .tr-border { transition: border-color 0.44s cubic-bezier(0.19,1,0.22,1); }
        .tr-all    { transition: color 0.44s cubic-bezier(0.19,1,0.22,1),
                                border-color 0.44s cubic-bezier(0.19,1,0.22,1),
                                background   0.44s cubic-bezier(0.19,1,0.22,1); }

        /* Hide period on very small screens */
        @media(max-width:480px){ .ex-period { display:none; } }
        @media(max-width:580px){ .ex-company{ display:none; } }
      `}</style>

      <section
        ref={sectionRef}
        className="ex-noise relative z-20 overflow-hidden bg-[#0a0a0a]
                   px-[clamp(1.5rem,6vw,4rem)] py-[clamp(5rem,10vw,9rem)]"
      >
        {/* Top / bottom hairlines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px
                        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px
                        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)]" />

        <div className="mx-auto max-w-[1100px]">

          {/* ── Header ─────────────────────────────────────────── */}
          <motion.div
            style={{ y: headerY, opacity: headerO }}
            className="mb-[clamp(3.5rem,7vw,6rem)] flex flex-wrap items-end
                       justify-between gap-8 border-b border-white/[0.06]
                       pb-[clamp(2rem,4vw,3rem)]"
          >
            <div>
              <p className="mb-4 flex items-center gap-3 font-['JetBrains_Mono']
                            text-[0.6rem] uppercase tracking-[0.38em] text-white/30">
                <span className="inline-block h-px w-[26px] bg-white/[0.18]" />
                Experience
              </p>
              <h2 className="ex-h">
                Where I've<br />
                <span className="ex-h-ghost">shipped.</span>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="ex-ghost-num">05</span>
              <span className="font-['JetBrains_Mono'] text-[0.58rem]
                              uppercase tracking-[0.28em] text-white/[0.18]">
                Roles &amp; Training
              </span>
            </div>
          </motion.div>

          {/* ── Accordion ──────────────────────────────────────── */}
          <div className="flex flex-col">
            {experiences.map((exp, i) => {
              const isOpen = active === i;

              return (
                <motion.div
                  key={exp.index}
                  className="cursor-pointer overflow-hidden border-b border-white/[0.07]
                             first:border-t first:border-t-white/[0.07]"
                  style={{ willChange: "transform, opacity" }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.72, ease: E, delay: i * 0.1 }}
                  onClick={() => toggle(i)}
                >
                  {/* ── Trigger row ─ */}
                  <div className="relative flex select-none items-center
                                  gap-[clamp(0.75rem,2.5vw,2rem)]
                                  py-[clamp(1.3rem,2.8vw,2rem)]">

                    {/* Sweeping fill */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-0
                                 origin-left bg-[#e8e4dc]"
                      style={{ willChange: "transform" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.54, ease: E }}
                    />

                    {/* Index */}
                    <span
                      className="tr-color relative z-10 min-w-[2rem] flex-shrink-0
                                 font-['JetBrains_Mono'] text-[0.58rem] tracking-[0.22em]"
                      style={{ color: isOpen ? "rgba(10,10,10,0.3)" : "rgba(255,255,255,0.2)" }}
                    >
                      {exp.index}
                    </span>

                    {/* Type badge */}
                    <span
                      className="tr-all relative z-10 flex-shrink-0 rounded-[2px] border
                                 px-[0.65rem] py-[0.25rem] font-['JetBrains_Mono']
                                 text-[0.56rem] uppercase tracking-[0.2em]"
                      style={{
                        color:       isOpen ? "rgba(10,10,10,0.5)"  : "rgba(255,255,255,0.3)",
                        borderColor: isOpen ? "rgba(10,10,10,0.2)"  : "rgba(255,255,255,0.1)",
                      }}
                    >
                      {exp.type}
                    </span>

                    {/* Role */}
                    <span
                      className="tr-color relative z-10 flex-1 font-['Syne']
                                 text-[clamp(1rem,2.2vw,1.45rem)] font-bold leading-[1.1]"
                      style={{ color: isOpen ? "#0a0a0a" : "#fff" }}
                    >
                      {exp.role}
                    </span>

                    {/* Company */}
                    <span
                      className="ex-company tr-color relative z-10 flex-shrink-0
                                 font-['JetBrains_Mono'] text-[0.62rem]
                                 uppercase tracking-[0.18em]"
                      style={{ color: isOpen ? "rgba(10,10,10,0.4)" : "rgba(255,255,255,0.3)" }}
                    >
                      {exp.company}
                    </span>

                    {/* Period */}
                    <span
                      className="ex-period tr-color relative z-10 flex-shrink-0
                                 font-['JetBrains_Mono'] text-[0.6rem] tracking-[0.15em]"
                      style={{ color: isOpen ? "rgba(10,10,10,0.35)" : "rgba(255,255,255,0.25)" }}
                    >
                      {exp.period}
                    </span>

                    {/* Toggle icon */}
                    <div
                      className="tr-border relative z-10 flex h-[22px] w-[22px]
                                 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{
                        borderColor: isOpen ? "rgba(10,10,10,0.2)" : "rgba(255,255,255,0.15)",
                      }}
                    >
                      <motion.svg
                        width="10" height="10" viewBox="0 0 10 10"
                        style={{ willChange: "transform" }}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: E }}
                      >
                        <line x1="5" y1="0" x2="5" y2="10"
                          stroke={isOpen ? "#0a0a0a" : "rgba(255,255,255,0.6)"}
                          strokeWidth="1.2" strokeLinecap="round" />
                        <line x1="0" y1="5" x2="10" y2="5"
                          stroke={isOpen ? "#0a0a0a" : "rgba(255,255,255,0.6)"}
                          strokeWidth="1.2" strokeLinecap="round" />
                      </motion.svg>
                    </div>
                  </div>

                  {/* ── Expanded panel ─ */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        className="overflow-hidden mt-3"
                        style={{ willChange: "height, opacity" }}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height:  { duration: 0.56, ease: E },
                          opacity: { duration: 0.4,  ease: "easeOut" },
                        }}
                      >
                        <div
                          className="grid gap-[clamp(1.5rem,4vw,3rem)]
                                     pb-[clamp(1.4rem,3vw,2.2rem)]
                                     pl-[clamp(2.5rem,6vw,5rem)]
                                     [grid-template-columns:200px_1fr]
                                     max-[640px]:[grid-template-columns:1fr]"
                        >
                          {/* Meta */}
                          <div
                            className="flex flex-col gap-[1.1rem] border-r border-white/[0.06] pr-6
                                       max-[640px]:border-b max-[640px]:border-r-0
                                       max-[640px]:pb-5 max-[640px]:pr-0"
                          >
                            {[
                              { label: "Company",  val: exp.company  },
                              { label: "Period",   val: exp.period   },
                              { label: "Location", val: exp.location },
                              { label: "Type",     val: exp.type     },
                            ].map((m, mi) => (
                              <motion.div
                                key={m.label}
                                className="flex flex-col gap-[0.2rem]"
                                custom={mi}
                                variants={metaVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                <span className="font-['JetBrains_Mono'] text-[0.52rem]
                                                 uppercase tracking-[0.28em] text-white/20">
                                  {m.label}
                                </span>
                                <span className="font-['Outfit'] text-[0.88rem]
                                                 font-light text-white/50">
                                  {m.val}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Points */}
                          <motion.ul
                            className="flex flex-col gap-3"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {exp.points.map((pt, j) => (
                              <motion.li
                                key={j}
                                className="flex items-start gap-3 font-['Outfit']
                                           text-[clamp(0.85rem,1.2vw,0.95rem)]
                                           font-light leading-[1.65] text-white/[0.45]"
                                variants={itemVariants}
                              >
                                <span className="mt-[0.58em] inline-block h-px
                                                 w-[14px] flex-shrink-0 bg-white/[0.18]" />
                                {pt}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ── Footer ─────────────────────────────────────────── */}
          <motion.div
            className="mt-[clamp(2.5rem,5vw,4rem)] flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: E, delay: 0.5 }}
          >
            <div className="h-px flex-1 bg-white/[0.05]" />
            <span className="whitespace-nowrap font-['JetBrains_Mono']
                             text-[0.58rem] uppercase tracking-[0.3em] text-white/[0.18]">
              Experience · 2024–2025
            </span>
            <div className="h-px flex-1 bg-white/[0.05]" />
          </motion.div>

        </div>
      </section>
    </>
  );
}
