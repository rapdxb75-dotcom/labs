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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Complete Your Order</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Review your items and add complementary services to maximize your success
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Left Column: Your Cart */}
        <div className="bg-card border border-border rounded-3xl p-6 lg:p-10 h-fit w-full min-w-0 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
            <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" /> Your Cart
          </h2>

          {items.length === 0 ? (
            <p className="text-muted-foreground mb-8 text-center py-10 bg-muted/50 rounded-2xl border border-border text-sm sm:text-base">
              Your cart is empty. Pick a service to get started.
            </p>
          ) : (
            <div className="space-y-4 mb-8 border-b border-border pb-8">
              {items.map((it: any) => (
                <div key={it.id} className="bg-background border border-border rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 hover:border-primary/30 transition-colors">
                  <img src={it.image} alt={it.title} className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover bg-background shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg truncate">{it.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 truncate">{SUBTITLES[it.id] || "Professional service package"}</p>
                  </div>
                  <div className="text-lg sm:text-xl font-bold shrink-0">${it.price * it.qty}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center mb-8">
            <span className="text-xl sm:text-2xl font-bold">Total:</span>
            <span className="text-2xl sm:text-3xl font-bold text-primary">${total}</span>
          </div>

          <button
            onClick={() => navigate({ to: "/checkout/payment" })}
            disabled={items.length === 0}
            className="w-full bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl py-4 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg cursor-pointer"
          >
            Proceed to Payment - ${total}
          </button>
        </div>

        {/* Right Column: Complete Your Success Package */}
        <div className="bg-card border border-border rounded-3xl p-6 lg:p-10 h-fit w-full min-w-0 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold">Complete Your Success Package</h2>
            {complementaryProducts.length > 0 && (
              <button
                onClick={handleAddAll}
                className="bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 px-4 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap cursor-pointer w-full sm:w-auto"
              >
                Add All
              </button>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Maximize your success with these complementary services:
          </p>

          <div className="space-y-4">
            {complementaryProducts.map((p: any) => (
              <div key={p.id} className="bg-background border border-border hover:bg-accent transition rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 group">
                <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                  <img src={p.image} alt={p.title} className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover bg-background shrink-0 group-hover:scale-105 transition-transform" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg truncate">{p.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 truncate">{SUBTITLES[p.id] || "Professional service package"}</p>
                  </div>
                </div>
                <button
                  onClick={() => add(p)}
                  className="bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-xl text-sm flex items-center justify-center gap-1.5 hover:opacity-90 transition shadow-sm w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer shrink-0"
                >
                  <Plus className="h-4 w-4" /> Add ${p.price}
                </button>
              </div>
            ))}

            {complementaryProducts.length === 0 && (
              <div className="text-center py-10 sm:py-12 bg-muted/50 rounded-2xl border border-border">
                <p className="text-muted-foreground text-sm sm:text-base">You have added all available services to your cart.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
