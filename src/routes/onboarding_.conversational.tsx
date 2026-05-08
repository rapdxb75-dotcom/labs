import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/onboarding_/conversational")({
  component: ConversationalFlow,
});

const questions = [
  { id: "name", text: "What's your name?", type: "text", placeholder: "Type your answer here..." },
  { id: "email", text: "What's your email address?", type: "email", placeholder: "name@example.com" },
  { id: "source", text: "How did you hear about Labs?", type: "select", options: ["Labs website", "Social media", "Friend referral", "Search engine", "Other"], placeholder: "Select an option..." },
  { id: "story", text: "You know what? Forget structure for a second. Just tell me about this idea. What got you excited about it? What's the story behind it?", type: "textarea", placeholder: "Type as much as you want..." },
  { id: "stage", text: "What stage is your idea? This shapes our planning approach", type: "select", options: ["Just an idea", "Researching", "Prototyping", "Ready to launch"], placeholder: "Select an option..." },
  { id: "goal", text: "What's your main goal? Different goals need different plans", type: "select", options: ["Make a living", "Build a side hustle", "Change the world", "Sell the company"], placeholder: "Select an option..." },
  { id: "budget", text: "What's your budget reality? Honest assessment helps us plan realistically", type: "select", options: ["Bootstrapping ($0)", "Under $1k", "$1k - $5k", "$5k+"], placeholder: "Select an option..." },
  { id: "revenue", text: "How will this make money? Your revenue model", type: "select", options: ["Subscriptions", "One-time purchases", "Ads/Sponsorships", "Not sure yet"], placeholder: "Select an option..." },
  { id: "pricing", text: "What would you charge? Pricing strategy", type: "select", options: ["Premium/High ticket", "Mid-market", "Cheap/Volume", "Freemium"], placeholder: "Select an option..." },
  { id: "timeline", text: "When do you want to launch? Your timeline affects everything", type: "select", options: ["ASAP", "Next 3 months", "Next 6 months", "No rush"], placeholder: "Select an option..." },
  { id: "skills", text: "What skills do you have? Helps identify what support you'll need", type: "textarea", placeholder: "e.g. Marketing, Coding, Design..." },
  { id: "worries", text: "What worries you most? We'll address your biggest concerns", type: "select", options: ["Finding customers", "Building the product", "Funding", "Competitors"], placeholder: "Select an option..." },
  { id: "needs", text: "What would make this plan perfect for you? Your specific needs for the business plan", type: "select", options: ["Financial projections", "Marketing strategy", "Technical roadmap", "All of the above"], placeholder: "Select an option..." },
  { id: "metrics", text: "How will you measure success? What metrics matter to you", type: "select", options: ["Revenue", "User growth", "Profit margin", "Impact"], placeholder: "Select an option..." },
  { id: "context", text: "Anything else we should know? Additional context, specific requests, or questions", type: "textarea", placeholder: "Any final thoughts?" },
];

function ConversationalFlow() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  useEffect(() => {
    setInputValue(answers[currentQuestion.id] || "");
  }, [currentIndex, currentQuestion.id, answers]);

  const handleNext = () => {
    if (!inputValue.trim() && currentQuestion.type !== 'select') return;

    setAnswers(prev => ({ ...prev, [currentQuestion.id]: inputValue }));

    if (currentIndex < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      // Submit logic here
      navigate({ to: "/submission-complete" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col px-6 md:px-10 py-6 text-black font-sans selection:bg-primary/30 relative overflow-hidden">
      {/* Top Bar with Progress */}
      <div className="mt-14">
        <header className="w-full flex items-center justify-between py-4 md:py-6 relative z-10">
          <button
            onClick={() => navigate({ to: "/onboarding" })}
            className="text-black/40 hover:text-black font-bold transition flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" /> Back
          </button>
          <div className="text-[10px] md:text-sm font-black tracking-widest text-black/40 uppercase">
            {currentIndex + 1} / {questions.length}
          </div>
        </header>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-black/5 relative z-10 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-8 md:py-12 relative z-10 overflow-hidden mb-12">

        <div
          className={`w-full max-w-5xl flex flex-col transition-all duration-300 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl relative ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          {/* Question Counter Label */}
          <span className="text-black/40 font-bold tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 uppercase">
            Step {currentIndex + 1}
          </span>

          {/* Question Text */}
          <h1 className="text-2xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight text-black drop-shadow-sm tracking-tight">
            {currentQuestion.text}
          </h1>

          {/* Input Area */}
          <div className="w-full relative">
            {currentQuestion.type === "text" || currentQuestion.type === "email" ? (
              <input
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full bg-black/5 border border-black/5 rounded-xl md:rounded-3xl text-lg md:text-3xl p-6 md:p-8 focus:outline-none focus:border-black/10 transition-all placeholder:text-black/20 text-black shadow-xl font-medium"
              />
            ) : currentQuestion.type === "textarea" ? (
              <textarea
                placeholder={currentQuestion.placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                rows={4}
                className="w-full bg-black/5 border border-black/5 rounded-xl md:rounded-3xl text-base md:text-xl p-6 md:p-8 focus:outline-none focus:border-black/10 transition-all placeholder:text-black/20 text-black resize-none shadow-xl font-medium min-h-[150px] md:min-h-[200px]"
              />
            ) : currentQuestion.type === "select" ? (
              <div className="w-full relative group">
                <Select
                  value={inputValue}
                  onValueChange={(value) => setInputValue(value)}
                >
                  <SelectTrigger className="w-full h-16 md:h-24 bg-black/5 border-black/5 text-lg md:text-2xl px-6 md:px-8 rounded-xl md:rounded-2xl">
                    <SelectValue placeholder={currentQuestion.placeholder || "Select an option..."} />
                  </SelectTrigger>
                  <SelectContent className="bg-white/90 backdrop-blur-xl border-white/60">
                    {currentQuestion.options?.map((option) => (
                      <SelectItem key={option} value={option} className="text-sm md:text-base py-3">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ) : null}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-12 md:mt-16">
            <button
              onClick={handleNext}
              disabled={!inputValue.trim() && currentQuestion.type !== 'select'}
              className="w-full sm:w-auto bg-black text-white font-bold px-10 py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-10 disabled:cursor-not-allowed shadow-xl tracking-widest uppercase text-[10px] md:text-xs"
            >
              {currentIndex === questions.length - 1 ? (
                <>Complete <Check className="w-4 h-4 md:w-5 md:h-5" /></>
              ) : (
                <>Continue <ArrowRight className="w-4 h-4 md:w-5 md:h-5" /></>
              )}
            </button>
          </div>

          {/* Back Button (Desktop top-right, Mobile footer-like) */}
          {currentIndex > 0 && (
            <div className="absolute top-6 md:top-10 right-6 md:right-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/5 text-black hover:bg-black/10 transition-all shadow-xl border border-black/5"
                title="Previous Question"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
