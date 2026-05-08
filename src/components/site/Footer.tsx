import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Beaker } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16">
      <div className="absolute inset-0 -z-10 glass border-t border-white/30" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-5 relative">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-black text-white shadow-xl transition-transform group-hover:scale-110">
              <Beaker className="h-5 w-5" />
            </span>
            <p className="font-black tracking-tighter text-2xl text-black">Labs.</p>
          </div>
          <p className="mt-6 text-base text-black/60 max-w-sm leading-relaxed font-medium">
            A biotech-grade studio that turns scientific ideas into validated, designed and
            investor-ready ventures. We combine precision engineering with premium aesthetics.
          </p>
          <div className="mt-8 flex gap-3">
            {[Linkedin, Twitter, Github].map((I, i) => (
              <a 
                key={i} 
                href="#" 
                className="grid h-10 w-10 place-items-center rounded-xl bg-black text-white hover:bg-white hover:text-black hover:shadow-2xl hover:scale-110 transition-all border border-black shadow-lg"
              >
                <I className="h-4.5 w-4.5" strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
          <FooterCol title="Services" links={[["Validate", "/products"], ["See", "/products"], ["Feel", "/products"], ["Plan", "/products"]]} />
          <FooterCol title="Company" links={[["About", "/about"], ["FAQs", "/faqs"], ["Community", "/community"]]} />
          <FooterCol title="Account" links={[["My account", "/account"], ["Checkout", "/checkout"]]} />
        </div>
      </div>

      <div className="border-t border-black/5 relative py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row gap-6 items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-black/30">
          <p>© {new Date().getFullYear()} DNA Labs. Engineering Extraordinary.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-black transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-black transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-black mb-8">{title}</p>
      <ul className="space-y-4 text-xs">
        {links.map(([label, to]) => (
          <li key={label + to}>
            <Link to={to} className="text-black/50 hover:text-black transition-all hover:translate-x-1.5 inline-block font-black uppercase tracking-widest text-[10px]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
