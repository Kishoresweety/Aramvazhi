"use client";
import Link from "next/link";
import { useReveal } from "../../hooks/useReveal";
import Icon from "@/components/Icon";
import SectionBadge from "@/components/SectionBadge";

const PROJECTS = [
  { title:"Digital Literacy Campaign",   desc:"A nationwide campaign to equip citizens with foundational digital skills, internet safety awareness, and the ability to use online tools effectively.",               icon:"book",   bg:"#EEF2FF", ic:"#4F46E5" },
  { title:"Cyber Safety Awareness",      desc:"Workshops, webinars, and resource packs to help individuals recognize phishing attacks, protect personal data, and navigate the internet securely.",                icon:"shield", bg:"#F0FDFA", ic:"#0A9E96" },
  { title:"Responsible AI Education",    desc:"Educational programs exploring AI ethics, bias, accountability, and the societal implications of artificial intelligence for communities.",                         icon:"brain",  bg:"#ECFDF5", ic:"#059669" },
  { title:"Community Research Lab",      desc:"An open research initiative producing evidence-based reports on digital welfare, online safety, and the social impacts of emerging technologies.",                  icon:"target", bg:"#FFF7ED", ic:"#EA580C" },
  { title:"Youth Awareness Program",     desc:"Tailored curriculum and interactive sessions to build digital resilience, media literacy, and healthy online habits among young people.",                          icon:"users",  bg:"#F0F7FF", ic:"#0B2463" },
];

export default function ProjectsPage() {
  const gridRef = useReveal<HTMLElement>();
  const ctaRef  = useReveal<HTMLElement>();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0A7E82 0%,#083E6E 50%,#0B2463 100%)", padding:"160px 24px 96px", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.3 }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <SectionBadge icon="zap" light>Our Work</SectionBadge>
          <h1 className="animate-fade-up" style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:"#fff", marginBottom:20, letterSpacing:"-1px" }}>Projects &amp; Initiatives</h1>
          <p className="animate-fade-up delay-100" style={{ fontSize:18, color:"rgba(255,255,255,0.78)", maxWidth:600, margin:"0 auto", lineHeight:1.7 }}>
            Purposeful programs designed to create real, lasting impact in digital welfare and responsible technology use.
          </p>
        </div>
        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C720,60 1440,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:28 }}>
            {PROJECTS.map(p => (
              <div key={p.title} className="card" style={{ padding:32 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                  <div style={{ width:52, height:52, borderRadius:14, background:p.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon name={p.icon} size={24} color={p.ic} />
                  </div>
                  <span className="badge-planned">Planned</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:18, color:"var(--navy)", marginBottom:10 }}>{p.title}</h3>
                <p style={{ fontSize:14, color:"#475569", lineHeight:1.7 }}>{p.desc}</p>
                <div style={{ marginTop:24, paddingTop:20, borderTop:"1px solid #F1F5F9", display:"flex", alignItems:"center", gap:8 }}>
                  <Icon name="flag" size={14} color="var(--teal)" />
                  <span style={{ fontSize:13, color:"var(--teal)", fontFamily:"var(--font-sora)", fontWeight:600 }}>Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="reveal" style={{ padding:"0 24px 96px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ background:"var(--mint)", borderRadius:20, padding:48, textAlign:"center", border:"1px solid rgba(5,150,105,0.1)" }}>
            <Icon name="zap" size={32} color="#059669" />
            <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:22, color:"var(--navy)", marginTop:16, marginBottom:10 }}>Have a Project Idea?</h3>
            <p style={{ color:"#475569", fontSize:15, maxWidth:480, margin:"0 auto 24px" }}>
              Share your vision with us and let&apos;s build it together.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration:"none" }}>
              Reach Out <Icon name="arrow" size={16} color="#fff" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
