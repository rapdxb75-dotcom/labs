import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My account — DNA Labs" }] }),
  component: Account,
});

function Account() {
  const [editing, setEditing] = useState(false);
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Entrepreneur passionate about turning ideas into reality.",
  });
  const [draft, setDraft] = useState(info);

  const projects = [
    { id: 1, name: "EcoTech Solutions", service: "Validate + See", status: "Completed", date: "March 2024", color: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20" },
    { id: 2, name: "FoodieApp", service: "Feel", status: "In Progress", date: "April 2024", color: "bg-sky-500/10 text-sky-700 border-sky-500/20" },
    { id: 3, name: "HealthTracker Pro", service: "Plan", status: "Pending", date: "April 2024", color: "bg-amber-500/10 text-amber-700 border-amber-500/20" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:py-16 mt-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside className="reveal glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 md:h-24 md:w-24 rounded-2xl md:rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-center text-black shadow-xl transform hover:scale-105 transition-transform duration-300">
              <User className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            {editing ? (
              <Input
                className="mt-4 text-center text-lg md:text-xl font-semibold"
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              />
            ) : (
              <h2 className="mt-4 text-lg md:text-xl font-semibold">{info.name}</h2>
            )}
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 font-medium">Member since Jan 2024</p>
          </div>

          <div className="mt-8 space-y-3">
            <Field icon={Mail} value={editing ? draft.email : info.email} editing={editing}
              onChange={(v) => setDraft({ ...draft, email: v })} />
            <Field icon={Phone} value={editing ? draft.phone : info.phone} editing={editing}
              onChange={(v) => setDraft({ ...draft, phone: v })} />
            <Field icon={MapPin} value={editing ? draft.location : info.location} editing={editing}
              onChange={(v) => setDraft({ ...draft, location: v })} />
            <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground font-medium">
              <Calendar className="h-4 w-4" /> Joined January 2024
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-black/5">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-bold">Bio</p>
            {editing ? (
              <Textarea value={draft.bio} onChange={(e) => setDraft({ ...draft, bio: e.target.value })} className="text-sm" />
            ) : (
              <p className="text-sm text-black/60 font-medium leading-relaxed">{info.bio}</p>
            )}
          </div>

          <div className="mt-6">
            {editing ? (
              <div className="flex gap-2">
                <Button className="flex-1 btn-ripple" onClick={() => { setInfo(draft); setEditing(false); }}>
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent border-black/5 btn-ripple" onClick={() => { setDraft(info); setEditing(false); }}>
                  <X className="h-4 w-4 mr-1" /> Cancel
                </Button>
              </div>
            ) : (
              <Button variant="outline" className="w-full bg-white/20 backdrop-blur-md border-white/30 rounded-xl hover:bg-white/40 btn-ripple font-bold text-xs uppercase tracking-widest" onClick={() => setEditing(true)}>
                <Edit className="h-3.5 w-3.5 mr-2" /> Edit profile
              </Button>
            )}
          </div>
        </aside>

        <section className="lg:col-span-2 space-y-6">
          <div className="reveal glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold mb-5 tracking-tight">My projects</h3>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.id} className="bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:bg-white/60 shadow-sm">
                  <div>
                    <p className="font-bold text-black">{p.name}</p>
                    <p className="text-[10px] md:text-xs text-black/40 font-bold uppercase tracking-widest mt-0.5">Service: {p.service} · {p.date}</p>
                  </div>
                  <span className={`w-fit text-[9px] md:text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider border ${p.color} shadow-sm backdrop-blur-sm`}>{p.status}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full sm:w-auto mt-8 rounded-xl md:rounded-2xl bg-black text-white font-bold py-6 px-8 hover:opacity-90 transition-all shadow-xl hover:shadow-2xl btn-ripple uppercase tracking-widest text-[10px] md:text-xs">
              Start new project
            </Button>
          </div>

          <div className="reveal glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold mb-5 tracking-tight">Account settings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Notifications", "Manage email and push"],
                ["Privacy", "Control your data"],
                ["Billing", "Payment methods & history"],
                ["Security", "Password & 2FA"],
              ].map(([t, d]) => (
                <button key={t} className="text-left bg-white/40 backdrop-blur-md border border-white/40 rounded-xl md:rounded-2xl p-4 hover:bg-white/60 transition-all hover-lift shadow-sm">
                  <p className="font-bold text-black text-sm">{t}</p>
                  <p className="text-[10px] md:text-xs text-black/40 mt-0.5 font-bold uppercase tracking-widest">{d}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({ icon: Icon, value, editing, onChange }: { icon: any; value: string; editing: boolean; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
      {editing ? (
        <Input value={value} onChange={(e) => onChange(e.target.value)} className="text-sm h-9" />
      ) : (
        <span className="text-sm">{value}</span>
      )}
    </div>
  );
}
