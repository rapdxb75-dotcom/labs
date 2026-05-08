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
      scrolled ? "py-3 glass shadow-2xl mx-4 mt-3 rounded-xl border-white/60" : "py-6 bg-transparent"
    )}>
      <nav className="mx-auto flex max-w-full items-center justify-between px-10">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <Beaker className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-[18px] font-black tracking-tighter text-black">Labs.</p>
        </Link>

        <div className="flex items-center gap-6">
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

          <div className="flex items-center gap-1.5 border-l border-black/10 pl-6 ml-1">
            <Link
              to="/account"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg text-black hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-xl"
              aria-label="Account"
            >
              <User className="h-4.5 w-4.5" strokeWidth={2.5} />
            </Link>
            <div className="relative inline-flex">
              <button
                onClick={() => setOpen(true)}
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-black hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-xl btn-ripple"
                aria-label="Cart"
              >
                <ShoppingBag className="h-4.5 w-4.5" strokeWidth={2.5} />
              </button>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 h-4.5 min-w-4.5 px-1 rounded-full bg-black text-white text-[9px] font-black flex items-center justify-center pointer-events-none shadow-lg border-2 border-white">
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
        <div className="md:hidden border-t border-black/10 px-5 py-5 space-y-1.5 glass m-3 rounded-xl shadow-2xl">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setMobile(false)}
              className="block px-4 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-black/60 hover:bg-black hover:text-white transition-all"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
