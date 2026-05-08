import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, ShoppingBag, ArrowRight, Microscope, Sparkles, Activity, Dna, Star, Users } from "lucide-react";
import { PRODUCTS, useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

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

  const handleAddproduct = (p: any) => {
    console.log("Adding product");
    add(p);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="reveal text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Our services</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Transform ideas into <span className="text-gradient-cyan">reality.</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect service to bring your vision to life. Each is engineered to take you one
          step closer to launch.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {PRODUCTS.map((p, i) => {
          const Icon = ICONS[p.id as keyof typeof ICONS];
          return (
            <article key={p.id} className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col p-10 shadow-2xl transition-all hover:scale-[1.02] hover:bg-white/10" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex gap-6">
                 <div className="h-24 w-24 rounded-2xl bg-black/5 flex items-center justify-center shrink-0 border border-black/10 shadow-xl">
                    <Icon className="h-12 w-12 text-black" />
                 </div>
                 <div className="flex-1 pt-1">
                    <div className="flex justify-between items-start">
                       <h2 className="text-3xl font-bold tracking-tight text-black">{p.title}</h2>
                       <span className="text-3xl font-bold text-black">${p.price}</span>
                    </div>
                    <p className="text-black/60 font-medium mt-1 uppercase tracking-widest text-[10px]">{p.tagline}</p>
                    <div className="flex items-center gap-5 mt-4 text-[10px] font-bold uppercase tracking-widest text-black/40">
                       <span className="flex items-center gap-1.5 text-black">
                          <Star className="h-4 w-4 fill-current" /> 4.9
                       </span>
                       <span className="flex items-center gap-1.5">
                          <Users className="h-4 w-4" /> 500+ clients
                       </span>
                    </div>
                 </div>
              </div>

              <p className="mt-10 text-lg text-black/70 leading-relaxed font-medium">
                {FULL[p.id]}
              </p>

              <div className="mt-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black mb-6">What's Included:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FEATURES[p.id].map(f => (
                     <li key={f} className="flex gap-3 text-sm text-black/60 items-center font-medium">
                        <CheckCircle className="h-5 w-5 text-black shrink-0" />
                        <span>{f}</span>
                     </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black mb-6">See It In Action:</h3>
                 <div className="aspect-video rounded-3xl overflow-hidden bg-black/5 border border-black/10 group relative shadow-xl">
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80" />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                 </div>
              </div>

              {SUCCESS_STORIES[p.id] && (
                <div className="mt-10">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black mb-6">Recent Success Stories:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {SUCCESS_STORIES[p.id].map((story, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/20 shadow-lg">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="font-bold text-black text-lg">{story.name}</span>
                          <span className="text-[10px] text-black/40 font-bold uppercase tracking-widest">{story.company}</span>
                        </div>
                        <p className="text-sm text-black/60 font-medium leading-relaxed">{story.result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 flex gap-3">
                 <Button onClick={() => handleAddproduct(p)} size="lg" className="flex-1 rounded-2xl bg-black text-white hover:opacity-90 transition-all font-bold tracking-widest uppercase text-xs h-16 shadow-xl">
                    <ShoppingBag className="h-5 w-5 mr-2" /> Add to cart
                 </Button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="reveal mt-16 relative overflow-hidden rounded-[3rem] bg-black text-white p-12 md:p-20 text-center shadow-2xl">
        <div className="absolute inset-0 ring-grid opacity-20 pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          All four. <span className="text-white/40">One protocol.</span>
        </h2>
        <p className="mt-6 text-white/60 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          The full DNA Labs experience — Validate, See, Feel and Plan together.
        </p>
        <Button
          size="lg"
          onClick={() => PRODUCTS.forEach(add)}
          className="mt-10 rounded-2xl px-12 py-8 bg-white text-black hover:bg-white/90 transition-all font-bold tracking-widest uppercase text-sm shadow-2xl"
        >
          I want them all <ArrowRight className="ml-3 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
