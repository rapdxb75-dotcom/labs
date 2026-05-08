import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mail, Calendar, Download, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, ScanSearch, FlaskConical, PackageCheck, Inbox, Cpu, Truck, Layers } from "lucide-react";

export const Route = createFileRoute("/submission-complete")({
  component: SubmissionComplete,
});

function SubmissionComplete() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-20 px-6 font-sans overflow-hidden">
      {/* Complex Background Gradient */}

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Success Icon (Standardized with Done Page) */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#00DDAA] flex items-center justify-center shadow-[0_15px_35px_rgba(0,221,170,0.2)]">
            <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-white" strokeWidth={2.5} />
          </div>
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
              <div className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center mb-5 md:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <ScanSearch className="h-8 w-8 md:h-10 md:w-10 text-blue-600 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">Review & Analysis</h3>
              <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium px-4 md:px-0">
                Our experts will carefully review your submission and conduct thorough analysis.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center mb-5 md:mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <FlaskConical className="h-8 w-8 md:h-10 md:w-10 text-purple-600 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">Preparation</h3>
              <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium px-4 md:px-0">
                We'll prepare your customized deliverables based on your input.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center mb-5 md:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <PackageCheck className="h-8 w-8 md:h-10 md:w-10 text-emerald-600 relative z-10" strokeWidth={1.5} />
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

          <div className="space-y-0 relative">
            {[
              { day: "Today", title: "Submission Received", desc: "Your information has been successfully submitted", icon: Inbox, color: "text-blue-500", bgColor: "bg-blue-500/10" },
              { day: "Day 1-2", title: "Initial Review", desc: "Our team begins analysis and may reach out for clarification", icon: ScanSearch, color: "text-purple-500", bgColor: "bg-purple-500/10" },
              { day: "Day 3-4", title: "Development", desc: "Creation of your customized deliverables", icon: Layers, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
              { day: "Day 5", title: "Delivery", desc: "Final review and delivery of your completed package", icon: Truck, color: "text-blue-600", bgColor: "bg-blue-600/10" },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-stretch gap-5 md:gap-8 group relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`h-8 w-8 md:h-10 md:w-10 rounded-xl ${item.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <item.icon className={`h-4 w-4 md:h-5 md:w-5 ${item.color}`} strokeWidth={2.5} />
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-grow bg-black/5 my-3 rounded-full" />
                  )}
                </div>
                <div className="pt-0.5 pb-12">
                  <h4 className="text-black font-bold text-base md:text-lg mb-1 flex items-center gap-3">
                    {item.title}
                    <span className="px-2 py-0.5 rounded-md bg-black/5 text-black/40 text-[9px] md:text-[10px] uppercase tracking-widest font-black">
                      {item.day}
                    </span>
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
