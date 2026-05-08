import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Mic, Upload, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

function OnboardingPage() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center p-6 font-sans overflow-y-auto">

      {/* Header Navigation */}
      <div className="w-full max-w-7xl mx-auto mb-12 lg:mb-0 lg:absolute lg:top-8 lg:left-8 z-20">
        <Link to="/checkout/done" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors cursor-pointer text-lg">
          <ArrowLeft className="h-5 w-5" /> Validate
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center flex-grow animate-in fade-in zoom-in-95 duration-700">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-foreground drop-shadow-sm max-w-3xl">
          How would you like to share your idea?
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-16 max-w-2xl font-medium">
          Choose the method that feels most natural to you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Card 1: Conversational */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl group">
            <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">Conversational</h2>
            <p className="text-black/60 text-sm mb-10 flex-grow leading-relaxed font-medium px-4">
              Answer guided questions in a typeform-style interface
            </p>
            <Link to="/onboarding/conversational" className="w-full bg-black text-white font-bold rounded-2xl py-5 transition-all hover:bg-black/90 shadow-xl cursor-pointer flex items-center justify-center tracking-widest uppercase text-sm">
              Get Started
            </Link>
          </div>

          {/* Card 2: Talk it Out */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl group">
            <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Mic className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">Talk it Out</h2>
            <p className="text-black/60 text-sm mb-10 flex-grow leading-relaxed font-medium px-4">
              Voice-to-text with AI enhancement to structure your thoughts
            </p>
            <Link to="/onboarding/talk-it-out" className="w-full bg-black text-white font-bold rounded-2xl py-5 transition-all hover:bg-black/90 shadow-xl cursor-pointer flex items-center justify-center tracking-widest uppercase text-sm">
              Get Started
            </Link>
          </div>

          {/* Card 3: Upload & Share */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl group">
            <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Upload className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">Upload & Share</h2>
            <p className="text-black/60 text-sm mb-10 flex-grow leading-relaxed font-medium px-4">
              Upload files, add links, or use our notepad with AI assistance
            </p>
            <button className="w-full bg-black text-white font-bold rounded-2xl py-5 transition-all hover:bg-black/90 shadow-xl cursor-pointer tracking-widest uppercase text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
