import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, User, Mail, Lock, Sparkles, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/checkout/done")({
  component: CheckoutDone,
});

function CheckoutDone() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-4 md:mt-8 mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out px-4 sm:px-6">
      {/* Huge Full-Width Card */}
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.1)] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative group/card">
        {/* Decorative Light Leak */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#00DDAA]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Banner Area */}
        <div className="px-6 py-12 md:py-20 lg:py-28 text-center relative overflow-hidden">
          {/* Subtle Mesh Background */}
          <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(0,221,170,0.05)_0px,transparent_50%),radial-gradient(at_100%_0%,rgba(167,139,250,0.05)_0px,transparent_50%)]" />

          <div className="relative z-10">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#00DDAA] flex items-center justify-center shadow-[0_15px_35px_rgba(0,221,170,0.2)]">
                <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-white" strokeWidth={2.5} />
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-black mb-4 text-black tracking-tight drop-shadow-sm font-display">
              Payment <span className="text-gradient-cyan">Successful!</span>
            </h1>
            <p className="text-black/50 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Your order has been processed with biotech-grade precision.
              Check your inbox for the next steps.
            </p>
          </div>
        </div>


        {/* Content Area */}
        <div className="px-6 pb-12 md:px-12 lg:px-20 lg:pb-28 flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 relative z-10">

          {/* Left: Create Account Form */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
              <div className="bg-black/5 backdrop-blur-xl border border-black/5 rounded-xl md:rounded-2xl h-12 w-12 md:h-14 md:w-14 flex items-center justify-center shrink-0 shadow-lg">
                <User className="h-6 w-6 md:h-7 md:w-7 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight">Claim your space</h2>
                <p className="text-black/40 font-bold text-[10px] md:text-sm mt-0.5 uppercase tracking-widest">Manage your projects</p>
              </div>
            </div>

            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 focus:outline-none focus:border-black/20 focus:bg-black/10 transition-all text-black placeholder:text-black/20 font-bold text-sm md:text-base"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 focus:outline-none focus:border-black/20 focus:bg-black/10 transition-all text-black placeholder:text-black/20 font-bold text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/20 group-focus-within:text-black transition-colors" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 pl-12 md:pl-14 focus:outline-none focus:border-black/20 focus:bg-black/10 transition-all text-black placeholder:text-black/20 font-bold text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/20 group-focus-within:text-black transition-colors" />
                    <input
                      type="password"
                      placeholder="Create password"
                      className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 pl-12 md:pl-14 focus:outline-none focus:border-black/20 focus:bg-black/10 transition-all text-black placeholder:text-black/20 font-bold text-sm md:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Confirm</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/20 group-focus-within:text-black transition-colors" />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 pl-12 md:pl-14 focus:outline-none focus:border-black/20 focus:bg-black/10 transition-all text-black placeholder:text-black/20 font-bold text-sm md:text-base"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white font-bold text-[10px] md:text-xs rounded-xl md:rounded-2xl py-4 md:py-5 mt-4 transition-all hover:opacity-90 hover:scale-[0.99] active:scale-95 shadow-2xl tracking-[0.2em] uppercase cursor-pointer flex items-center justify-center gap-3">
                Initialize Account <ArrowRight className="h-4 w-4" />
              </button>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-black/5"></div>
                <span className="flex-shrink-0 mx-4 md:mx-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/20">Rapid Auth</span>
                <div className="flex-grow border-t border-black/5"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <button type="button" className="bg-white/50 border border-black/5 text-black font-bold text-xs md:text-sm rounded-xl md:rounded-2xl py-3 md:py-3.5 flex items-center justify-center gap-2 md:gap-3 transition-all hover:bg-white hover:shadow-xl cursor-pointer shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 md:h-4 md:w-4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg> Google
                </button>
                <button type="button" className="bg-black text-white border border-transparent font-bold text-xs md:text-sm rounded-xl md:rounded-2xl py-3 md:py-3.5 flex items-center justify-center gap-2 md:gap-3 transition-all hover:opacity-90 hover:shadow-xl cursor-pointer">
                  <svg viewBox="0 0 384 512" fill="currentColor" className="h-3.5 w-3.5 md:h-4 md:w-4"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg> Apple
                </button>
              </div>

              <Link to="/onboarding" className="w-full mt-4 md:mt-6 bg-black/5 border border-black/5 text-black/40 font-bold rounded-xl md:rounded-2xl py-3 md:py-3.5 flex items-center justify-center transition-all hover:bg-black/10 cursor-pointer text-[9px] md:text-[10px] tracking-widest uppercase">
                Skip for Now
              </Link>
            </form>
          </div>

          {/* Right: Account Benefits */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
            <div className="bg-black/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-12 border border-white/40 h-fit shadow-xl group/benefits">
              <h3 className="text-xl font-bold mb-8 md:mb-10 text-black tracking-tight">Ecosystem Benefits</h3>

              <div className="space-y-8 md:space-y-10">
                {[
                  { title: "Track Progress", desc: "Monitor your project milestones in real-time from a dedicated dashboard.", icon: Activity },
                  { title: "Exclusive Resources", desc: "Gain unlimited access to premium templates, design guides, and tutorials.", icon: Sparkles },
                  { title: "Priority Support", desc: "Skip the queue and get priority help exactly when you need it most.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-5 group/item">
                    <div className="bg-white rounded-xl md:rounded-2xl h-10 w-10 md:h-12 md:w-12 flex items-center justify-center shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-500">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-black mb-1">{item.title}</h4>
                      <p className="text-black/40 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 md:mt-12 text-center pt-8 border-t border-black/5">
                <Link to="/" className="text-black/40 hover:text-black font-bold text-[10px] md:text-xs tracking-widest uppercase transition cursor-pointer flex items-center justify-center gap-2 group/back">
                  Return to Home <ArrowRight className="h-3.5 w-3.5 group-hover/back:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
