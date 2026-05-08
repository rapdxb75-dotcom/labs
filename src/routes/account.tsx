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
    { id: 1, name: "EcoTech Solutions", service: "Validate + See", status: "Completed", date: "March 2024", color: "bg-emerald-50 text-emerald-700" },
    { id: 2, name: "FoodieApp", service: "Feel", status: "In Progress", date: "April 2024", color: "bg-sky-50 text-sky-700" },
    { id: 3, name: "HealthTracker Pro", service: "Plan", status: "Pending", date: "April 2024", color: "bg-amber-50 text-amber-700" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid lg:grid-cols-3 gap-6">
        <aside className="reveal bg-card border border-border rounded-2xl p-8">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.78_0.12_200)] grid place-items-center text-primary-foreground">
              <User className="h-9 w-9" />
            </div>
            {editing ? (
              <Input
                className="mt-4 text-center text-xl font-semibold"
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              />
            ) : (
              <h2 className="mt-4 text-xl font-semibold">{info.name}</h2>
            )}
            <p className="text-xs text-muted-foreground mt-1">Member since Jan 2024</p>
          </div>

          <div className="mt-8 space-y-3">
            <Field icon={Mail} value={editing ? draft.email : info.email} editing={editing}
              onChange={(v) => setDraft({ ...draft, email: v })} />
            <Field icon={Phone} value={editing ? draft.phone : info.phone} editing={editing}
              onChange={(v) => setDraft({ ...draft, phone: v })} />
            <Field icon={MapPin} value={editing ? draft.location : info.location} editing={editing}
              onChange={(v) => setDraft({ ...draft, location: v })} />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> Joined January 2024
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Bio</p>
            {editing ? (
              <Textarea value={draft.bio} onChange={(e) => setDraft({ ...draft, bio: e.target.value })} />
            ) : (
              <p className="text-sm text-muted-foreground">{info.bio}</p>
            )}
          </div>

          <div className="mt-6">
            {editing ? (
              <div className="flex gap-2">
                <Button className="flex-1 btn-ripple" onClick={() => { setInfo(draft); setEditing(false); }}>
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent border-border btn-ripple" onClick={() => { setDraft(info); setEditing(false); }}>
                  <X className="h-4 w-4 mr-1" /> Cancel
                </Button>
              </div>
            ) : (
              <Button variant="outline" className="w-full bg-transparent border-border btn-ripple" onClick={() => setEditing(true)}>
                <Edit className="h-4 w-4 mr-1" /> Edit profile
              </Button>
            )}
          </div>
        </aside>

        <section className="lg:col-span-2 space-y-6">
          <div className="reveal bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-5">My projects</h3>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.id} className="surface border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Service: {p.service} · {p.date}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-md font-semibold ${p.color}`}>{p.status}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 rounded-lg btn-ripple">Start new project</Button>
          </div>

          <div className="reveal bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-5">Account settings</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Notifications", "Manage email and push"],
                ["Privacy", "Control your data"],
                ["Billing", "Payment methods & history"],
                ["Security", "Password & 2FA"],
              ].map(([t, d]) => (
                <button key={t} className="text-left surface border border-border rounded-xl p-4 hover:border-primary/40 hover-lift transition">
                  <p className="font-semibold text-sm">{t}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{d}</p>
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
