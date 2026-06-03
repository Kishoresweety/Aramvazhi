"use client";
import { useReveal } from "../../hooks/useReveal";
import Icon from "@/components/Icon";
import SectionBadge from "@/components/SectionBadge";

const PRINCIPLES = [
  { title:"No Harassment",                   desc:"Zero tolerance for any form of harassment, intimidation, or threatening behavior toward any community member, regardless of context or platform.", icon:"shield" },
  { title:"No Hate Speech",                  desc:"Discriminatory language targeting individuals or groups based on race, religion, gender, nationality, disability, or any other characteristic is strictly prohibited.", icon:"flag" },
  { title:"No Hacking or Unauthorized Access",desc:"Aram Vazhi promotes cybersecurity for protection — not exploitation. Any attempt to hack, intrude, or gain unauthorized access to systems is a fundamental ethical violation.", icon:"lock" },
  { title:"No Misinformation",               desc:"We are committed to truth and accuracy. Sharing deliberately false, misleading, or unverified information is contrary to our mission of building an informed digital society.", icon:"eye" },
  { title:"Respect Privacy",                 desc:"Every individual has a right to privacy. Do not share, expose, or misuse personal data, private communications, or sensitive information belonging to others.", icon:"shield" },
  { title:"Evidence-Based Discussions",      desc:"We encourage thoughtful, fact-based dialogue. Opinions should be grounded in evidence, and disagreements should be handled with respect and intellectual honesty.", icon:"book" },
  { title:"Positive Social Impact",          desc:"Every action, project, and contribution must aim to uplift communities, bridge digital divides, and create measurable positive change in society.", icon:"heart" },
];

export default function CodeOfEthicsPage() {
  const ref = useReveal<HTMLElement>();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0B2463,#083E6E 60%,#0A5E7A)", padding:"160px 24px 96px", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.3 }} />
        <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <SectionBadge icon="flag" light>Ethics</SectionBadge>
          <h1 className="animate-fade-up" style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"#fff", marginBottom:20, letterSpacing:"-1px" }}>Code of Ethics</h1>
          <p className="animate-fade-up delay-100" style={{ fontSize:17, color:"rgba(255,255,255,0.78)", lineHeight:1.7 }}>
            Our ethical principles guide every interaction, decision, and initiative within the Aram Vazhi community.
          </p>
        </div>
        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C720,60 1440,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* Content */}
      <section ref={ref} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          {/* Info notice */}
          <div style={{ background:"var(--mint)", border:"1px solid rgba(5,150,105,0.15)", borderRadius:16, padding:"20px 24px", marginBottom:52, display:"flex", gap:14, alignItems:"flex-start" }}>
            <Icon name="info" size={20} color="#059669" />
            <p style={{ fontSize:14, color:"#475569", lineHeight:1.65 }}>
              These principles apply to all volunteers, contributors, and community members of Aram Vazhi. Violations may result in removal from the community.
            </p>
          </div>

          <div style={{ display:"grid", gap:20 }}>
            {PRINCIPLES.map(p => (
              <div key={p.title}
                style={{ display:"flex", gap:20, padding:24, background:"#F8FAFB", borderRadius:16, border:"1px solid #F1F5F9", transition:"border-color .2s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor="var(--teal)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor="#F1F5F9"; }}
              >
                <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,var(--navy),var(--teal))", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Icon name={p.icon} size={18} color="#fff" />
                </div>
                <div>
                  <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:16, color:"var(--navy)", marginBottom:7 }}>{p.title}</h3>
                  <p style={{ fontSize:14, color:"#475569", lineHeight:1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign:"center", marginTop:52, fontSize:13, color:"#94A3B8" }}>Last updated: January 2025</p>
        </div>
      </section>
    </div>
  );
}
