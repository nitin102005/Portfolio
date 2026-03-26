"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Parallax values synchronized with scrollYProgress mapped 0 to 1

    // Section 1
const y1 = useTransform(scrollYProgress, [0, 0.15], ["0vh", "-50vh"]);
const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);

// Section 2
const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.5], ["20vh", "0vh", "-15vh"]);

const opacity2 = useTransform(
  scrollYProgress,
  [0.15, 0.25, 0.4, 0.5],
  [0, 1, 0, 0]
);

const y3 = useTransform(scrollYProgress, [0.5, 0.5, 0.55], ["0vh", "-9vh", "-10vh"]);

const opacity3 = useTransform(
  scrollYProgress,
  [0.3, 0.33, 0.45, 0.55],
  [0, 0, 1, 1]
);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Section 1 */}
            <motion.div
                initial={false}
                style={{ y: y1, opacity: opacity1 }}
                className="absolute text-center text-white"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter 
text-white/90 
drop-shadow-[0_6px_10px_rgba(0,0,0,0.9)]">
                    Nitin Singh Pokhariya
                </h1>
                <p className="text-xl md:text-3xl mt-4 text-black font-light">
                    Full stack Developer.
                </p>
            </motion.div>

            {/* Section 2 */}
            <div className="absolute left-8 md:left-24 lg:left-32 inset-y-0 flex items-center text-left text-white max-w-xl">
                <motion.div
                    initial={false}
                    style={{ y: y2, opacity: opacity2 }}
                >
                    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mix-blend-screen">
                        I turn ideas into real-world applications.
                    </h2>
                    <div className="h-[2px] w-24 bg-white/40 my-6" />
                    <p className="text-xl md:text-2xl text-white/70 font-light">
                        I develop fast, secure, and scalable web applications using modern technologies like React,Python, Next.js, Node.js, and MongoDB.
                    </p>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className="absolute right-8 md:right-24 lg:right-32 inset-y-0 flex items-center text-right text-white max-w-xl">
                <motion.div
                    initial={false}
                    style={{ y: y3, opacity: opacity3 }}
                >
                    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mix-blend-screen">
                        Developer with a problem-solving mindset.
                    </h2>
                    <div className="h-[2px] w-24 bg-white/40 ml-auto my-6" />
                    <p className="text-xl md:text-2xl text-white/70 font-light">
                        Focused on clean code, performance, and user experience — turning complex problems into simple, efficient solutions.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
