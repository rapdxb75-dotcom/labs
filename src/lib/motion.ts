import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Adds .in class to elements with .reveal when they enter viewport.
 * Re-runs on every route change. Also has a safety fallback. */
export function useReveal() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isIdle = useRouterState({ select: (s) => s.status === 'idle' });

  useEffect(() => {
    if (typeof window === "undefined" || !isIdle) return;
    document.documentElement.classList.add("js-ready");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" },
    );
    els.forEach((el) => {
      // If already in viewport at mount, mark immediately
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    // Safety fallback — show everything after 1.5s no matter what
    const t = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [path, isIdle]);
}

/** Attach ripple on click to any element matching .btn-ripple inside container */
export function useRipple() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".btn-ripple");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--rx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--ry", `${e.clientY - rect.top}px`);
      target.classList.remove("is-rippling");
      void target.offsetWidth;
      target.classList.add("is-rippling");
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}
