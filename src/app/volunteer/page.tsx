"use client";
import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import Icon from "@/components/Icon";
import SectionBadge from "@/components/SectionBadge";

const TEAMS = [
  { icon:"target", title:"Research Team",    desc:"Conduct evidence-based research on digital welfare, technology ethics, and online safety.", bg:"#FFF7ED", ic:"#EA580C" },
  { icon:"pen",    title:"Design Team",      desc:"Create compelling visuals, UI/UX, and brand assets that amplify our campaigns and message.", bg:"#EEF2FF", ic:"#4F46E5" },
  { icon:"brain",  title:"AI Team",          desc:"Develop educational content and resources focused on responsible and ethical AI.",           bg:"#F0FDFA", ic:"#0A9E96" },
  { icon:"shield", title:"Cyber Safety Team",desc:"Build and deliver cybersecurity awareness workshops, guides, and training materials.",       bg:"#ECFDF5", ic:"#059669" },
  { icon:"users",  title:"Community Team",   desc:"Grow and nurture our community through outreach, events, and meaningful partnerships.",     bg:"#F0F7FF", ic:"#0B2463" },
  { icon:"mic",    title:"Content Team",     desc:"Write articles, produce videos, and create engaging educational content for our platforms.", bg:"#FFF1F2", ic:"#E11D48" },
];

interface FormState { name:string; email:string; linkedin:string; team:string; skills:string; why:string; }

export default function VolunteerPage() {
  const teamsRef = useReveal<HTMLElement>();
  const formRef  = useReveal<HTMLElement>();
  const [form, setForm] = useState<FormState>({ name:"", email:"", linkedin:"", team:"", skills:"", why:"" });
  const [done, setDone] = useState(false);
  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#059669 0%,#0A7E82 50%,#0B2463 100%)", padding:"160px 24px 96px", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.3 }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <SectionBadge icon="heart" light>Get Involved</SectionBadge>
          <h1 className="animate-fade-up" style={{ fontSize:"clamp(32px,5vw,60px)", fontWeight:800, color:"#fff", marginBottom:20, letterSpacing:"-1px" }}>Become a Volunteer</h1>
          <p className="animate-fade-up delay-100" style={{ fontSize:18, color:"rgba(255,255,255,0.8)", maxWidth:600, margin:"0 auto 40px", lineHeight:1.7 }}>
            Your skills, passion, and time can help shape a safer and more ethical digital world.
          </p>
          <div className="animate-fade-up delay-200" style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            {["AI","Cybersecurity","Design","Research","Education","Content"].map(t => (
              <span key={t} style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.25)", borderRadius:50, padding:"6px 16px", color:"#fff", fontSize:13, fontFamily:"var(--font-sora)", fontWeight:600 }}>{t}</span>
            ))}
          </div>
        </div>
        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C720,60 1440,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* Teams */}
      <section ref={teamsRef} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <SectionBadge icon="users">Open Roles</SectionBadge>
            <h2 style={{ fontSize:"clamp(26px,4vw,38px)", fontWeight:800, color:"var(--navy)", letterSpacing:"-0.5px" }}>Volunteer Opportunities</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {TEAMS.map(t => (
              <div key={t.title} className="card" style={{ padding:28, display:"flex", flexDirection:"column" }}>
                <div style={{ width:50, height:50, borderRadius:13, background:t.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                  <Icon name={t.icon} size={22} color={t.ic} />
                </div>
                <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:17, color:"var(--navy)", marginBottom:8 }}>{t.title}</h3>
                <p style={{ fontSize:14, color:"#475569", lineHeight:1.65, flex:1 }}>{t.desc}</p>
                <div style={{ marginTop:20, display:"flex", alignItems:"center", gap:6, color:"var(--teal)", fontSize:13, fontFamily:"var(--font-sora)", fontWeight:600 }}>
                  <span>Apply Below</span><Icon name="arrow" size={13} color="var(--teal)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="reveal" style={{ padding:"0 24px 96px", background:"#F8FAFB" }}>
        <div style={{ maxWidth:680, margin:"0 auto", paddingTop:64 }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <SectionBadge icon="send">Apply Now</SectionBadge>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:800, color:"var(--navy)", letterSpacing:"-0.5px" }}>Volunteer Application</h2>
            <p style={{ color:"#475569", fontSize:15, marginTop:10 }}>We review every application personally and respond within 3–5 business days.</p>
          </div>

          {done ? (
            <div style={{ textAlign:"center", background:"#fff", borderRadius:20, padding:"56px 40px", border:"1px solid #E2E8F0" }}>
              <div style={{ width:72, height:72, borderRadius:"50%", background:"var(--mint)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
                <Icon name="check" size={32} color="#059669" />
              </div>
              <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:22, color:"var(--navy)", marginBottom:12 }}>Application Submitted!</h3>
              <p style={{ color:"#475569", lineHeight:1.7 }}>Thank you for your interest in volunteering with Aram Vazhi. We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <div style={{ background:"#fff", borderRadius:20, padding:40, border:"1px solid #E2E8F0", boxShadow:"0 4px 24px rgba(11,36,99,0.06)" }}>
              <div style={{ display:"grid", gap:20 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" placeholder="Your full name" value={form.name} onChange={set("name")} />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} />
                  </div>
                </div>
                <div>
                  <label className="form-label">LinkedIn Profile</label>
                  <input className="form-input" placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={set("linkedin")} />
                </div>
                <div>
                  <label className="form-label">Preferred Team</label>
                  <select className="form-input" value={form.team} onChange={set("team")}>
                    <option value="">Select a team...</option>
                    {TEAMS.map(t => <option key={t.title} value={t.title}>{t.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Skills &amp; Experience</label>
                  <input className="form-input" placeholder="e.g. Python, UI Design, Cybersecurity..." value={form.skills} onChange={set("skills")} />
                </div>
                <div>
                  <label className="form-label">Why do you want to join? *</label>
                  <textarea className="form-input" rows={4} placeholder="Tell us what motivates you to volunteer with Aram Vazhi..." value={form.why} onChange={set("why")} style={{ resize:"vertical" }} />
                </div>
                <button className="btn-primary" onClick={() => setDone(true)} style={{ width:"100%", justifyContent:"center", padding:"14px", fontSize:15 }}>
                  Submit Application <Icon name="send" size={16} color="#fff" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
