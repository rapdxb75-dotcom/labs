import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ShoppingBag, Check, Activity, Microscope, Dna, FlaskConical,
  ShieldCheck, Sparkles, Zap, Star, Globe, Beaker, Cpu, Layers, MousePointer2
} from "lucide-react";
import { PRODUCTS, useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DNA Labs — Where science meets your idea" },
      { name: "description", content: "Validate, See, Feel and Plan your next venture with biotech-grade precision." },
    ],
  }),
  component: Index,
});

function Index() {
  const { add } = useCart();

  const products = [
    { 
      id: "validate", 
      title: "Validate", 
      subtitle: "The Proof of Concept",
      icon: Microscope, 
      description: "Stop guessing. We use AI-driven market analysis and biochemical-grade validation frameworks to stress-test your idea's viability. If it works here, it works anywhere.",
      features: ["Market Liquidity Analysis", "Competitor DNA Mapping", "Growth Viability Scores"],
      color: "blue"
    },
    { 
      id: "see", 
      title: "See", 
      subtitle: "Visual Manifestation",
      icon: Sparkles, 
      description: "Bring the invisible to life. Our design lab crafts premium visual identities, logos, and cinematic design systems that capture the essence of your vision.",
      features: ["Premium Brand Identity", "High-Fidelity Mockups", "Interactive Styleguides"],
      color: "purple"
    },
    { 
      id: "feel", 
      title: "Feel", 
      subtitle: "Experience Prototype",
      icon: Activity, 
      description: "Touch the future before it's built. We create hyper-realistic interactive prototypes that allow you to feel the user journey and optimize for retention.",
      features: ["UX Stress Testing", "Interactive Prototypes", "User Psychology Analysis"],
      color: "cyan"
    },
    { 
      id: "plan", 
      title: "Plan", 
      subtitle: "Venture Roadmap",
      icon: Dna, 
      description: "Get investor-ready with a bulletproof roadmap. From financial modeling to GTM strategies, we provide the architectural blueprints for your empire.",
      features: ["Financial Modeling", "Strategic GTM Roadmap", "Investor Pitch Deck"],
      color: "indigo"
    },
  ];

  return (
    <div className="w-full relative flex flex-col items-center font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-6 pt-20 pb-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/40 mb-8 reveal shadow-xl">
            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shadow-lg">
               <Beaker className="w-3 h-3 text-white" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">Lab-Grade Design Studio</span>
          </div>

          <h1 className="text-black text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.95] tracking-tighter reveal">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/70 to-black/30">Extraordinary.</span>
          </h1>

          <p className="text-black/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium reveal">
            DNA Labs is a high-performance design studio. We validate, design, and plan the next generation of industry-defining ventures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <Button size="lg" className="rounded-xl px-10 py-6 text-sm font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all bg-black text-white group">
              Launch Venture <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl px-10 py-6 text-sm font-black uppercase tracking-widest border-black/10 glass hover:scale-105 transition-all">
              Explore Our Lab
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 reveal">
           <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll</span>
           <div className="w-[1px] h-10 bg-gradient-to-b from-black to-transparent" />
        </div>
      </section>

      {/* Product Deep Dive - Alternating Layout */}
      <section className="w-full max-w-6xl px-6 py-16 space-y-24 md:space-y-48">
        {products.map((p, i) => {
          const Icon = p.icon;
          const isEven = i % 2 === 0;

          return (
            <div 
              key={p.id} 
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                !isEven && "md:flex-row-reverse"
              )}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8 reveal">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black shadow-lg transform -rotate-2">
                       <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">{p.subtitle}</span>
                      <h2 className="text-4xl md:text-7xl font-serif font-bold tracking-tighter text-black leading-none">{p.title}</h2>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-black/60 leading-relaxed font-medium max-w-lg">
                  {p.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 glass p-3 rounded-xl border-white/60 shadow-sm group hover:bg-white transition-all">
                      <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] font-black text-black uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={() => add(PRODUCTS.find(pr => pr.id === p.id) || PRODUCTS[0])}
                    className="rounded-xl px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all bg-black text-white"
                  >
                    Select {p.title} Services
                  </Button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[550px] reveal">
                <div className="w-full h-full glass-card rounded-[4rem] relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                  {/* Decorative Elements inside visual side */}
                  <div className={cn(
                    "absolute inset-0 opacity-25 bg-gradient-to-br transition-all duration-700 group-hover:opacity-40",
                    p.color === "blue" ? "from-blue-400 to-cyan-400" :
                    p.color === "purple" ? "from-purple-400 to-pink-400" :
                    p.color === "cyan" ? "from-cyan-400 to-teal-400" :
                    "from-indigo-400 to-blue-400"
                  )} />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Premium Icon Container */}
                      <div className="w-48 h-48 rounded-[3.5rem] bg-white flex items-center justify-center shadow-[0_30px_60px_-10px_rgba(0,0,0,0.15)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 relative z-10 border-t border-white">
                         <Icon className="w-20 h-20 text-black" strokeWidth={1.5} />
                      </div>
                      {/* Reflection/Glow */}
                      <div className="absolute -inset-8 bg-white/20 blur-[50px] rounded-full group-hover:bg-white/40 transition-all duration-700" />
                    </div>
                  </div>

                  {/* Liquid Blobs inside the card */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/40 blur-[90px] rounded-full group-hover:scale-150 transition-all duration-1000" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* About Labs Section */}
      <section className="w-full max-w-5xl px-6 py-32 text-center relative overflow-hidden">
        <div className="relative z-10 reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/40 mb-10 shadow-xl">
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shadow-lg">
               <Globe className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">The DNA Philosophy</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-[0.9] tracking-tighter text-black">
            Where Science <br />
            Meets Creativity.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left mt-20">
             <div className="space-y-6 glass p-10 rounded-[3rem] border-white/60 shadow-xl group hover:bg-white transition-all">
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
                   <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black tracking-tighter uppercase">Our Origin</h3>
                <p className="text-lg text-black/60 leading-relaxed font-medium">
                  Born from a need for precision in a world of vague agencies. DNA Labs was founded to provide startup founders with a laboratory for their ideas.
                </p>
             </div>
             <div className="space-y-6 glass p-10 rounded-[3rem] border-white/60 shadow-xl group hover:bg-white transition-all">
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow-2xl group-hover:-rotate-6 transition-transform">
                   <Layers className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black tracking-tighter uppercase">Our Mission</h3>
                <p className="text-lg text-black/60 leading-relaxed font-medium">
                  We don't just build websites or logos. We build foundations. Our mission is to bridge the gap between abstract concepts and concrete ventures.
                </p>
             </div>
          </div>
        </div>

        {/* Big Liquid Blobs for background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full -z-10" />
      </section>

      {/* Final Action - Premium Glass Box */}
      <section className="w-full max-w-5xl px-6 pb-32">
        <div className="glass p-12 md:p-24 rounded-[5rem] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.15)] relative overflow-hidden text-center reveal border-white/60">
           <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-black leading-none">
                Ready to build <br /> your legacy?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => PRODUCTS.forEach(add)}
                  className="px-16 py-7 rounded-2xl bg-black text-white font-black tracking-[0.2em] text-[12px] uppercase hover:bg-white hover:text-black hover:scale-105 transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] flex items-center gap-5 group"
                >
                  Apply to the Lab <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
           </div>
           
           {/* Inner Liquid Elements */}
           <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-cyan-100/30 blur-[150px] rotate-45 -z-10" />
           <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-indigo-100/30 blur-[150px] -rotate-45 -z-10" />
        </div>
      </section>

    </div>
  );
}
