import { createFileRoute } from "@tanstack/react-router";
import { Target, Lightbulb, Users, Award, Microscope, FlaskConical, Compass, Sparkles, Fingerprint, Gem, Dna } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DNA Labs" },
      { name: "description", content: "We're the bridge between your brilliant ideas and the real world." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
      <div className="reveal text-center mb-12 md:mb-16 px-4">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">About DNA Labs</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] md:leading-[1.05]">
          Finally, someone who <span className="text-gradient-cyan">gets your ideas.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-black/60 max-w-2xl mx-auto font-medium leading-relaxed">
          We're not just another service provider. We're the bridge between your brilliant ideas and
          the real world — combining laboratory rigor with human creativity.
        </p>
      </div>

      <section className="reveal relative bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 md:px-16 mb-8 md:mb-12 text-left shadow-2xl transition-all hover:scale-[1.01] hover:bg-white/60 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
          <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] text-black grid place-items-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Compass className="h-7 w-7 md:h-8 md:w-8" />
          </div>
          <div className="flex-1 space-y-3 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight uppercase">Our Mission</h2>
            <p className="text-black/60 text-xs md:text-sm font-medium leading-relaxed">
              To democratize innovation by making professional validation, design, prototyping and
              business planning accessible to everyone with a great idea.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-8 md:mb-10">
        {[
          [Sparkles, "Innovation First", "Every idea deserves a chance. Our process nurtures and develops, never dismisses."],
          [Fingerprint, "Human-Centered", "Tech amplifies us, but human insight and creativity drive everything we do."],
          [Gem, "Excellence", "We don't just deliver results — we deliver results that exceed expectations."],
        ].map(([Icon, t, d], i) => (
          <div key={t as string} className="reveal bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 transition-all hover:scale-[1.02] hover:bg-white/60 shadow-xl" style={{ transitionDelay: `${i * 80}ms` }}>
            <Icon className="h-7 w-7 md:h-8 md:w-8 text-black mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-black tracking-tight">{t as string}</h3>
            <p className="mt-3 text-xs md:text-sm text-black/60 font-medium leading-relaxed">{d as string}</p>
          </div>
        ))}
      </section>

      <section className="reveal relative bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 md:px-16 shadow-2xl transition-all hover:scale-[1.01] hover:bg-white/60 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
          <div className="h-16 w-16 md:h-16 md:w-16 rounded-2xl bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] text-black grid place-items-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Dna className="h-7 w-7 md:h-8 md:w-8" />
          </div>
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight uppercase">Our Story</h2>
            <div className="space-y-4 md:space-y-6 text-xs md:text-sm text-black/60 leading-relaxed font-medium">
              <p>
                DNA Labs was born from a simple frustration: too many brilliant ideas never see the light
                of day because their creators don't know where to start or how to validate their concepts.
              </p>
              <p>
                We've worked with hundreds of entrepreneurs, from first-time founders to serial
                innovators, and we've seen the same pattern over and over: great ideas getting stuck in
                the "what if" phase.
              </p>
              <p>
                That's why we created our four-pillar approach:{" "}
                <strong className="text-black font-bold">Validate</strong> your concept,{" "}
                <strong className="text-black font-bold">See</strong> it come to life visually,{" "}
                <strong className="text-black font-bold">Feel</strong> how it works through prototypes, and{" "}
                <strong className="text-black font-bold">Plan</strong> your path to success.
              </p>
              <p>
                Today, we're proud to have helped launch over 500 successful projects with clients
                raising millions in funding. But our real measure of success? The moment when someone
                says, "Finally, someone who gets my idea."
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {[["500+", "Projects launched"], ["$50M+", "Funding raised"], ["4.9/5", "Client rating"]].map(([n, l]) => (
          <div key={l} className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 text-center shadow-xl transition-all hover:scale-[1.02] hover:bg-white/60">
            <div className="text-3xl md:text-4xl font-bold text-black tracking-tight">{n}</div>
            <div className="mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
