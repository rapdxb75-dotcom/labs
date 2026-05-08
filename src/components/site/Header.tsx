import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingBag, User, Menu, X, Beaker } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Services" },
  { to: "/faqs", label: "FAQs" },
  { to: "/community", label: "Community" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out",
      scrolled ? "py-2 md:py-3 glass shadow-2xl mx-4 mt-3 rounded-xl md:rounded-2xl border-white/60" : "py-4 md:py-6 bg-transparent"
    )}>
      <nav className="mx-auto flex max-w-full items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center group">
          <p className="text-[28px] md:text-[36px] font-black tracking-tighter text-black">Labs.</p>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-0.5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-[10px] font-black transition-all uppercase tracking-[0.15em]",
                  path === n.to
                    ? "text-black bg-black/5"
                    : "text-black/40 hover:text-black hover:bg-black/5",
                )}
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:border-l md:border-black/10 md:pl-6 md:ml-1">
            <Link
              to="/account"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg text-black hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-xl"
              aria-label="Account"
            >
              <User className="h-4 w-4 md:h-4.5 md:w-4.5" strokeWidth={2.5} />
            </Link>
            <div className="relative inline-flex">
              <button
                onClick={() => setOpen(true)}
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-black hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-xl btn-ripple"
                aria-label="Cart"
              >
                <ShoppingBag className="h-4 w-4 md:h-4.5 md:w-4.5" strokeWidth={2.5} />
              </button>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 h-4 md:h-4.5 min-w-[1rem] md:min-w-4.5 px-1 rounded-full bg-black text-white text-[8px] md:text-[9px] font-black flex items-center justify-center pointer-events-none shadow-lg border-2 border-white">
                  {count}
                </span>
              )}
            </div>
            <button
              onClick={() => setMobile((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-black hover:bg-black hover:text-white transition-all"
              aria-label="Menu"
            >
              {mobile ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </nav>

      {mobile && (
        <div className="md:hidden border-t border-black/5 px-4 py-4 space-y-1 glass m-2 rounded-xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setMobile(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                path === n.to ? "bg-black text-white" : "text-black/40 hover:bg-black/5 hover:text-black"
              )}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/account"
            onClick={() => setMobile(false)}
            className={cn(
              "block px-4 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all",
              path === "/account" ? "bg-black text-white" : "text-black/40 hover:bg-black/5 hover:text-black"
            )}
          >
            Account
          </Link>
        </div>
      )}
    </header>
  );
}
