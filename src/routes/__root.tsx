import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Toaster } from "@/components/ui/sonner";
import { useReveal, useRipple } from "@/lib/motion";
import { cn } from "@/lib/utils";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Error · 404</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight">Sample not found</h1>
        <p className="mt-3 text-muted-foreground">That page isn't in our records.</p>
        <Link to="/" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
          Return home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DNA Labs — Where science meets your idea" },
      { name: "description", content: "A biotech-grade studio: validate, design, prototype and plan your next venture." },
      { property: "og:title", content: "DNA Labs — Where science meets your idea" },
      { property: "og:description", content: "Lab-grade services to take any idea from concept to launch." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useReveal();
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col relative">
        {/* Global 3-Color Professional Gradient Background */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.92_0.05_260),transparent_60%),radial-gradient(circle_at_80%_50%,oklch(0.92_0.05_190),transparent_60%),radial-gradient(circle_at_30%_80%,oklch(0.92_0.05_300),transparent_60%),linear-gradient(to_bottom,white,oklch(0.96_0.02_250))] -z-10" />
        
        {/* Liquid Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="liquid-blob absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40" />
          <div className="liquid-blob absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-200/30 [animation-delay:2s]" />
          <div className="liquid-blob absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-200/40 [animation-delay:4s]" />
          <div className="liquid-blob absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-indigo-200/30 [animation-delay:6s]" />
        </div>

        {/* Global Background Decor */}
        <div className="fixed inset-0 ring-grid pointer-events-none opacity-10 -z-10" />

        <Header />
        <main className="flex-1 relative">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <Toaster richColors />
      </div>
    </CartProvider>
  );
}
