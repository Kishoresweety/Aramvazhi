"use client";
import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import Icon from "@/components/Icon";
import SectionBadge from "@/components/SectionBadge";

const SOCIAL = [
  { name:"linkedin",  label:"LinkedIn",   sub:"Follow our professional updates",    color:"#0A66C2", bg:"#E8F0FE", href:"#" },
  { name:"instagram", label:"Instagram",  sub:"Stories, reels & awareness content", color:"#E1306C", bg:"#FCE4EC", href:"#" },
  { name:"youtube",   label:"YouTube",    sub:"Educational videos & webinars",       color:"#FF0000", bg:"#FFEBEE", href:"#" },
  { name:"twitter",   label:"X (Twitter)",sub:"Latest news & discussions",          color:"#1DA1F2", bg:"#E3F2FD", href:"#" },
];

interface F { name:string; email:string; message:string; }

export default function ContactPage() {
  const ref  = useReveal<HTMLElement>();
  const [form, setForm] = useState<F>({ name:"", email:"", message:"" });
  const [done, setDone] = useState(false);
  const set = (k: keyof F) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0B2463,#083E6E 60%,#0A5E7A)", padding:"160px 24px 96px", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.3 }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <SectionBadge icon="mail" light>Get in Touch</SectionBadge>
          <h1 className="animate-fade-up" style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:"#fff", marginBottom:20, letterSpacing:"-1px" }}>Contact Us</h1>
          <p className="animate-fade-up delay-100" style={{ fontSize:18, color:"rgba(255,255,255,0.78)", maxWidth:540, margin:"0 auto", lineHeight:1.7 }}>
            Have a question, idea, or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>
        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C720,60 1440,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* Form + Social */}
      <section ref={ref} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(380px,1fr))", gap:64 }}>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:28, color:"var(--navy)", marginBottom:8 }}>Send a Message</h2>
            <p style={{ color:"#475569", fontSize:15, marginBottom:32, lineHeight:1.65 }}>Our team will get back to you within 2–3 business days.</p>

            {done ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{ width:64, height:64, borderRadius:"50%", background:"var(--mint)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
                  <Icon name="check" size={28} color="#059669" />
                </div>
                <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:20, color:"var(--navy)", marginBottom:8 }}>Message Sent!</h3>
                <p style={{ color:"#475569", fontSize:14 }}>We&apos;ll be in touch within 2–3 business days.</p>
              </div>
            ) : (
              <div style={{ display:"grid", gap:20 }}>
                <div>
                  <label className="form-label">Name *</label>
                  <input className="form-input" placeholder="Your name" value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} />
                </div>
                <div>
                  <label className="form-label">Message *</label>
                  <textarea className="form-input" rows={5} placeholder="Your message..." value={form.message} onChange={set("message")} style={{ resize:"vertical" }} />
                </div>
                <button className="btn-primary" onClick={() => setDone(true)} style={{ justifyContent:"center", fontSize:15 }}>
                  Send Message <Icon name="send" size={15} color="#fff" />
                </button>
              </div>
            )}
          </div>

          {/* Social */}
          <div>
            <h2 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:28, color:"var(--navy)", marginBottom:8 }}>Connect With Us</h2>
            <p style={{ color:"#475569", fontSize:15, marginBottom:32, lineHeight:1.65 }}>Follow our work and stay updated on the latest in digital welfare.</p>
            <div style={{ display:"grid", gap:16, marginBottom:40 }}>
              {SOCIAL.map(s => (
                <a key={s.name} href={s.href}
                  style={{ display:"flex", alignItems:"center", gap:16, padding:"16px 20px", background:s.bg, borderRadius:14, textDecoration:"none", transition:"transform .2s ease,box-shadow .2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow="0 8px 24px rgba(0,0,0,.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow="none"; }}
                >
                  <div style={{ width:42, height:42, borderRadius:12, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon name={s.name} size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:15, color:"var(--navy)" }}>{s.label}</div>
                    <div style={{ fontSize:12, color:"#475569" }}>{s.sub}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ background:"var(--sky)", borderRadius:16, padding:24, border:"1px solid #E2E8F0" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                <Icon name="zap" size={18} color="var(--teal)" />
                <span style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:15, color:"var(--navy)" }}>Community First</span>
              </div>
              <p style={{ fontSize:13, color:"#475569", lineHeight:1.65 }}>We respond to every message. Your ideas and feedback help us build a better digital welfare community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
