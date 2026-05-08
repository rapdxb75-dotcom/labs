import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const { items, remove, update, total, open, setOpen, count } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="bg-white/90 backdrop-blur-3xl w-full sm:max-w-md p-0 flex flex-col border-l border-white/60">
        <SheetHeader className="px-6 py-6 border-b border-black/5">
          <SheetTitle className="text-xl font-bold flex items-center gap-3 tracking-tight">
            <ShoppingBag className="h-5 w-5 text-black" />
            Your sample tray
            <span className="ml-auto mr-8 text-[10px] font-black text-black/40 bg-black/5 px-2.5 py-1 rounded-full uppercase tracking-widest">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Summary of your selected laboratory services.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="text-center py-20 text-black/40">
              <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-black/5 grid place-items-center">
                <ShoppingBag className="h-8 w-8 text-black/20" />
              </div>
              <p className="font-bold text-black tracking-tight text-lg">No samples yet</p>
              <p className="text-sm mt-1 font-medium">Add a service to get started.</p>
              <Button
                asChild
                variant="outline"
                className="mt-8 rounded-xl bg-black text-white border-transparent hover:bg-black/90 btn-ripple font-bold uppercase tracking-widest text-[10px] px-8"
                onClick={() => setOpen(false)}
              >
                <Link to="/products">Browse services</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 p-4 rounded-2xl bg-black/5 border border-black/5 shadow-sm group/item">
                  <div className="h-16 w-16 rounded-xl overflow-hidden shadow-md shrink-0 border border-white">
                    <img
                      src={it.image}
                      alt={it.title}
                      className="h-full w-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-sm text-black tracking-tight truncate">{it.title}</p>
                      <p className="font-bold text-black shrink-0 text-sm">
                        ${(it.price * it.qty).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-white/50 rounded-lg px-2 py-1 border border-black/5">
                        <button
                          onClick={() => update(it.id, it.qty - 1)}
                          className="h-5 w-5 flex items-center justify-center text-black/40 hover:text-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-[11px] font-black w-4 text-center text-black">{it.qty}</span>
                        <button
                          onClick={() => update(it.id, it.qty + 1)}
                          className="h-5 w-5 flex items-center justify-center text-black/40 hover:text-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => remove(it.id)}
                        className="text-[10px] font-black text-black/20 hover:text-red-500 uppercase tracking-widest transition-colors flex items-center gap-1.5"
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
          <div className="border-t border-black/5 px-6 py-6 space-y-5 bg-white/50">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">Total Amount</span>
              <span className="text-3xl font-black text-black tracking-tighter">
                ${total.toLocaleString()}
              </span>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full h-14 bg-black text-white rounded-xl md:rounded-2xl btn-ripple shadow-2xl font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 active:scale-[0.98] transition-all"
              onClick={() => setOpen(false)}
            >
              <Link to="/checkout" className="flex items-center justify-center gap-2">
                Authorize Settlement <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-center text-[10px] font-black text-black/20 uppercase tracking-widest flex items-center justify-center gap-2">
               <div className="h-1.5 w-1.5 rounded-full bg-green-500" /> Secure Protocol Active
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
