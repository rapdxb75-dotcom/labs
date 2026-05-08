import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { ArrowLeft, Lock, ShieldCheck, CheckCircle2, CreditCard, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout/payment")({
  component: CheckoutPayment,
});

const SUBTITLES: Record<string, string> = {
  validate: "Professional service package",
  see: "Complete brand identity and visual design package",
  feel: "Interactive prototypes and user experience design",
  plan: "Comprehensive business plan and execution roadmap",
};

function CheckoutPayment() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"apple" | "google" | "card">("card");

  const handlePurchase = () => {
    toast.success("Payment confirmed");
    clear();
    navigate({ to: "/checkout/done" });
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out px-4 sm:px-6">
      <div className="mb-6 md:mb-10 flex justify-start">
        <button 
          onClick={() => navigate({ to: "/checkout" })} 
          className="text-black/40 hover:text-black font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition group"
        >
          <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:-translate-x-1 transition-transform" /> Back to Cart
        </button>
      </div>
      
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.1)] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#00DDAA]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="px-6 py-10 md:px-12 lg:px-16 md:py-16 relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4 border border-black/5">
              <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#00DDAA]" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black/60">Secure Protocol v2.4</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight font-display mb-3">
              Secure <span className="text-gradient-cyan">Settlement.</span>
            </h2>
            <p className="text-black/40 text-xs md:text-base font-medium max-w-xl mx-auto leading-relaxed px-4 md:px-0">
              Finalize your protocol selection. Your payment is encrypted and processed through our clinical-grade infrastructure.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
            {/* Left: Order Summary */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              <div className="bg-black/5 border border-black/5 rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 h-fit w-full shadow-xl relative overflow-hidden group/receipt">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                
                <h3 className="text-[10px] font-black mb-6 md:mb-8 text-black/40 uppercase tracking-[0.3em] flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-black/10" /> Order Summary
                </h3>
                
                <div className="space-y-4 md:space-y-5 mb-8">
                  {items.map((it: any) => (
                    <div key={it.id} className="flex items-center gap-4 md:gap-5 group/item">
                      <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden shadow-lg border border-white group-hover/item:scale-110 transition-transform duration-500 shrink-0">
                        <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm md:text-base text-black tracking-tight truncate">{it.title}</h4>
                        <p className="text-black/30 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1 truncate">{SUBTITLES[it.id] || "Standard Service"}</p>
                      </div>
                      <div className="font-bold text-sm md:text-base text-black shrink-0">${it.price * it.qty}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 md:space-y-3 pt-6 border-t border-black/5 mb-6">
                  <div className="flex justify-between items-center text-[10px] md:text-xs">
                    <span className="font-bold text-black/40 uppercase tracking-widest">Subtotal</span>
                    <span className="font-bold text-black">${total}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] md:text-xs">
                    <span className="font-bold text-black/40 uppercase tracking-widest">Lab Fees</span>
                    <span className="font-bold text-[#00DDAA] uppercase tracking-widest text-[8px] md:text-[9px]">Included</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end mb-6 md:mb-8">
                  <div>
                    <span className="text-[8px] md:text-[9px] font-black text-black/40 uppercase tracking-[0.3em] block mb-1">Total Amount</span>
                    <span className="text-2xl md:text-3xl font-black text-black tracking-tighter">${total}</span>
                  </div>
                  <div className="bg-black text-white p-2 md:p-2.5 rounded-xl rotate-12 shadow-lg">
                    <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-white/50 rounded-xl md:rounded-2xl p-3 border border-black/5 text-[8px] md:text-[9px] font-bold text-black/40 uppercase tracking-widest justify-center">
                  <Lock className="h-3 w-3 md:h-3.5 md:w-3.5" /> 256-bit AES Encryption Active
                </div>
              </div>
            </div>

            {/* Right: Payment Method */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 h-fit w-full shadow-2xl">
                <h3 className="text-[10px] font-black mb-6 text-black/40 uppercase tracking-[0.3em] flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-black/10" /> Select Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { id: "apple", label: "Apple Pay", icon: (props: any) => <svg viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg> },
                    { id: "google", label: "Google Pay", icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
                    { id: "card", label: "Debit Card", icon: CreditCard },
                  ].map((method) => {
                    const Icon = method.icon;
                    const active = paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id as any)}
                        className={`group flex flex-col items-center justify-center gap-2 p-4 rounded-xl md:rounded-2xl border transition-all duration-500 cursor-pointer ${
                          active 
                            ? "bg-black border-black text-white shadow-2xl scale-105" 
                            : "bg-white/50 border-black/5 text-black/40 hover:bg-white hover:border-black/10"
                        }`}
                      >
                        <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${active ? "text-white" : "text-black/40"}`} />
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">{method.label}</span>
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handlePurchase(); }} className="space-y-4 md:space-y-5">
                  {paymentMethod === "card" && (
                    <div className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="space-y-1.5">
                         <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Card Number</label>
                         <div className="relative group">
                           <CreditCard className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 md:h-4 md:w-4 text-black/20 group-focus-within:text-black transition-colors" />
                           <input required type="text" placeholder="1234 5678 9012 3456" className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 md:p-4 pl-12 md:pl-14 text-sm md:text-base focus:outline-none focus:border-black/20 focus:bg-black/10 font-mono text-black placeholder:text-black/10 transition-all" />
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-1.5">
                            <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Expiry Date</label>
                            <input required type="text" placeholder="MM/YY" className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 md:p-4 text-sm md:text-base focus:outline-none focus:border-black/20 focus:bg-black/10 font-mono text-black placeholder:text-black/10 transition-all" />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">CVV</label>
                            <input required type="text" placeholder="123" className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 md:p-4 text-sm md:text-base focus:outline-none focus:border-black/20 focus:bg-black/10 font-mono text-black placeholder:text-black/10 transition-all" />
                         </div>
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Cardholder Name</label>
                         <input required type="text" placeholder="John Doe" className="w-full bg-black/5 border border-black/10 rounded-xl md:rounded-2xl p-3.5 md:p-4 text-sm md:text-base focus:outline-none focus:border-black/20 focus:bg-black/10 text-black placeholder:text-black/10 transition-all" />
                      </div>
                    </div>
                  )}

                  <button type="submit" className="w-full bg-black text-white font-bold text-[10px] md:text-xs rounded-xl md:rounded-2xl py-4 md:py-5 mt-6 transition-all hover:opacity-90 hover:scale-[0.99] active:scale-95 shadow-2xl tracking-[0.2em] uppercase cursor-pointer flex items-center justify-center gap-3 md:gap-4">
                     <Lock className="h-3.5 w-3.5 md:h-4 md:w-4" /> 
                     {paymentMethod === "apple" ? "Auth with Apple Pay" : paymentMethod === "google" ? "Auth with Google Pay" : "Authorize Settlement"}
                  </button>
                </form>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-10 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black/20">
                   <span className="flex items-center gap-2 text-black/40"><ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4" /> Insured</span>
                   <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" /> Bio-Verify</span>
                   <span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 md:h-4 md:w-4" /> SSL-256</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
