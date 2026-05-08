import { createFileRoute } from "@tanstack/react-router";
import { Target, Lightbulb, Users, Award, Microscope, FlaskConical } from "lucide-react";

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
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="reveal text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">About DNA Labs</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Finally, someone who <span className="text-gradient-cyan">gets your ideas.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We're not just another service provider. We're the bridge between your brilliant ideas and
          the real world — combining laboratory rigor with human creativity.
        </p>
      </div>

      <section className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 mb-10 text-center shadow-2xl">
        <div className="h-14 w-14 mx-auto rounded-2xl bg-black/5 text-black grid place-items-center mb-6 shadow-xl">
          <Target className="h-7 w-7" />
        </div>
        <h2 className="text-3xl font-bold text-black tracking-tight">Our Mission</h2>
        <p className="mt-4 text-black/60 max-w-2xl mx-auto font-medium leading-relaxed">
          To democratize innovation by making professional validation, design, prototyping and
          business planning accessible to everyone with a great idea.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          [Lightbulb, "Innovation First", "Every idea deserves a chance. Our process nurtures and develops, never dismisses."],
          [Users, "Human-Centered", "Tech amplifies us, but human insight and creativity drive everything we do."],
          [Award, "Excellence", "We don't just deliver results — we deliver results that exceed expectations."],
        ].map(([Icon, t, d], i) => (
          <div key={t as string} className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 transition-all hover:scale-105 hover:bg-white/10 shadow-xl" style={{ transitionDelay: `${i * 80}ms` }}>
            <Icon className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-bold text-black tracking-tight">{t as string}</h3>
            <p className="mt-3 text-sm text-black/60 font-medium leading-relaxed">{d as string}</p>
          </div>
        ))}
      </section>

      <section className="reveal bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 rounded-2xl bg-black/5 flex items-center justify-center text-black">
            <FlaskConical className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-black tracking-tight">Our Story</h2>
        </div>
        <div className="space-y-6 text-black/60 leading-relaxed font-medium">
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
      </section>

      <div className="reveal mt-10 grid sm:grid-cols-3 gap-6">
        {[["500+", "Projects launched"], ["$50M+", "Funding raised"], ["4.9/5", "Client rating"]].map(([n, l]) => (
          <div key={l} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center shadow-xl">
            <div className="text-4xl font-bold text-black tracking-tight">{n}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
