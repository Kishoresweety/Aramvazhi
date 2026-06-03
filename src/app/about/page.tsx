"use client";
import Link from "next/link";
import { useReveal } from "../../hooks/useReveal";
import Icon from "@/components/Icon";
import SectionBadge from "@/components/SectionBadge";

const VALUES = [
  { num:"01", title:"Integrity",        desc:"We uphold honesty and strong moral principles in every decision, partnership, and action we take." },
  { num:"02", title:"Transparency",     desc:"We operate openly, sharing our processes, decisions, and impacts with our community at every step." },
  { num:"03", title:"Responsibility",   desc:"We take ownership of our work and its effects on individuals, communities, and society at large." },
  { num:"04", title:"Inclusion",        desc:"We build spaces where everyone belongs, regardless of background, identity, or level of digital expertise." },
  { num:"05", title:"Lifelong Learning",desc:"We embrace continuous growth, curiosity, and the pursuit of knowledge as core to our identity." },
];

const PILLARS = [
  { icon:"brain",  label:"AI Ethics",        bg:"#EEF2FF", ic:"#4F46E5" },
  { icon:"shield", label:"Cyber Safety",     bg:"#F0FDFA", ic:"#0A9E96" },
  { icon:"book",   label:"Digital Literacy", bg:"#ECFDF5", ic:"#059669" },
  { icon:"users",  label:"Community",        bg:"#F0F7FF", ic:"#0B2463" },
];

export default function AboutPage() {
  const ref1 = useReveal<HTMLElement>();
  const ref2 = useReveal<HTMLElement>();
  const ref3 = useReveal<HTMLElement>();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0B2463,#083E6E 60%,#0A7E82)", padding:"160px 24px 96px", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.3 }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <SectionBadge icon="users" light>About Us</SectionBadge>
          <h1 className="animate-fade-up" style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:"#fff", marginBottom:20, letterSpacing:"-1px" }}>Who We Are</h1>
          <p className="animate-fade-up delay-100" style={{ fontSize:"clamp(16px,2vw,19px)", color:"rgba(255,255,255,0.78)", maxWidth:680, margin:"0 auto", lineHeight:1.75 }}>
            A community initiative dedicated to helping people navigate the digital world safely and responsibly through education, awareness, and ethical innovation.
          </p>
        </div>
        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C720,60 1440,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* Story */}
      <section ref={ref1} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))", gap:64, alignItems:"center" }}>
            <div>
              <SectionBadge icon="info">Our Story</SectionBadge>
              <h2 style={{ fontSize:"clamp(26px,4vw,38px)", fontWeight:800, color:"var(--navy)", marginBottom:20, letterSpacing:"-0.5px" }}>
                Aram Vazhi — A Path Toward Digital Welfare
              </h2>
              <p style={{ fontSize:16, color:"#475569", lineHeight:1.8, marginBottom:18 }}>
                <em>Aram Vazhi</em> (அறம் வழி) means &quot;the path of righteousness&quot; — a name that reflects our unwavering commitment to ethical technology and social good.
              </p>
              <p style={{ fontSize:16, color:"#475569", lineHeight:1.8, marginBottom:18 }}>
                We are a community initiative born from the belief that technology should serve humanity, not exploit it. Our volunteers — from cybersecurity experts to educators, AI researchers to content creators — work together to build a safer, more equitable digital world.
              </p>
              <p style={{ fontSize:16, color:"#475569", lineHeight:1.8 }}>
                Through campaigns, workshops, research, and community programs, we equip people with the awareness and tools they need to thrive in the digital age — responsibly and confidently.
              </p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {PILLARS.map(p => (
                <div key={p.label} style={{ background:p.bg, borderRadius:16, padding:24, textAlign:"center" }}>
                  <div style={{ display:"flex", justifyContent:"center", marginBottom:10 }}>
                    <Icon name={p.icon} size={28} color={p.ic} />
                  </div>
                  <div style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:14, color:"var(--navy)" }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref2} className="reveal" style={{ padding:"0 24px 96px", background:"#fff" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <SectionBadge icon="star">Core Values</SectionBadge>
            <h2 style={{ fontSize:"clamp(26px,4vw,38px)", fontWeight:800, color:"var(--navy)", letterSpacing:"-0.5px" }}>What We Believe In</h2>
          </div>
          {VALUES.map((v, i) => (
            <div key={v.title} className="value-item" style={i === VALUES.length - 1 ? { borderBottom:"none" } : {}}>
              <div className="value-num">{v.num}</div>
              <div>
                <h4 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:17, color:"var(--navy)", marginBottom:6 }}>{v.title}</h4>
                <p style={{ fontSize:14, color:"#475569", lineHeight:1.65 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ref3} className="reveal" style={{ padding:"0 24px 96px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ background:"var(--sky)", borderRadius:24, padding:"64px 48px", textAlign:"center", border:"1px solid #E2E8F0" }}>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:800, color:"var(--navy)", marginBottom:16 }}>Join Our Growing Community</h2>
            <p style={{ fontSize:16, color:"#475569", maxWidth:500, margin:"0 auto 32px", lineHeight:1.7 }}>
              Be part of a movement reshaping how society interacts with technology — ethically and responsibly.
            </p>
            <Link href="/volunteer" className="btn-primary" style={{ fontSize:15, textDecoration:"none" }}>
              Volunteer With Us <Icon name="arrow" size={16} color="#fff" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
