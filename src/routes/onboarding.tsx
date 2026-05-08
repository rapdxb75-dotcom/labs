import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Mic, Upload, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

function OnboardingPage() {
  return (
    <div className="min-h-screen w-full relative flex flex-col px-6 md:px-10 py-6 font-sans overflow-y-auto">

      {/* Header Navigation */}
      <header className="w-full flex items-center mb-8 md:mb-12 relative z-10 mt-20">
        <Link to="/checkout/done" className="text-black/40 hover:text-black font-bold transition flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest">
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" /> Back
        </Link>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center flex-grow animate-in fade-in zoom-in-95 duration-700 mt-8 md:mt-12 mb-12">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-center text-black drop-shadow-sm max-w-3xl tracking-tight leading-tight">
          How would you like to share your idea?
        </h1>
        <p className="text-black/60 text-base md:text-xl text-center mb-10 md:mb-16 max-w-2xl font-medium px-4">
          Choose the method that feels most natural to you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Card 1: Conversational */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/60 hover:scale-[1.02] hover:shadow-2xl group shadow-xl">
            <div className="h-16 w-16 md:h-20 md:w-20 bg-black/5 rounded-[1.25rem] md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-black" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black tracking-tight">Conversational</h2>
            <p className="text-black/40 text-xs md:text-sm mb-8 md:mb-10 flex-grow leading-relaxed font-medium px-4">
              Answer guided questions in a typeform-style interface
            </p>
            <Link to="/onboarding/conversational" className="w-full bg-black text-white font-bold rounded-xl md:rounded-2xl py-4 md:py-5 transition-all hover:opacity-90 shadow-xl cursor-pointer flex items-center justify-center tracking-widest uppercase text-[10px] md:text-xs">
              Get Started
            </Link>
          </div>

          {/* Card 2: Talk it Out */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/60 hover:scale-[1.02] hover:shadow-2xl group shadow-xl">
            <div className="h-16 w-16 md:h-20 md:w-20 bg-black/5 rounded-[1.25rem] md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Mic className="h-8 w-8 md:h-10 md:w-10 text-black" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black tracking-tight">Talk it Out</h2>
            <p className="text-black/40 text-xs md:text-sm mb-8 md:mb-10 flex-grow leading-relaxed font-medium px-4">
              Voice-to-text with AI enhancement to structure your thoughts
            </p>
            <Link to="/onboarding/talk-it-out" className="w-full bg-black text-white font-bold rounded-xl md:rounded-2xl py-4 md:py-5 transition-all hover:opacity-90 shadow-xl cursor-pointer flex items-center justify-center tracking-widest uppercase text-[10px] md:text-xs">
              Get Started
            </Link>
          </div>

          {/* Card 3: Upload & Share */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/60 hover:scale-[1.02] hover:shadow-2xl group shadow-xl">
            <div className="h-16 w-16 md:h-20 md:w-20 bg-black/5 rounded-[1.25rem] md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Upload className="h-8 w-8 md:h-10 md:w-10 text-black" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black tracking-tight">Upload & Share</h2>
            <p className="text-black/40 text-xs md:text-sm mb-8 md:mb-10 flex-grow leading-relaxed font-medium px-4">
              Upload files, add links, or use our notepad with AI assistance
            </p>
            <Link to="/onboarding/upload-share" className="w-full bg-black text-white font-bold rounded-xl md:rounded-2xl py-4 md:py-5 transition-all hover:opacity-90 shadow-xl cursor-pointer flex items-center justify-center tracking-widest uppercase text-[10px] md:text-xs">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
