import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const { items, remove, update, total, open, setOpen, count } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="bg-background w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="text-xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Your sample tray
            <span className="ml-auto mr-8 text-xs font-normal text-muted-foreground bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/10 grid place-items-center">
                <ShoppingBag className="h-8 w-8 text-primary opacity-50" />
              </div>
              <p className="font-semibold text-foreground">No samples yet</p>
              <p className="text-sm mt-1">Add a service to get started.</p>
              <Button
                asChild
                variant="outline"
                className="mt-5 rounded-lg bg-transparent border-border btn-ripple"
                onClick={() => setOpen(false)}
              >
                <Link to="/products">Browse services</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 p-3 rounded-xl surface border border-border">
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-sm">{it.title}</p>
                      <p className="font-semibold text-primary shrink-0">
                        ${(it.price * it.qty).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      ${it.price.toLocaleString()} each
                    </p>

                    {/* Quantity controls */}
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => update(it.id, it.qty - 1)}
                        className="h-6 w-6 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{it.qty}</span>
                      <button
                        onClick={() => update(it.id, it.qty + 1)}
                        className="h-6 w-6 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => remove(it.id)}
                        className="ml-auto text-xs text-muted-foreground hover:text-destructive inline-flex items-center gap-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4 surface">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Subtotal ({count} {count === 1 ? "service" : "services"})</span>
              <span className="text-2xl font-semibold text-foreground">
                ${total.toLocaleString()}
              </span>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full btn-ripple shadow-soft hover:shadow-glow transition"
              onClick={() => setOpen(false)}
            >
              <Link to="/checkout">
                Proceed to checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Secure checkout · NDA-protected
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
