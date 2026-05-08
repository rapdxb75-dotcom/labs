import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ShoppingBag, Check, Activity, Microscope, Dna, FlaskConical,
  ShieldCheck, Sparkles, Zap, Star, Globe, Beaker, Cpu, Layers, MousePointer2, Mouse
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
  const navigate = useNavigate();

  const products = [
    {
      id: "validate",
      title: "Validate",
      subtitle: "The Proof of Concept",
      icon: ShieldCheck,
      image: "/assets/Validate.avif",
      description: "Stop guessing. We use AI-driven market analysis and biochemical-grade validation frameworks to stress-test your idea's viability. If it works here, it works anywhere.",
      features: ["Market Liquidity Analysis", "Competitor DNA Mapping", "Growth Viability Scores", "Risk Mitigation Report"],
      color: "blue"
    },
    {
      id: "see",
      title: "See",
      subtitle: "Visual Manifestation",
      icon: Sparkles,
      image: "/assets/see.png",
      description: "Bring the invisible to life. Our design lab crafts premium visual identities, logos, and cinematic design systems that capture the essence of your vision.",
      features: ["Premium Brand Identity", "High-Fidelity Mockups", "Interactive Styleguides", "Cinematic Design System"],
      color: "purple"
    },
    {
      id: "feel",
      title: "Feel",
      subtitle: "Experience Prototype",
      icon: Zap,
      image: "/assets/Feel.jpg",
      description: "Touch the future before it's built. We create hyper-realistic interactive prototypes that allow you to feel the user journey and optimize for retention.",
      features: ["UX Stress Testing", "Interactive Prototypes", "User Psychology Analysis", "Retention Optimization"],
      color: "cyan"
    },
    {
      id: "plan",
      title: "Plan",
      subtitle: "Venture Roadmap",
      icon: Dna,
      image: "/assets/Plan.jpg",
      description: "Get investor-ready with a bulletproof roadmap. From financial modeling to GTM strategies, we provide the architectural blueprints for your empire.",
      features: ["Financial Modeling", "Strategic GTM Roadmap", "Investor Pitch Deck", "Operational Blueprint"],
      color: "indigo"
    },
  ];

  return (
    <div className="w-full relative flex flex-col items-center font-sans">

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-4 md:px-6 pt-24 md:pt-32 pb-24 md:pb-40">
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 mb-6 md:mb-8 reveal shadow-xl">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-black">Lab-Grade Design Studio</span>
          </div>

          <h1 className="text-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 md:mb-6 leading-[0.9] md:leading-[0.85] tracking-tighter reveal px-2">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/70 to-black/30">Extraordinary.</span>
          </h1>

          <p className="text-black/60 text-sm md:text-xl max-w-2xl mb-8 md:mb-6 leading-relaxed font-medium reveal px-6">
            DNA Labs is a high-performance design studio. We validate, design, and plan the next generation of industry-defining ventures.
          </p>

          {/* Service Cards Grid - Replaces Buttons */}
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 reveal">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  onClick={() => navigate({ to: "/products" })}
                  className="glass-card group cursor-pointer hover:scale-[1.02] transition-all duration-500 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 border-white/60 shadow-xl flex flex-col items-center text-center bg-white/50 backdrop-blur-xl h-full"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] bg-white flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent" />
                    <Icon className="w-6 h-6 md:w-10 md:h-10 text-black relative z-10" strokeWidth={1.2} />
                  </div>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-black/40 mb-2">{p.subtitle}</p>
                  <h3 className="text-xl md:text-3xl font-bold text-black tracking-tighter uppercase">{p.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 reveal hidden md:flex">
          <Mouse className="w-7 h-7 text-black" strokeWidth={1.5} />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-black to-transparent" />
        </div>
      </section>

      {/* Product Deep Dive - Alternating Layout */}
      <section className="w-full max-w-6xl px-6 py-12 md:py-16 space-y-24 md:space-y-48">
        {products.map((p, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={p.id}
              id={p.id}
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 md:gap-24 scroll-mt-32",
                !isEven && "md:flex-row-reverse"
              )}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6 md:space-y-8 reveal text-center md:text-left">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-black/40">{p.subtitle}</span>
                    <h2 className="text-4xl md:text-8xl font-serif font-bold tracking-tighter text-black leading-none">{p.title}</h2>
                  </div>
                </div>

                <p className="text-base md:text-xl text-black/60 leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
                  {p.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 glass p-4 rounded-xl border-white/60 shadow-sm group hover:bg-white transition-all">
                      <div className="w-5 h-5 rounded-lg bg-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[9px] md:text-[11px] font-black text-black uppercase tracking-widest leading-none">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 md:pt-6">
                  <Button
                    onClick={() => {
                      navigate({ to: "/products" });
                    }}
                    className="rounded-xl px-10 py-6 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all bg-black text-white w-full sm:w-auto"
                  >
                    Select {p.title} Services
                  </Button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[600px] reveal">
                <div className="w-full h-full bg-white rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-white/60">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* About Labs Section */}
      <section className="w-full max-w-5xl px-6 py-20 md:py-32 text-center relative overflow-hidden">
        <div className="relative z-10 reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/60 mb-8 md:mb-10 shadow-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">The DNA Philosophy</span>
          </div>

          <h2 className="text-4xl md:text-8xl font-serif font-bold mb-8 md:mb-12 leading-[0.9] tracking-tighter text-black">
            Where Science <br />
            Meets Creativity.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-left mt-12 md:mt-20">
            <div className="space-y-4 md:space-y-6 glass p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/60 shadow-xl group hover:bg-white transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-black tracking-tighter uppercase">Our Origin</h3>
              <p className="text-sm md:text-lg text-black/60 leading-relaxed font-medium">
                Born from a need for precision in a world of vague agencies. DNA Labs was founded to provide startup founders with a laboratory for their ideas.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6 glass p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/60 shadow-xl group hover:bg-white transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-black tracking-tighter uppercase">Our Mission</h3>
              <p className="text-sm md:text-lg text-black/60 leading-relaxed font-medium">
                We don't just build websites or logos. We build foundations. Our mission is to bridge the gap between abstract concepts and concrete ventures.
              </p>
            </div>
          </div>
        </div>

        {/* Big Liquid Blobs for background */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100/40 blur-[80px] md:blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-100/40 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      </section>

      {/* Final Action - Premium Glass Box */}
      <section className="w-full max-w-5xl px-6 pb-20 md:pb-32">
        <div className="glass p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.15)] relative overflow-hidden text-center reveal border-white/60">
          <div className="relative z-10 space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-8xl font-serif font-bold tracking-tighter text-black leading-none">
              Ready to build <br className="hidden sm:block" /> your legacy?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => PRODUCTS.forEach(add)}
                className="w-full sm:w-auto px-10 md:px-16 py-6 md:py-7 rounded-2xl bg-black text-white font-black tracking-[0.2em] text-[10px] md:text-[12px] uppercase hover:opacity-90 hover:scale-105 transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] flex items-center justify-center gap-4 md:gap-5 group"
              >
                Apply to the Lab <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
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
