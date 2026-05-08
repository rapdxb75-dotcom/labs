import { createFileRoute } from "@tanstack/react-router";
import { Users, Lightbulb, TrendingUp, Award, MessageCircle, Calendar, ArrowRight, CheckCircle2, Shield, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — DNA Labs" },
      { name: "description", content: "Join 2,500+ innovators turning ideas into reality in the world's most advanced biotech community." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/20">
      {/* Background Elements */}
      <div className="fixed inset-0 liquid-mesh -z-10 opacity-40" />
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] liquid-blob bg-cyan-400/20 -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[40%] h-[40%] liquid-blob bg-blue-400/10 -z-10" />
      <div className="grain-overlay" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Active Community
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Innovation is a <br />
                <span className="text-gradient-cyan">Collective Act.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/60 font-medium mb-8 md:mb-10 max-w-xl leading-relaxed">
                Join a global network of 2,500+ biotech pioneers, engineers, and visionaries building the future of humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-2xl px-8 py-7 bg-black text-white hover:scale-[1.02] transition-all shadow-2xl group w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5 mr-2" /> Join our Slack
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl px-8 py-7 border-black/10 hover:bg-black/5 transition-all w-full sm:w-auto">
                  View Guidelines
                </Button>
              </div>
            </div>

            <div className="reveal relative lg:ml-10 order-1 lg:order-2">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group">
                <img 
                  src="/images/community-hero.png" 
                  alt="DNA Labs Community" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 glass-deep rounded-xl sm:rounded-2xl border border-white/20">
                  <p className="text-white text-xs sm:text-sm font-medium italic">
                    "The collaboration environment here is built for scale. Accessing global innovation has never been more seamless."
                  </p>
                  <p className="text-white/60 text-[10px] sm:text-xs mt-2 sm:mt-3 font-bold uppercase tracking-widest">— DNA Labs Infrastructure</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 glass rounded-full flex items-center justify-center shadow-xl float-slow">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              [Users, "2,500+", "Active members"],
              [Lightbulb, "500+", "Ideas shared"],
              [TrendingUp, "150+", "Launched projects"],
              [Award, "$50M+", "Funding raised"],
            ].map(([Icon, n, l], i) => (
              <div key={l as string} className="reveal glass-card p-6 sm:p-8 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-black/5 flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-black mb-1 sm:mb-2">{n as string}</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">{l as string}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">Why join <span className="text-gradient-cyan">DNA Labs?</span></h2>
            <p className="text-black/60 max-w-2xl mx-auto text-base sm:text-lg font-medium px-4">
              We provide the ecosystem you need to accelerate your most ambitious projects from concept to reality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "Radical Support",
                desc: "Get honest, constructive feedback from founders who have been in your shoes before.",
                color: "bg-rose-50"
              },
              {
                icon: Zap,
                title: "Rapid Execution",
                desc: "Find the co-founders, partners, and resources needed to launch in weeks, not months.",
                color: "bg-cyan-50"
              },
              {
                icon: Shield,
                title: "Trusted Network",
                desc: "Connect with vetted industry experts and investors in a safe, secure environment.",
                color: "bg-blue-50"
              }
            ].map((pillar, i) => (
              <div key={pillar.title} className="reveal glass-card p-8 sm:p-10 group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl ${pillar.color} flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <pillar.icon className="h-6 w-6 sm:h-7 sm:w-7 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-black/60 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Wall / Avatars */}
      <section className="py-20 sm:py-24 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 blur-[100px] sm:blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 blur-[100px] sm:blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
                Global <br />
                <span className="text-cyan-400">Network.</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Biotech Researchers",
                  "AI & Data Scientists",
                  "Deep Tech Founders",
                  "Sustainable Energy Engineers"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 sm:gap-4">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                    </div>
                    <span className="text-base sm:text-lg font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 sm:mt-12 rounded-2xl px-8 py-6 sm:px-10 sm:py-8 bg-white text-black hover:bg-cyan-50 transition-all font-bold w-full sm:w-auto">
                Join the Movement
              </Button>
            </div>
            <div className="reveal">
              <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/community-network.png" 
                  alt="Community Network" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <p className="text-lg sm:text-2xl font-bold tracking-tight">Active Infrastructure</p>
                  <p className="text-[10px] sm:text-sm text-white/60 font-medium uppercase tracking-widest mt-1">Verified innovation pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Guidelines */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {/* Upcoming Events */}
            <div className="reveal">
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-black/5 flex items-center justify-center text-black">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Upcoming Events</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    time: "Friday · 2:00 PM EST",
                    title: "Innovation Summit: Scale Strategies",
                    desc: "A deep dive into cross-border collaboration and scaling.",
                    type: "Expert Session"
                  },
                  {
                    time: "Next Week · 6:00 PM EST",
                    title: "Asset Validation Workshop",
                    desc: "Systematic review of innovation pipelines and asset growth.",
                    type: "Workshop"
                  }
                ].map((event, i) => (
                  <div key={event.title} className="glass-card p-6 sm:p-8 hover-lift cursor-pointer group">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">{event.time}</span>
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/5 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">{event.type}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors">{event.title}</h4>
                    <p className="text-xs sm:text-sm text-black/60 leading-relaxed">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Values */}
            <div className="reveal">
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-black/5 flex items-center justify-center text-black">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Values</h3>
              </div>
              <div className="glass-deep rounded-[1.5rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-black/5">
                <ul className="space-y-6 sm:space-y-8">
                  {[
                    ["Radical Respect", "Treat all members with extreme kindness and professionalism."],
                    ["Constructive Candor", "Provide helpful, actionable, and honest feedback."],
                    ["Zero Noise", "Keep discussions high-signal; strictly no spam."],
                    ["Privacy First", "Never share member data or ideas without permission."]
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-4 sm:gap-6">
                      <div className="mt-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                        <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-base sm:text-lg">{t}</p>
                        <p className="text-xs sm:text-sm text-black/60 font-medium leading-relaxed mt-1">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal glass-card p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/10 blur-[60px] sm:blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400/10 blur-[60px] sm:blur-[80px] -z-10" />
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8">Ready to build the <span className="text-gradient-cyan">Future?</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-black/60 font-medium mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Join the waiting list for our next intake. We review applications weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="rounded-2xl px-10 py-7 sm:px-12 sm:py-8 bg-black text-white shadow-2xl hover:scale-105 transition-all text-base sm:text-lg font-bold w-full sm:w-auto">
                Apply to Join
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
                <p className="text-[10px] sm:text-sm font-bold text-black/40 uppercase tracking-widest">Global Intake Open</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="h-10 sm:h-20" />
    </div>
  );
}
