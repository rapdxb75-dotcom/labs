import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — DNA Labs" }] }),
  component: CheckoutLayout,
});

function CheckoutStepper({ step }: { step: "details" | "payment" | "done" }) {
  const steps = [
    { id: "details", label: "Your Cart" },
    { id: "payment", label: "Payment" },
    { id: "done", label: "Done" }
  ];
  
  const currentIndex = steps.findIndex(s => s.id === step);

  return (
    <div className="flex items-center justify-center mb-8 lg:mb-12">
      {steps.map((s, i) => (
        <div key={s.id} className="flex items-center">
          <div className={`flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 text-[10px] sm:text-xs font-bold transition-colors ${
            i <= currentIndex ? "bg-primary border-primary text-primary-foreground" : "border-muted text-muted-foreground bg-background"
          }`}>
            {i < currentIndex ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
          </div>
          <span className={`ml-2 sm:ml-2.5 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest hidden sm:inline-block transition-colors ${i <= currentIndex ? "text-foreground" : "text-muted-foreground"}`}>
            {s.label}
          </span>
          {i < steps.length - 1 && (
            <div className={`w-8 sm:w-12 md:w-16 h-0.5 mx-2 sm:mx-3 transition-colors ${i < currentIndex ? "bg-primary" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function CheckoutLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  
  let step: "details" | "payment" | "done" = "details";
  if (pathname.endsWith("/payment")) step = "payment";
  if (pathname.endsWith("/done")) step = "done";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="w-full overflow-x-hidden min-h-[calc(100vh-80px)] bg-transparent">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12 font-sans transition-all duration-500 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <CheckoutStepper step={step} />
        <Outlet />
      </div>
    </div>
  );
}
