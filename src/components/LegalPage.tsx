import SectionBadge from "./SectionBadge";
/*import Icon from "./Icon";*/

interface Section { title: string; body: string; }

interface LegalPageProps {
  title:    string;
  icon:     string;
  badge:    string;
  sections: Section[];
  updated:  string;
}

export default function LegalPage({ title, icon, badge, sections, updated }: LegalPageProps) {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0B2463,#083E6E 60%,#0A5E7A)", padding:"160px 24px 96px", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.3 }} />
        <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <SectionBadge icon={icon} light>{badge}</SectionBadge>
          <h1 className="animate-fade-up" style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"#fff", marginBottom:20, letterSpacing:"-1px" }}>
            {title}
          </h1>
        </div>
        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C720,60 1440,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* Content */}
      <section style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:760, margin:"0 auto" }}>
          {sections.map((s, i) => (
            <div key={s.title} style={{ marginBottom:40 }}>
              <h2 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:20, color:"var(--navy)", marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"var(--teal)", display:"inline-block", flexShrink:0 }} />
                {s.title}
              </h2>
              <p style={{ fontSize:15, color:"#475569", lineHeight:1.8, paddingLeft:17 }}>{s.body}</p>
              {i < sections.length - 1 && <div style={{ marginTop:32, height:1, background:"#F1F5F9" }} />}
            </div>
          ))}
          <p style={{ textAlign:"center", marginTop:48, fontSize:13, color:"#94A3B8" }}>Last updated: {updated}</p>
        </div>
      </section>
    </div>
  );
}
