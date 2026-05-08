import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCart, PRODUCTS } from "@/lib/cart";
import { ShoppingCart, Plus } from "lucide-react";

export const Route = createFileRoute("/checkout/")({
  component: CheckoutDetails,
});

const SUBTITLES: Record<string, string> = {
  validate: "Professional service package",
  see: "Complete brand identity and visual design package",
  feel: "Interactive prototypes and user experience design",
  plan: "Comprehensive business plan and execution roadmap",
};

function CheckoutDetails() {
  const { items, total, add } = useCart();
  const navigate = useNavigate();

  const complementaryProducts = PRODUCTS.filter((p) => !items.some((it) => it.id === p.id));

  const handleAddAll = () => {
    complementaryProducts.forEach((p) => add(p));
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Complete Your Order</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          Review your items and add complementary services to maximize your success
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* Left Column: Your Cart */}
        <div className="glass-card border border-white/60 rounded-[2.5rem] p-5 lg:p-8 h-fit w-full min-w-0 shadow-2xl backdrop-blur-3xl bg-white/40">
          <h2 className="text-lg sm:text-xl font-bold mb-6 lg:mb-8 flex items-center gap-2 text-black">
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-black" /> Your Cart
          </h2>

          {items.length === 0 ? (
            <p className="text-black/40 mb-8 text-center py-10 glass rounded-2xl border border-white/40 text-sm font-medium">
              Your cart is empty. Pick a service to get started.
            </p>
          ) : (
            <div className="space-y-3 mb-6 border-b border-border pb-6">
              {items.map((it: any) => (
                <div key={it.id} className="bg-white/50 border border-white/60 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:bg-white/80 transition-all shadow-sm">
                  <img src={it.image} alt={it.title} className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover bg-white shrink-0 shadow-md" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base truncate text-black uppercase tracking-tight">{it.title}</h3>
                    <p className="text-black/50 text-[10px] sm:text-xs mt-0.5 truncate font-medium">{SUBTITLES[it.id] || "Professional service package"}</p>
                  </div>
                  <div className="text-base sm:text-lg font-bold shrink-0 text-black">${it.price * it.qty}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center mb-6 px-1">
            <span className="text-lg sm:text-xl font-bold text-black uppercase tracking-tighter">Total:</span>
            <span className="text-2xl sm:text-3xl font-black text-black">${total}</span>
          </div>

          <button
            onClick={() => navigate({ to: "/checkout/payment" })}
            disabled={items.length === 0}
            className="w-full bg-black text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-xl py-4 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl cursor-pointer"
          >
            Proceed to Payment - ${total}
          </button>
        </div>

        {/* Right Column: Complete Your Success Package */}
        <div className="glass-card border border-white/60 rounded-[2.5rem] p-5 lg:p-8 h-fit w-full min-w-0 shadow-2xl backdrop-blur-3xl bg-white/40">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
            <h2 className="text-lg sm:text-xl font-bold text-black">Complete Your Success Package</h2>
            {complementaryProducts.length > 0 && (
              <button
                onClick={handleAddAll}
                className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition shadow-lg cursor-pointer w-full sm:w-auto"
              >
                Add All Services
              </button>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm">
            Maximize your success with these complementary services:
          </p>

          <div className="space-y-3">
            {complementaryProducts.map((p: any) => (
              <div key={p.id} className="bg-white/50 border border-white/60 hover:bg-white/80 transition-all rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 group shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <img src={p.image} alt={p.title} className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover bg-white shrink-0 group-hover:scale-105 transition-transform shadow-md" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm sm:text-base truncate text-black uppercase tracking-tight">{p.title}</h3>
                    <p className="text-black/50 text-[10px] sm:text-xs mt-0.5 truncate font-medium">{SUBTITLES[p.id] || "Professional service package"}</p>
                  </div>
                </div>
                <button
                  onClick={() => add(p)}
                  className="bg-black text-white font-black px-4 py-2.5 rounded-lg text-[9px] uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer shrink-0"
                >
                  <Plus className="h-3 w-3" /> Add ${p.price}
                </button>
              </div>
            ))}

            {complementaryProducts.length === 0 && (
              <div className="text-center py-8 sm:py-10 bg-muted/50 rounded-xl border border-border">
                <p className="text-muted-foreground text-xs sm:text-sm">You have added all available services to your cart.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
