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
    <div className="min-h-screen w-full flex flex-col p-6 md:p-12 font-sans overflow-auto relative bg-white text-foreground">
      {/* Black/White/Gray Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.95_0_0),transparent_70%),radial-gradient(circle_at_bottom_left,oklch(0.2_0_0),transparent_70%),linear-gradient(to_bottom,white,oklch(0.9_0_0))]" />
      
      {/* Background Decor */}
      <div className="absolute inset-0 ring-grid pointer-events-none opacity-20" />

      {/* Header */}
      <header className="w-full flex items-center mb-12 relative z-10">
        <button
          onClick={() => navigate({ to: "/onboarding" })}
          className="text-muted-foreground hover:text-foreground font-medium transition flex items-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" /> Validate - Talk it Out
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center max-w-6xl mx-auto w-full gap-8 relative z-10">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-foreground font-medium drop-shadow-sm">
            Tell us about your idea
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Speak naturally - we'll convert it to text and help you structure your thoughts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl items-stretch">
          {/* Voice Recording Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center shadow-xl relative group">
            <h3 className="absolute top-10 left-0 right-0 text-black/40 text-sm font-bold uppercase tracking-widest">Voice Recording</h3>

            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`h-32 w-32 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${isRecording ? 'bg-destructive animate-pulse scale-110 shadow-destructive/20' : 'bg-black hover:scale-105'
                }`}
            >
              <Mic className="h-12 w-12 text-white" />
            </button>

            <div className="mt-10">
              <p className="text-black text-xl font-bold mb-2">
                {isRecording ? "Recording..." : "Ready to Record"}
              </p>
              <p className="text-black/60 text-sm font-medium">
                {isRecording ? "Click to stop recording" : "Click to start recording"}
              </p>
            </div>
          </div>

          {/* Transcript Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 flex flex-col shadow-xl relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-black/40 text-sm font-bold uppercase tracking-widest">Transcript</h3>
              <div className="flex gap-2">
                <button className="h-10 w-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/10 transition-all">
                  <Sparkles className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setTranscript("")}
                  className="h-10 w-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/10 transition-all"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-grow relative">
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Your speech will appear here as text. You can also type directly..."
                className="w-full h-full min-h-[300px] bg-black/5 border border-black/10 rounded-2xl p-6 text-black placeholder:text-black/20 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all resize-none font-medium leading-relaxed"
              />
            </div>

            <Link
              to="/checkout/done"
              className={`mt-6 w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center shadow-md ${transcript.trim()
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
