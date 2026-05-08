import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mail, Calendar, Download, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/submission-complete")({
  component: SubmissionComplete,
});

function SubmissionComplete() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-20 px-6 font-sans overflow-hidden">
      {/* Complex Background Gradient */}

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Success Icon (Premium Style from Done Page) */}
        <div className="relative mx-auto h-20 w-20 mb-10 group cursor-default">
          {/* Outer Glow Ring */}
          <div className="absolute inset-[-10px] bg-[#00DDAA]/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00DDAA] to-[#00DDAA]/60 rounded-full shadow-[0_0_50px_rgba(0,221,170,0.4)] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
            <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={2.5} />
          </div>
          {/* Floating Sparkles */}
          <Sparkles className="absolute -top-3 -right-3 h-6 w-6 text-[#00DDAA] animate-bounce [animation-duration:3s]" />
        </div>

        {/* Title & Subtext */}
        <div className="text-center mb-10 md:mb-16 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Submission Complete!
          </h1>
          <p className="text-black/60 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Thank you for sharing your information with us.
            <br className="hidden sm:block" />
            Our team will review your submission and get back to you soon.
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="w-full bg-white/40 backdrop-blur-3xl border border-black/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.1)] mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10 md:mb-12 tracking-tight">
            What happens next?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="h-14 w-14 md:h-16 md:w-16 bg-blue-500/5 border border-blue-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_10px_30px_rgba(59,130,246,0.1)] transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-blue-600 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">Review & Analysis</h3>
              <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium px-4 md:px-0">
                Our experts will carefully review your submission and conduct thorough analysis.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="h-14 w-14 md:h-16 md:w-16 bg-purple-500/5 border border-purple-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_10px_30px_rgba(168,85,247,0.1)] transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-purple-600 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">Preparation</h3>
              <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium px-4 md:px-0">
                We'll prepare your customized deliverables based on your input.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="h-14 w-14 md:h-16 md:w-16 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_10px_30px_rgba(16,185,129,0.1)] transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 text-emerald-600 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">Delivery</h3>
              <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium px-4 md:px-0">
                You'll receive your completed package within 3-5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Expected Timeline Card */}
        <div className="w-full bg-white/40 backdrop-blur-3xl border border-black/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.1)] mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-10 tracking-tight text-center md:text-left">
            Expected Timeline
          </h2>

          <div className="space-y-6 md:space-y-8">
            {[
              { day: "Today", title: "Submission Received", desc: "Your information has been successfully submitted", icon: CheckCircle2, color: "text-emerald-500" },
              { day: "Day 1-2", title: "Initial Review", desc: "Our team begins analysis and may reach out for clarification", step: "1", color: "bg-blue-500/10 text-blue-600 border border-blue-500/20" },
              { day: "Day 3-4", title: "Development", desc: "Creation of your customized deliverables", step: "2", color: "bg-purple-500/10 text-purple-600 border border-purple-500/20" },
              { day: "Day 5", title: "Delivery", desc: "Final review and delivery of your completed package", step: "3", color: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 md:gap-6 group">
                <div className="shrink-0 mt-1">
                  {item.icon ? (
                    <item.icon className={`h-7 w-7 md:h-8 md:w-8 ${item.color}`} />
                  ) : (
                    <div className={`h-7 w-7 md:h-8 md:w-8 rounded-full ${item.color} flex items-center justify-center font-bold text-xs md:text-sm shadow-md group-hover:scale-110 transition-transform duration-500`}>
                      {item.step}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-black font-bold text-base md:text-lg mb-1">
                    {item.day} - {item.title}
                  </h4>
                  <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/"
          className="bg-black text-white font-bold px-12 py-5 rounded-2xl flex items-center gap-3 hover:opacity-90 transition-all shadow-2xl tracking-widest uppercase text-sm group"
        >
          Go to My Account <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
