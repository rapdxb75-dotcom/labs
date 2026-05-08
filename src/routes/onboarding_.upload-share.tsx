import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Upload, Link as LinkIcon, FileText, Plus, Grid, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/onboarding_/upload-share")({
  component: UploadSharePage,
});

function UploadSharePage() {
  const navigate = useNavigate();
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");

  const handleAddLink = () => {
    if (linkInput.trim()) {
      setLinks([...links, linkInput.trim()]);
      setLinkInput("");
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col px-6 md:px-10 py-6 font-sans overflow-x-hidden selection:bg-primary/30">
      {/* Header Navigation */}
      <header className="w-full flex items-center mb-8 md:mb-12 relative z-10 mt-20">
        <button
          onClick={() => navigate({ to: "/onboarding" })}
          className="text-black/40 hover:text-black font-bold transition flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" /> Back
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center flex-grow animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-black tracking-tight drop-shadow-sm leading-tight">
            Share your materials
          </h1>
          <p className="text-black/60 text-base md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Upload files, add links, or use our notepad to share your ideas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mb-12">
          {/* Card 1: Upload Files */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 flex flex-col md:h-[480px] shadow-xl transition-all duration-500 hover:bg-white/60 hover:scale-[1.02] group/card">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Upload className="h-5 w-5 md:h-6 md:w-6 text-black" />
              <h2 className="text-lg md:text-xl font-bold text-black tracking-tight">Upload Files</h2>
            </div>

            <div className="flex-grow border-2 border-dashed border-black/10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:border-black/20 hover:bg-black/5 transition-all duration-300 min-h-[250px] md:min-h-0">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-black/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Upload className="h-8 w-8 md:h-10 md:w-10 text-black" />
              </div>
              <p className="text-black font-bold mb-2 text-lg md:text-xl tracking-tight">Click to upload</p>
              <p className="text-black/40 text-sm md:text-base font-bold uppercase tracking-widest">Images, documents, audio</p>
            </div>
          </div>

          {/* Card 2: Add Links */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 flex flex-col md:h-[480px] shadow-xl transition-all duration-500 hover:bg-white/60 hover:scale-[1.02] group/card">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5 md:h-6 md:w-6 text-black" />
                <h2 className="text-lg md:text-xl font-bold text-black tracking-tight">Add Links</h2>
              </div>
              <button
                onClick={handleAddLink}
                className="bg-black text-white text-[9px] md:text-[10px] font-black px-4 md:px-5 py-2 rounded-full transition-all uppercase tracking-widest shadow-lg hover:opacity-90 active:scale-95"
              >
                Add
              </button>
            </div>

            <div className="space-y-6 flex-grow">
              <input
                type="text"
                placeholder="https://example.com"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                className="w-full bg-black/5 border border-black/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-black placeholder:text-black/20 focus:outline-none focus:border-black/10 focus:bg-black/10 transition-all text-sm md:text-lg font-medium"
              />

              <div className="space-y-3">
                <p className="text-black/30 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">Quick links to:</p>
                <ul className="space-y-3">
                  {['Inspiration websites', 'Competitor examples', 'Reference materials', 'Research articles'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-black/60 text-xs md:text-sm hover:text-black transition-colors cursor-pointer group/item font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover/item:bg-black transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Notes */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 flex flex-col md:h-[480px] shadow-xl transition-all duration-500 hover:bg-white/60 hover:scale-[1.02] group/card">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-black" />
                <h2 className="text-lg md:text-xl font-bold text-black tracking-tight">Notes</h2>
              </div>
              <div className="flex gap-2 md:gap-3">
                <button className="bg-[#00DDAA] text-white p-2 md:p-2.5 rounded-lg md:rounded-xl hover:scale-110 transition-transform shadow-lg shadow-[#00DDAA]/20">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button className="bg-black/5 text-black/40 p-2 md:p-2.5 rounded-lg md:rounded-xl hover:bg-black/10 transition-colors border border-black/5">
                  <Grid className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>

            <textarea
              placeholder="Add your thoughts, requirements, or context..."
              className="flex-grow w-full bg-black/5 border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 text-black placeholder:text-black/20 focus:outline-none focus:border-black/10 focus:bg-black/10 transition-all resize-none text-sm md:text-lg leading-relaxed font-medium min-h-[200px] md:min-h-0"
            />
          </div>
        </div>

        {/* Complete & Continue Button */}
        <button
          onClick={() => navigate({ to: "/submission-complete" })}
          className="bg-black text-white font-bold py-4 md:py-5 px-10 md:px-16 rounded-full transition-all duration-300 shadow-xl tracking-[0.2em] uppercase text-[10px] md:text-xs mb-12 hover:opacity-90 hover:scale-105 active:scale-95"
        >
          Complete & Continue
        </button>
      </div>
    </div>
  );
}
