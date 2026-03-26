import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chatify – Real-Time Messaging Platform",
      category: "MERN Stack • WebSockets",
      image: "/projects/chat.png"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Full Stack • Payments • Admin Dashboard",
      image: "/projects/ecommerce.png"
    },
    {
      id: 3,
      title: "Resume Ranker & Analyzer",
      category: "AI Tool • Resume Scoring System",
      image: "/projects/ResumeRanker.png"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      category: "API Integration • Responsive UI",
      image: "/projects/weather.png"
    }
  ]

  return (
    <section className="bg-[#121212] py-40 px-8 min-h-screen text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm font-medium tracking-widest text-white/40 uppercase mb-20 flex items-center gap-4">
          <span className="w-12 h-px bg-white/20"></span>
          Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((proj) => (
            <div 
              key={proj.id} 
              className="group relative h-[400px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/10 flex flex-col justify-end p-10 cursor-pointer shadow-2xl"
            >
              {/* Project Image Background */}
              <Image 
  src={proj.image} 
  alt={proj.title} 
  fill 
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
/>
              
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-0 opacity-80" />
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div>
                  <p className="text-white/60 mb-3 font-mono text-sm tracking-wide">{proj.category}</p>
                  <h4 className="text-4xl font-semibold tracking-tight transition-transform duration-500 group-hover:-translate-y-2">{proj.title}</h4>
                </div>
                <div className="bg-white text-black p-4 rounded-full opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  <ArrowUpRight size={28} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
