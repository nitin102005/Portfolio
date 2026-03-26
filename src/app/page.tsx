import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import WhatIDo from "@/components/WhatIDo";
import Arsenal from "@/components/Arsenal";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Arsenal />
      <AboutMe />
      <Projects />
      <Experience />
      <WhatIDo />
      <FooterCTA />
    </main>
  );
}
