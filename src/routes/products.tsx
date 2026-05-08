import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback } from "react";
import { CheckCircle, ShoppingBag, ArrowRight, Microscope, Sparkles, Activity, Dna, Star, Users, Info, X, Play } from "lucide-react";
import { PRODUCTS, useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const ICONS = { validate: Microscope, see: Sparkles, feel: Activity, plan: Dna } as const;

const FEATURES: Record<string, string[]> = {
  validate: ["Market research & analysis", "Competitor landscape mapping", "Target audience identification", "Revenue potential assessment", "Risk analysis", "Validation report"],
  see: ["Custom logo concepts", "Complete brand identity system", "Color palette & typography", "Brand guidelines", "Marketing templates", "Social media assets"],
  feel: ["Clickable prototypes", "User journey mapping", "Wireframes & flows", "Usability testing", "Mobile + desktop", "Tech feasibility"],
  plan: ["Business model canvas", "5-year financial projections", "Go-to-market strategy", "Competitive analysis", "Risk mitigation", "Investor pitch deck"],
};

const FULL: Record<string, string> = {
  validate: "Transform your raw idea into a validated business concept with deep market research, competitor analysis and feasibility studies.",
  see: "Bring your vision to life with stunning visuals — logos, color schemes, typography and complete brand guidelines.",
  feel: "Experience your idea before building it. Interactive prototypes that let you test, refine and perfect.",
  plan: "Get investor-ready with a comprehensive business plan covering financials, go-to-market and roadmap.",
};

const SUCCESS_STORIES: Record<string, { name: string; company: string; result: string }[]> = {
  validate: [
    { name: "Sarah Chen", company: "TechStart Inc.", result: "Validated SaaS idea, raised $500K seed round" },
    { name: "Marcus Rodriguez", company: "GreenTech Solutions", result: "Pivoted successfully, now generating $50K MRR" },
    { name: "Emily Watson", company: "HealthApp Co.", result: "Market validation led to strategic partnership" },
  ],
  see: [
    { name: "David Kim", company: "Lumina", result: "Rebranded, saw a 40% increase in user engagement" },
    { name: "Sophia Martinez", company: "Aura Health", result: "New identity led to successful Series A" },
    { name: "James Wilson", company: "Nexus", result: "Stand-out design increased conversion by 25%" },
  ],
  feel: [
    { name: "Elena Rostova", company: "FinEdge", result: "Prototype testing saved 3 months of dev time" },
    { name: "Michael Chang", company: "EduPlay", result: "Interactive demo secured early angel investors" },
    { name: "Sarah Jenkins", company: "LogistiX", result: "Usability testing improved onboarding flow by 60%" },
  ],
  plan: [
    { name: "Alex Thompson", company: "BioGen", result: "Comprehensive plan secured $2M seed funding" },
    { name: "Priya Patel", company: "UrbanEats", result: "Clear roadmap aligned stakeholders for launch" },
    { name: "Tom Anderson", company: "SecureNet", result: "Financial model passed strict due diligence" },
  ],
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Services — DNA Labs" },
      { name: "description", content: "Validate, See, Feel and Plan — premium services to launch your idea." },
    ],
  }),
  component: Products,
});

function Products() {
  const { add } = useCart();

  const handleAddproduct = useCallback((p: any) => {
    add(p);
  }, [add]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="reveal text-center mb-12 md:mb-16">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Our services</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
          Transform ideas into <span className="text-black/40">reality.</span>
        </h1>
        <p className="mt-4 text-black/60 max-w-2xl mx-auto text-base md:text-lg font-medium px-4">
          Choose the perfect service to bring your vision to life. Each is engineered to take you one
          step closer to launch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((p, i) => {
          const Icon = ICONS[p.id as keyof typeof ICONS];
          return (
            <article 
              key={p.id} 
              className="reveal flex flex-col glass-card border border-white/60 rounded-[2.5rem] overflow-hidden p-6 md:p-8 shadow-xl transition-all hover:scale-[1.02] hover:bg-white/60 group relative bg-white/40 backdrop-blur-3xl" 
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center border border-white/60 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-10 w-10 text-black" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-black mb-1">{p.title}</h2>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">{p.tagline}</p>
                <div className="flex items-center gap-4 text-[10px] font-bold text-black/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-current text-black" /> 4.9</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3 text-black" /> 500+</span>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-black text-black tracking-tighter">${p.price}</span>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4">
                  <Button 
                    onClick={() => handleAddproduct(p)} 
                    className="w-full rounded-xl bg-black text-white hover:bg-black/90 transition-all font-bold tracking-widest uppercase text-[10px] h-12 shadow-lg"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" /> Add to cart
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline"
                        className="w-full rounded-xl border-white/60 bg-white/50 backdrop-blur-sm text-black hover:bg-white transition-all font-bold tracking-widest uppercase text-[10px] h-12"
                      >
                        <Info className="h-4 w-4 mr-2" /> Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] border-white/60 bg-gradient-to-br from-white/95 via-white/80 to-white/60 backdrop-blur-[40px] p-0 gap-0 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border ring-1 ring-white/50">
                      <div className="relative">
                        {/* Header Image/Background */}
                        <div className="h-48 md:h-64 relative overflow-hidden group/image flex items-center justify-center cursor-pointer">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl transition-all group-hover/image:scale-110 group-hover/image:bg-white/40">
                              <Play className="h-6 w-6 md:h-8 md:w-8 text-white fill-white ml-1" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="px-6 md:px-10 pb-10 -mt-20 relative z-10">
                           <div className="h-24 w-24 rounded-3xl bg-white flex items-center justify-center border border-white/60 shadow-2xl mb-6">
                              <Icon className="h-12 w-12 text-black" strokeWidth={1.5} />
                           </div>
                           
                           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-2">{p.tagline}</p>
                                 <DialogTitle className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-none">{p.title}</DialogTitle>
                              </div>
                              <div className="text-3xl md:text-4xl font-black text-black tracking-tighter">${p.price}</div>
                           </div>

                           <div className="grid md:grid-cols-2 gap-10">
                              <div className="space-y-8">
                                 <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-black mb-4">The Mission</h3>
                                    <DialogDescription className="text-base md:text-lg text-black/70 leading-relaxed font-medium">
                                       {FULL[p.id]}
                                    </DialogDescription>
                                 </div>

                                 <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-black mb-4">Success Stories</h3>
                                    <div className="space-y-4">
                                       {SUCCESS_STORIES[p.id]?.map((story, idx) => (
                                          <div key={idx} className="glass p-4 rounded-2xl border-white/80 bg-white/70 shadow-sm">
                                             <div className="flex justify-between items-baseline mb-1">
                                                <span className="font-bold text-black text-sm">{story.name}</span>
                                                <span className="text-[8px] text-black/40 font-black uppercase tracking-widest">{story.company}</span>
                                             </div>
                                             <p className="text-[11px] text-black/60 font-medium leading-relaxed">{story.result}</p>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              <div className="space-y-8">
                                 <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-black mb-4">Deliverables</h3>
                                    <ul className="grid grid-cols-1 gap-3">
                                       {FEATURES[p.id].map(f => (
                                          <li key={f} className="flex gap-3 text-[13px] text-black/80 items-center font-medium glass p-3 rounded-xl border-white/80 bg-white/70 shadow-sm">
                                             <CheckCircle className="h-4 w-4 text-black shrink-0" />
                                             <span>{f}</span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>

                                 <Button 
                                    onClick={() => handleAddproduct(p)} 
                                    className="w-full rounded-2xl bg-black text-white hover:bg-black/90 transition-all font-bold tracking-widest uppercase text-xs h-16 shadow-2xl mt-4"
                                 >
                                    <ShoppingBag className="h-5 w-5 mr-3" /> Add {p.title} to Cart
                                 </Button>
                              </div>
                           </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="reveal mt-20 md:mt-32 relative overflow-hidden rounded-[3rem] md:rounded-[5rem] bg-black text-white p-12 md:p-24 text-center shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
          All four. <br className="md:hidden" /> <span className="text-white/40">One protocol.</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto text-base md:text-xl font-medium leading-relaxed">
          The full DNA Labs experience — Validate, See, Feel and Plan together for maximum impact.
        </p>
        <Button
          size="lg"
          onClick={() => PRODUCTS.forEach(add)}
          className="mt-10 md:mt-12 rounded-2xl px-10 md:px-16 py-7 md:py-8 bg-white text-black hover:bg-white/90 transition-all font-bold tracking-widest uppercase text-xs md:text-sm shadow-2xl w-full sm:w-auto group"
        >
          Activate Full Protocol <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
        </Button>
      </div>
    </div>
  );
}
