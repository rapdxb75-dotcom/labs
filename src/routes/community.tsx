import { createFileRoute } from "@tanstack/react-router";
import { Users, Lightbulb, TrendingUp, Award, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — DNA Labs" },
      { name: "description", content: "Join 2,500+ innovators turning ideas into reality." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Community</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Join the <span className="text-gradient-cyan">DNA Labs</span> community.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Connect with fellow innovators, share ideas, get feedback, and grow together.
        </p>
        <Button size="lg" className="mt-8 rounded-lg px-7 btn-ripple shadow-soft hover:shadow-glow transition">
          <MessageCircle className="h-5 w-5 mr-2" /> Join our Slack
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-16">
        {[
          [Users, "2,500+", "Active members"],
          [Lightbulb, "500+", "Ideas shared"],
          [TrendingUp, "150+", "Launched projects"],
          [Award, "$50M+", "Funding raised"],
        ].map(([Icon, n, l], i) => (
          <div key={l as string} className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 text-center transition-all hover:scale-105 hover:bg-white/10 shadow-xl" style={{ transitionDelay: `${i * 60}ms` }}>
            <Icon className="h-8 w-8 mx-auto text-black mb-3" />
            <div className="text-4xl font-bold tracking-tight text-black">{n as string}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-black/40 mt-2 font-bold">{l as string}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          ["What you'll find", [
            ["Idea feedback", "Honest, constructive feedback from experienced founders."],
            ["Collaboration", "Find co-founders, partners and team members."],
            ["Expert AMAs", "Regular sessions with industry experts."],
            ["Resource sharing", "Templates, tools and resources from the community."],
          ]],
          ["Community guidelines", [
            ["Be respectful", "Treat all members with kindness, regardless of experience."],
            ["Share constructively", "Provide helpful, actionable feedback."],
            ["No spam", "Keep discussions relevant; avoid excessive self-promotion."],
            ["Protect privacy", "Don't share others' ideas without permission."],
          ]],
        ].map(([title, items]) => (
          <div key={title as string} className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-black tracking-tight">{title as string}</h3>
            <ul className="space-y-6">
              {(items as [string, string][]).map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0" />
                  <div>
                    <p className="font-bold text-black">{t}</p>
                    <p className="text-sm text-black/60 font-medium leading-relaxed mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-12 w-12 rounded-2xl bg-black/5 flex items-center justify-center text-black">
            <Calendar className="h-6 w-6" />
          </div>
          <h3 className="text-3xl font-bold text-black tracking-tight">Upcoming events</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl hover:bg-white/20 transition-all group">
            <div className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Friday · 2:00 PM EST</div>
            <p className="font-bold text-xl text-black group-hover:translate-x-1 transition-transform">Founder AMA: From Idea to $10M</p>
            <p className="text-sm text-black/60 mt-3 font-medium leading-relaxed">
              Sarah Chen shares her journey from validation to Series A.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl hover:bg-white/20 transition-all group">
            <div className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Next Week · 6:00 PM EST</div>
            <p className="font-bold text-xl text-black group-hover:translate-x-1 transition-transform">Pitch Practice Session</p>
            <p className="text-sm text-black/60 mt-3 font-medium leading-relaxed">
              Practice your pitch and get feedback from experienced founders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
