"use client";
import { motion, MotionValue, useTransform } from "framer-motion";

/**
 * ScrollyCanvas feeds this component `remappedProgress` — NOT raw scroll.
 * The remap curve is:
 *   scroll 0.00 → 0.45  maps to  video 0.00 → 0.55  (faster, first half of video)
 *   scroll 0.45 → 1.00  maps to  video 0.55 → 1.00  (slower, section 3 gets ~55% of scroll)
 *
 * All keyframes below are written in remapped-space, which is what this
 * component receives as `scrollYProgress`. Section budget:
 *
 *   S1 Hero   remapped 0.00 → 0.20
 *   S2 Left   remapped 0.18 → 0.54
 *   S3 Right  remapped 0.50 → 1.00  ← gets the generous slow tail
 */

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

  // ── S1: Hero — exits cleanly by 0.20 ────────────────────────────────────────
  const y1       = useTransform(scrollYProgress, [0, 0.20],              ["0vh",  "-50vh"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.16, 0.20], [1, 1, 1, 0]);
  const scale1   = useTransform(scrollYProgress, [0, 0.20],              [1, 0.93]);

  // ── S2: Left panel — enters 0.18, holds 0.24→0.46, exits 0.54 ──────────────
  const y2       = useTransform(scrollYProgress, [0.18, 0.24, 0.46, 0.54], ["24vh", "0vh", "0vh", "-2vh"]);
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.24, 0.44, 0.54], [0, 1, 1, 1]);

  // ── S3: Right panel — enters 0.50, holds 0.58→0.92, soft exit 0.92→1.00 ────
  // In raw-scroll terms: enters around scroll 0.46, holds until scroll ~0.93
  // That's nearly half the total scroll distance — plenty of time to read.
  const y3       = useTransform(scrollYProgress, [0.50, 0.58, 0.92, 1.00], ["24vh", "0vh", "0vh", "-10vh"]);
  const opacity3 = useTransform(scrollYProgress, [0.50, 0.58, 0.90, 1.00], [0, 1, 1, 1]);

  // ── Scan-line ────────────────────────────────────────────────────────────────
  const scanOpacity = useTransform(scrollYProgress, [0, 0.04, 0.10], [0, 1, 0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400;600&display=swap');

        :root {
          --gold:   #c9a84c;
          --silver: #a8b2c0;
          --cream:  #f0ece4;
          --dark:   #080808;
        }

        .nsp-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(3.2rem, 8vw, 7.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #fff;
          text-shadow:
            0 0 80px rgba(201,168,76,0.18),
            0 4px 32px rgba(0,0,0,0.9);
        }

        .nsp-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.75rem, 1.5vw, 1rem);
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .nsp-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.7;
        }

        .nsp-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.01em;
          color: #fff;
        }

        .nsp-body {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
        }

        .nsp-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
          margin: 1.4rem 0;
        }

        .nsp-rule-rev {
          height: 1px;
          background: linear-gradient(270deg, var(--gold), transparent);
          margin: 1.4rem 0 1.4rem auto;
        }

        .corner-tl::before,
        .corner-tl::after {
          content: '';
          position: absolute;
          background: var(--gold);
          opacity: 0.6;
        }
        .corner-tl::before { top:0; left:0; width:28px; height:1px; }
        .corner-tl::after  { top:0; left:0; width:1px;  height:28px; }

        .corner-br::before,
        .corner-br::after {
          content: '';
          position: absolute;
          background: var(--gold);
          opacity: 0.6;
        }
        .corner-br::before { bottom:0; right:0; width:28px; height:1px; }
        .corner-br::after  { bottom:0; right:0; width:1px;  height:28px; }

        .scan-line {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(255,255,255,0.015) 3px,
            rgba(255,255,255,0.015) 4px
          );
          pointer-events: none;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%)",
          pointerEvents: "none",
        }} />

        {/* Scan-line */}
        <motion.div className="scan-line" style={{ opacity: scanOpacity }} />

        {/* ── S1: Hero ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={false}
          style={{ y: y1, opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 flex flex-col items-center gap-5 justify-center text-center px-6"
        >
          <h1 className="nsp-name">
            Nitin Singh<br />Pokhariya
          </h1>
          <p className="nsp-role">Full-Stack Developer</p>
        </motion.div>

        {/* ── S2: Left panel ───────────────────────────────────────────────── */}
        <div
          className="absolute inset-y-0 left-0 flex items-center"
          style={{ padding: "0 clamp(2rem,8vw,7rem)", maxWidth: "min(52vw,640px)" }}
        >
          <motion.div initial={false} style={{ y: y2, opacity: opacity2 }}>
            <div
              style={{ position: "relative", display: "inline-block", padding: "2rem 2.5rem 2rem 0" }}
              className="corner-tl"
            >
              <p className="nsp-badge" style={{ marginBottom: "1.2rem" }}>01 / Craft</p>
              <h2 className="nsp-h2">
                I turn ideas into<br />
                <span style={{ color: "var(--gold)" }}>real-world</span><br />
                applications.
              </h2>
              <div className="nsp-rule" style={{ width: 80 }} />
              <p className="nsp-body" style={{ maxWidth: 420 }}>
                I build fast, secure, and scalable web applications
                using React, Next.js, Node.js, Python, and MongoDB —
                from concept to production.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.4rem" }}>
                {["React", "Next.js", "Node.js", "Python", "MongoDB"].map(t => (
                  <span key={t} style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.65rem", letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(201,168,76,0.35)",
                    color: "rgba(201,168,76,0.75)",
                    padding: "0.3rem 0.7rem",
                    borderRadius: 2,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── S3: Right panel ──────────────────────────────────────────────── */}
        <div
          className="absolute inset-y-0 right-0 flex items-center justify-end"
          style={{ padding: "0 clamp(2rem,8vw,7rem)", maxWidth: "min(52vw,640px)", marginLeft: "auto" }}
        >
          <motion.div initial={false} style={{ y: y3, opacity: opacity3 }}>
            <div
              style={{ position: "relative", display: "inline-block", padding: "2rem 0 2rem 2.5rem", textAlign: "right" }}
              className="corner-br"
            >
              <p className="nsp-badge" style={{ marginBottom: "1.2rem" }}>02 / Mindset</p>
              <h2 className="nsp-h2">
                Developer with<br />a{" "}
                <span style={{ color: "var(--gold)" }}>problem-solving</span><br />
                mindset.
              </h2>
              <div className="nsp-rule-rev" style={{ width: 80 }} />
              <p className="nsp-body" style={{ maxWidth: 420, marginLeft: "auto" }}>
                Focused on clean code, performance, and user experience —
                turning complex problems into simple, elegant solutions
                that just work.
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "2.5rem", marginTop: "1.8rem" }}>
                {[
                  { n: "Clean", l: "Code" },
                  { n: "Fast",  l: "Performance" },
                  { n: "Great", l: "UX" },
                ].map(s => (
                  <div key={s.l} style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "1.4rem", fontWeight: 700,
                      color: "var(--gold)",
                    }}>{s.n}</div>
                    <div style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.6rem", letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 2,
                    }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
}
