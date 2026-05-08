import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LifeBuoy } from "lucide-react";

const FAQS = [
  ["What exactly do you deliver with each service?", "Each service includes comprehensive deliverables: Validate provides market research and validation analysis. See delivers complete brand packages with logos, guidelines and visual assets. Feel creates interactive prototypes and UX designs. Plan includes detailed business plans with financial projections and go-to-market strategies."],
  ["How long does each service take?", "Most services are completed within 3–5 business days. Validate typically takes 2–3 days, See takes 3–4 days, Feel takes 4–5 days, and Plan takes 3–5 days depending on complexity."],
  ["Can I purchase multiple services together?", "Absolutely — we recommend it. Validate gives the foundation, See brings it to life visually, Feel lets you test the experience, and Plan maps your path to success. Package discounts available."],
  ["What if I'm not satisfied with the results?", "We stand behind our work with a satisfaction guarantee. If you're not happy with the initial delivery, we'll work with you through up to two rounds of revisions at no additional cost."],
  ["Do you work with any industry or business type?", "Yes — from tech startups to local service businesses, e-commerce to non-profits. Our process adapts to any industry or business model."],
  ["What information do I need to provide to get started?", "Just your idea and enthusiasm. Our intake process extracts everything we need through guided questions, voice recordings or document uploads."],
  ["Can you help with funding or investor presentations?", "Yes. Our Plan service includes investor-ready pitch decks and business plans. We've helped clients raise over $50M and can connect you with our network of investors."],
  ["Do you provide ongoing support after delivery?", "Each service includes 30 days of email support. Ongoing consulting and implementation support is available."],
  ["How do you ensure confidentiality?", "All team members sign NDAs, and we provide additional confidentiality agreements on request. Your ideas are completely secure with us."],
  ["What makes you different from other consulting services?", "We combine human expertise with AI-powered insights, offer fixed pricing with fast turnaround, and focus specifically on the early stages of idea development."],
] as const;

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — DNA Labs" },
      { name: "description", content: "Answers to the most common questions about DNA Labs services." },
    ],
  }),
  component: FAQs,
});

function FAQs() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="reveal text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Help center</p>
        <h1 className="text-5xl font-semibold tracking-tight">Got questions?</h1>
        <p className="mt-4 text-muted-foreground">The most common things founders ask us.</p>
      </div>

      <Accordion type="single" collapsible className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] divide-y divide-white/10 overflow-hidden shadow-2xl">
        {FAQS.map(([q, a], i) => (
          <AccordionItem key={i} value={`i${i}`} className="border-0 px-8 reveal" style={{ transitionDelay: `${i * 30}ms` }}>
            <AccordionTrigger className="text-left font-bold hover:no-underline py-6 text-black/80 hover:text-black transition-colors text-lg tracking-tight">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-black/60 leading-relaxed pb-8 font-medium">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="reveal mt-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 text-center shadow-2xl">
        <div className="h-14 w-14 mx-auto rounded-2xl bg-black/5 text-black grid place-items-center mb-6 shadow-xl">
          <LifeBuoy className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold text-black tracking-tight">Still have questions?</h2>
        <p className="mt-3 text-black/60 font-medium">We reply within 24 hours.</p>
        <Button size="lg" className="mt-10 rounded-2xl px-10 py-7 bg-black text-white hover:opacity-90 transition-all font-bold tracking-widest uppercase text-xs shadow-xl">Contact us</Button>
      </div>
    </div>
  );
}
