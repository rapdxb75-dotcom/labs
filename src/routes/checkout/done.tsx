import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, User, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/checkout/done")({
  component: CheckoutDone,
});

function CheckoutDone() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-2">
      {/* Huge Full-Width Card */}
      <div className="bg-card/60 backdrop-blur-2xl border border-border shadow-2xl rounded-[2.5rem] overflow-hidden">

        {/* Top Banner Area */}
        <div className="bg-[#10b981]/10 px-8 py-12 lg:py-16 text-center border-b border-[#10b981]/20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10b981]/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="mx-auto h-20 w-20 rounded-full bg-[#10b981] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Payment Successful!</h1>
            <p className="text-foreground/80 text-lg max-w-lg mx-auto">
              Your order has been processed successfully. You'll receive a confirmation email shortly.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 lg:p-16 flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24">

          {/* Left: Create Account Form */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 rounded-2xl h-14 w-14 flex items-center justify-center shrink-0">
                <User className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Create Account</h2>
                <p className="text-muted-foreground mt-1">Join to track projects & access tools</p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground/90">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-background border border-border rounded-xl p-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground/90">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-background border border-border rounded-xl p-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground/90">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input type="email" placeholder="john@example.com" className="w-full bg-background border border-border rounded-xl p-3.5 pl-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground/90">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input type="password" placeholder="Create password" className="w-full bg-background border border-border rounded-xl p-3.5 pl-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground/90">Confirm</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input type="password" placeholder="Confirm password" className="w-full bg-background border border-border rounded-xl p-3.5 pl-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" />
                  </div>
                </div>
              </div>

              <Link to="/onboarding" className="w-full bg-foreground text-background font-bold text-lg rounded-xl py-4 mt-2 transition hover:opacity-90 shadow-lg cursor-pointer flex items-center justify-center">
                Create My Account
              </Link>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-border"></div>
                <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm font-medium">Or</span>
                <div className="flex-grow border-t border-border"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="bg-background border border-border text-foreground font-bold rounded-xl py-3.5 flex items-center justify-center gap-3 transition hover:bg-muted cursor-pointer shadow-sm">
                  <svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg> Google
                </button>
                <button type="button" className="bg-[#000] dark:bg-white text-white dark:text-black border border-transparent font-bold rounded-xl py-3.5 flex items-center justify-center gap-3 transition hover:opacity-90 cursor-pointer shadow-sm">
                  <svg viewBox="0 0 384 512" fill="currentColor" className="h-5 w-5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg> Apple
                </button>
              </div>

              <Link to="/onboarding" className="w-full mt-4 bg-muted border border-border text-foreground font-bold rounded-xl py-3.5 flex items-center justify-center transition hover:bg-muted/80 cursor-pointer shadow-sm">
                Skip for Now
              </Link>
            </form>
          </div>

          {/* Right: Account Benefits */}
          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border h-fit">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Why Create an Account?</h3>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="bg-primary/20 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">Track Progress</h4>
                  <p className="text-muted-foreground leading-relaxed">Monitor your project milestones in real-time from a dedicated dashboard.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-primary/20 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">Exclusive Resources</h4>
                  <p className="text-muted-foreground leading-relaxed">Gain unlimited access to premium templates, design guides, and tutorials.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-primary/20 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">Priority Support</h4>
                  <p className="text-muted-foreground leading-relaxed">Skip the queue and get priority help exactly when you need it most.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center pt-8 border-t border-border">
              <Link to="/" className="text-muted-foreground hover:text-foreground font-semibold transition cursor-pointer">
                I don't need an account right now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
