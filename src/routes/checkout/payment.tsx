import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { ArrowLeft, Lock, ShieldCheck, CheckCircle2, CreditCard } from "lucide-react";
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
    <div className="w-full">
      <div className="mb-6 flex justify-start">
        <button onClick={() => navigate({ to: "/checkout" })} className="text-sm text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1.5 cursor-pointer transition">
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-3xl shadow-xl p-6 sm:p-10 w-full min-w-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">Secure Payment</h2>
          <p className="text-muted-foreground mt-2">Complete your purchase securely</p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Order Summary */}
          <div className="bg-muted/30 border border-border rounded-2xl p-6 lg:p-8 h-fit w-full min-w-0">
            <h3 className="text-xl font-bold mb-5">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              {items.map((it: any) => (
                <div key={it.id} className="bg-background border border-border rounded-xl p-3 flex items-center gap-4">
                   <img src={it.image} alt={it.title} className="h-12 w-12 rounded-lg object-cover bg-background" />
                   <div className="flex-1 min-w-0">
                     <h4 className="font-bold text-sm truncate">{it.title}</h4>
                     <p className="text-muted-foreground text-xs truncate">{SUBTITLES[it.id] || "Professional service package"}</p>
                   </div>
                   <div className="font-bold text-sm">${it.price * it.qty}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm border-b border-border pb-4 mb-4">
              <div className="flex justify-between text-muted-foreground">
                 <span>Subtotal:</span>
                 <span className="font-bold text-foreground">${total}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                 <span>Processing Fee:</span>
                 <span className="font-bold text-foreground">$0</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
               <span className="text-xl font-bold">Total:</span>
               <span className="text-2xl font-bold text-primary">${total}</span>
            </div>

            <div className="flex justify-center items-center gap-1.5 text-xs text-muted-foreground">
               <Lock className="h-3.5 w-3.5" /> 256-bit SSL encrypted
            </div>
          </div>

          {/* Right: Payment Method */}
          <div className="bg-muted/30 border border-border rounded-2xl p-6 lg:p-8 h-fit w-full min-w-0">
            <h3 className="text-xl font-bold mb-5">Payment Method</h3>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => setPaymentMethod("apple")}
                className={`w-full hover:bg-accent border rounded-xl p-3.5 flex items-center justify-center gap-3 transition cursor-pointer ${paymentMethod === "apple" ? "bg-cyan-50 dark:bg-cyan-950/30 border-2 border-cyan-400 shadow-sm" : "bg-background border-border"}`}
              >
                 <div className="bg-foreground text-background rounded-full h-6 w-6 flex items-center justify-center p-1">
                    <svg viewBox="0 0 384 512" fill="currentColor" className="h-full w-full"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                 </div>
                 <span className={`font-bold text-sm ${paymentMethod === "apple" ? "text-cyan-600 dark:text-cyan-400" : "text-foreground"}`}>Apple Pay</span>
              </button>

              <button
                onClick={() => setPaymentMethod("google")}
                className={`w-full hover:bg-accent border rounded-xl p-3.5 flex items-center justify-center gap-3 transition cursor-pointer ${paymentMethod === "google" ? "bg-cyan-50 dark:bg-cyan-950/30 border-2 border-cyan-400 shadow-sm" : "bg-background border-border"}`}
              >
                 <div className="bg-[#4285F4] rounded-full h-6 w-6 flex items-center justify-center p-1">
                    <svg viewBox="0 0 24 24" className="h-full w-full"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/></svg>
                 </div>
                 <span className={`font-bold text-sm ${paymentMethod === "google" ? "text-cyan-600 dark:text-cyan-400" : "text-foreground"}`}>Google Pay</span>
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className={`w-full hover:bg-accent border rounded-xl p-3.5 flex items-center justify-center gap-3 transition cursor-pointer ${paymentMethod === "card" ? "bg-cyan-50 dark:bg-cyan-950/30 border-2 border-cyan-400 shadow-sm" : "bg-background border-border"}`}
              >
                 <CreditCard className={`h-5 w-5 ${paymentMethod === "card" ? "text-cyan-600 dark:text-cyan-400" : "text-muted-foreground"}`} />
                 <span className={`font-bold text-sm ${paymentMethod === "card" ? "text-cyan-600 dark:text-cyan-400" : "text-foreground"}`}>Credit / Debit Card</span>
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handlePurchase(); }} className="space-y-4">
              {paymentMethod === "card" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div>
                     <label className="text-xs text-muted-foreground mb-1 block">Card Number</label>
                     <input required type="text" placeholder="1234 5678 9012 3456" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Expiry Date</label>
                        <input required type="text" placeholder="MM/YY" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono text-foreground placeholder:text-muted-foreground" />
                     </div>
                     <div>
                        <label className="text-xs text-muted-foreground mb-1 block">CVV</label>
                        <input required type="text" placeholder="123" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono text-foreground placeholder:text-muted-foreground" />
                     </div>
                  </div>
                  <div>
                     <label className="text-xs text-muted-foreground mb-1 block">Cardholder Name</label>
                     <input required type="text" placeholder="John Doe" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-foreground placeholder:text-muted-foreground" />
                  </div>
                </div>
              )}

              <button type="submit" className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition cursor-pointer mt-6 shadow-lg text-sm">
                 <Lock className="h-5 w-5" /> 
                 {paymentMethod === "apple" ? "Pay with Apple Pay" : paymentMethod === "google" ? "Pay with Google Pay" : `Complete Purchase - $${total}`}
              </button>
            </form>

            <div className="flex justify-center gap-4 mt-6 text-xs text-muted-foreground">
               <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> Secure</span>
               <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Encrypted</span>
               <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
