import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft, Mic, Sparkles, RotateCcw } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/onboarding_/talk-it-out")({
  component: TalkItOut,
});

function TalkItOut() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col px-6 md:px-10 py-6 font-sans overflow-auto relative text-black">
      {/* Header */}
      <header className="w-full flex items-center mb-8 md:mb-12 relative z-10 mt-20">
        <button
          onClick={() => navigate({ to: "/onboarding" })}
          className="text-black/40 hover:text-black font-bold transition flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" /> Back
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center max-w-6xl mx-auto w-full gap-6 md:gap-8 relative z-10 mb-12">
        <div className="text-center space-y-3 md:space-y-4 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-6xl font-bold text-black drop-shadow-sm tracking-tight leading-tight">
            Tell us about your idea
          </h2>
          <p className="text-black/60 text-base md:text-xl font-medium max-w-2xl mx-auto px-4">
            Speak naturally - we'll convert it to text and help you structure your thoughts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl items-stretch">
          {/* Voice Recording Card */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-12 flex flex-col items-center justify-center text-center shadow-xl relative group">
            <h3 className="absolute top-8 md:top-10 left-0 right-0 text-black/40 text-[10px] md:text-sm font-bold uppercase tracking-widest">Voice Recording</h3>

            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`h-24 w-24 md:h-32 md:w-32 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${isRecording ? 'bg-red-500 animate-pulse scale-110 shadow-red-500/20' : 'bg-black hover:scale-105'
                }`}
            >
              <Mic className="h-10 w-10 md:h-12 md:w-12 text-white" />
            </button>

            <div className="mt-8 md:mt-10">
              <p className="text-black text-lg md:text-xl font-bold mb-1 md:mb-2">
                {isRecording ? "Recording..." : "Ready to Record"}
              </p>
              <p className="text-black/40 text-xs md:text-sm font-bold uppercase tracking-widest">
                {isRecording ? "Click to stop" : "Click to start"}
              </p>
            </div>
          </div>

          {/* Transcript Card */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col shadow-xl relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-black/40 text-[10px] md:text-sm font-bold uppercase tracking-widest">Transcript</h3>
              <div className="flex gap-2">
                <button className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center text-black/40 hover:text-black hover:bg-black/10 transition-all">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={() => setTranscript("")}
                  className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center text-black/40 hover:text-black hover:bg-black/10 transition-all"
                >
                  <RotateCcw className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>

            <div className="flex-grow relative">
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Your speech will appear here as text. You can also type directly..."
                className="w-full h-full min-h-[250px] md:min-h-[300px] bg-black/5 border border-black/5 rounded-xl md:rounded-2xl p-5 md:p-6 text-sm md:text-base text-black placeholder:text-black/20 focus:outline-none focus:ring-1 focus:ring-black/5 transition-all resize-none font-medium leading-relaxed"
              />
            </div>

            <Link
              to="/submission-complete"
              className={`mt-6 w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold transition-all flex items-center justify-center shadow-xl text-[10px] md:text-xs uppercase tracking-widest ${transcript.trim()
                ? 'bg-black text-white hover:opacity-90'
                : 'bg-black/10 text-black/30 cursor-not-allowed pointer-events-none'
                }`}
            >
              Complete & Continue
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
