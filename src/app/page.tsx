"use client";
import { useState } from "react";
import Link from "next/link";
import { useReveal } from "../hooks/useReveal";
import Icon from "@/components/Icon";
import SectionBadge from "@/components/SectionBadge";

/* ── data ── */
const IMPACT = [
  { icon:"brain",     label:"Ethical AI",                    desc:"Promoting responsible development and use of AI for the benefit of all.",              bg:"#EEF2FF", ic:"#4F46E5" },
  { icon:"shield",    label:"Cybersecurity Awareness",       desc:"Empowering individuals with knowledge and tools to stay safe in the digital world.",    bg:"#F0FDFA", ic:"#0A9E96" },
  { icon:"book",      label:"Digital Literacy",              desc:"Equipping communities with essential digital skills and competencies.",                 bg:"#ECFDF5", ic:"#059669" },
  { icon:"newspaper", label:"Media Literacy",                desc:"Developing critical thinking skills to navigate the media landscape responsibly.",      bg:"#FFF7ED", ic:"#EA580C" },
  { icon:"users",     label:"Community Building",            desc:"Creating inclusive spaces for collaboration, mutual learning, and collective growth.",  bg:"#F0F7FF", ic:"#0B2463" },
  { icon:"heart",     label:"Technology for Social Good",    desc:"Harnessing the power of technology to address real-world social challenges.",          bg:"#FFF1F2", ic:"#E11D48" },
];

const WHY = [
  { icon:"users",  title:"Community Driven",   desc:"Built by and for the community — every voice is heard and valued." },
  { icon:"target", title:"Evidence Based",     desc:"All initiatives are grounded in rigorous research, real data, and proven methodologies." },
  { icon:"lock",   title:"Ethical First",      desc:"Ethics and integrity sit at the core of everything we do and build." },
  { icon:"globe",  title:"Inclusive for All",  desc:"Accessible and welcoming to people of all backgrounds, skills, and experiences." },
];

const ROLES = [
  { icon:"brain",  label:"AI" },
  { icon:"shield", label:"Cybersecurity" },
  { icon:"code",   label:"Software Dev" },
  { icon:"pen",    label:"Design" },
  { icon:"target", label:"Research" },
  { icon:"book",   label:"Education" },
  { icon:"mic",    label:"Content Creation" },
  { icon:"globe",  label:"Digital Marketing" },
];

/* ── Volunteer form ── */
function QuickForm() {
  const [form, setForm]       = useState({ name:"", email:"", linkedin:"", skills:"", why:"" });
  const [done, setDone]       = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  if (done) return (
    <div style={{ textAlign:"center", padding:"32px 0" }}>
      <div style={{ width:64, height:64, borderRadius:"50%", background:"var(--mint)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
        <Icon name="check" size={28} color="#059669" />
      </div>
      <h4 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:18, color:"var(--navy)", marginBottom:8 }}>Application Received!</h4>
      <p style={{ color:"#475569", fontSize:14 }}>We&apos;ll be in touch soon.</p>
    </div>
  );

  return (
    <div style={{ display:"grid", gap:18 }}>
      {([["name","Name","text","Full Name"],["email","Email","email","you@email.com"],["linkedin","LinkedIn","url","linkedin.com/in/..."],["skills","Skills","text","e.g. Cybersecurity, AI Research"]] as const).map(([k,lbl,t,ph]) => (
        <div key={k}>
          <label className="form-label">{lbl}</label>
          <input className="form-input" type={t} placeholder={ph} value={(form as Record<string,string>)[k]} onChange={set(k)} />
        </div>
      ))}
      <div>
        <label className="form-label">Why do you want to join?</label>
        <textarea className="form-input" rows={3} placeholder="Tell us about your motivation..." value={form.why} onChange={set("why")} style={{ resize:"vertical" }} />
      </div>
      <button className="btn-primary" onClick={() => setDone(true)} style={{ width:"100%", justifyContent:"center", fontSize:15 }}>
        Submit Application <Icon name="send" size={15} color="#fff" />
      </button>
    </div>
  );
}

/* ── Page ── */
export default function HomePage() {
  const missionRef = useReveal<HTMLElement>();
  const impactRef  = useReveal<HTMLElement>();
  const whyRef     = useReveal<HTMLElement>();
  const volRef     = useReveal<HTMLElement>();
  const ctaRef     = useReveal<HTMLElement>();

  return (
    <div className="page-enter">

      {/* ════ HERO ════ */}
      <section className="hero-bg" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.4 }} />
        <div className="geo-circle" style={{ width:500, height:500, top:-150, right:-100, opacity:0.15 }} />
        <div className="geo-circle" style={{ width:300, height:300, bottom:50, left:-80, opacity:0.1 }} />
        <div className="geo-circle" style={{ width:160, height:160, top:"30%", right:"15%", opacity:0.2 }} />

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"120px 24px 80px", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:760 }}>

            {/* Live badge */}
            <div className="animate-fade-up" style={{ marginBottom:20 }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.12)", borderRadius:50, padding:"6px 16px", border:"1px solid rgba(255,255,255,0.2)" }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#10B981" }} />
                <span style={{ color:"rgba(255,255,255,0.9)", fontSize:13, fontFamily:"var(--font-sora)", fontWeight:600 }}>Digital Welfare Initiative</span>
              </span>
            </div>

            <h1 className="animate-fade-up delay-100" style={{ fontSize:"clamp(36px,6vw,68px)", fontWeight:800, color:"#fff", lineHeight:1.1, marginBottom:24, letterSpacing:"-1.5px" }}>
              Empowering Society Through{" "}
              <span className="text-gradient">Ethical Technology</span>
            </h1>

            <p className="animate-fade-up delay-200" style={{ fontSize:"clamp(16px,2vw,19px)", color:"rgba(255,255,255,0.78)", lineHeight:1.7, marginBottom:40, maxWidth:620 }}>
              Building awareness, digital resilience, cybersecurity knowledge, and responsible AI for a healthier digital future.
            </p>

            <div className="animate-fade-up delay-300" style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <Link href="/volunteer" className="btn-primary" style={{ fontSize:15, padding:"14px 34px", textDecoration:"none" }}>
                Join the Movement <Icon name="arrow" size={16} color="#fff" />
              </Link>
              <Link href="/volunteer" className="btn-outline" style={{ fontSize:15, textDecoration:"none" }}>
                Become a Volunteer
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-400" style={{ display:"flex", gap:40, marginTop:60, flexWrap:"wrap" }}>
              {[["6+","Impact Areas"],["100%","Community Driven"],["∞","Learning Together"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontSize:28, fontWeight:800, color:"#fff", fontFamily:"var(--font-sora)" }}>{n}</div>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,0.55)", marginTop:3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <svg style={{ position:"absolute", bottom:-1, left:0, right:0 }} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 L1440,20 L1440,80 Z" fill="#fff" />
        </svg>
      </section>

      {/* ════ MISSION ════ */}
      <section ref={missionRef} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
          <SectionBadge icon="target">Our Mission</SectionBadge>
          <h2 style={{ fontSize:"clamp(28px,4vw,44px)", fontWeight:800, color:"var(--navy)", marginBottom:24, letterSpacing:"-0.5px" }}>
            What We Stand For
          </h2>
          <p style={{ fontSize:"clamp(16px,2vw,20px)", color:"#475569", lineHeight:1.8, maxWidth:760, margin:"0 auto" }}>
            Our mission is to promote <strong style={{ color:"var(--navy)" }}>digital welfare</strong>, ethical AI, cybersecurity awareness, media literacy, and responsible technology adoption — building a resilient, informed, and empowered digital society.
          </p>
        </div>
      </section>

      {/* ════ IMPACT AREAS ════ */}
      <section ref={impactRef} className="reveal" style={{ padding:"0 24px 96px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <SectionBadge icon="zap">Impact Areas</SectionBadge>
            <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:"var(--navy)", letterSpacing:"-0.5px" }}>Areas We Champion</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {IMPACT.map(a => (
              <div key={a.label} className="card" style={{ padding:28 }}>
                <div style={{ width:52, height:52, borderRadius:14, background:a.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                  <Icon name={a.icon} size={24} color={a.ic} />
                </div>
                <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:17, color:"var(--navy)", marginBottom:8 }}>{a.label}</h3>
                <p style={{ fontSize:14, color:"#475569", lineHeight:1.65 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHY ARAM VAZHI ════ */}
      <section ref={whyRef} className="reveal" style={{ padding:"96px 24px", background:"var(--sky)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(440px,1fr))", gap:64, alignItems:"center" }}>
            <div>
              <SectionBadge icon="star">Why Us</SectionBadge>
              <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:800, color:"var(--navy)", marginBottom:20, letterSpacing:"-0.5px" }}>
                Why Choose<br />Aram Vazhi?
              </h2>
              <p style={{ fontSize:16, color:"#475569", lineHeight:1.75, marginBottom:32 }}>
                We&apos;re not just another tech organization — we&apos;re a movement built on genuine care for people and society, driven by ethics, evidence, and empathy.
              </p>
              <Link href="/about" className="btn-secondary" style={{ textDecoration:"none" }}>
                Learn Our Story <Icon name="arrow" size={16} color="var(--navy)" />
              </Link>
            </div>
            <div>
              {WHY.map((item, i) => (
                <div key={item.title} style={{ display:"flex", gap:18, alignItems:"flex-start", padding:"20px 0", borderBottom: i < 3 ? "1px solid #E2E8F0" : "none" }}>
                  <div style={{ width:46, height:46, borderRadius:12, background:"linear-gradient(135deg,var(--navy),var(--teal))", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon name={item.icon} size={20} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:16, color:"var(--navy)", marginBottom:5 }}>{item.title}</h4>
                    <p style={{ fontSize:14, color:"#475569", lineHeight:1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ VOLUNTEER INVITE ════ */}
      <section ref={volRef} className="reveal" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <SectionBadge icon="heart">Join Us</SectionBadge>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:800, color:"var(--navy)", marginBottom:16, letterSpacing:"-0.5px" }}>
              We&apos;re Looking for Volunteers
            </h2>
            <p style={{ fontSize:16, color:"#475569", maxWidth:560, margin:"0 auto" }}>
              Whatever your background, there&apos;s a place for you at Aram Vazhi.
            </p>
          </div>

          {/* Role chips */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:14, justifyContent:"center", marginBottom:52 }}>
            {ROLES.map(r => (
              <div key={r.label} style={{ display:"flex", alignItems:"center", gap:8, background:"var(--sky)", border:"1.5px solid #E2E8F0", borderRadius:50, padding:"10px 20px" }}>
                <Icon name={r.icon} size={16} color="var(--teal)" />
                <span style={{ fontFamily:"var(--font-sora)", fontWeight:600, fontSize:14, color:"var(--navy)" }}>{r.label}</span>
              </div>
            ))}
          </div>

          {/* Quick form */}
          <div style={{ maxWidth:640, margin:"0 auto", background:"#F8FAFB", border:"1px solid #E2E8F0", borderRadius:20, padding:40 }}>
            <h3 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:22, color:"var(--navy)", marginBottom:8 }}>Quick Application</h3>
            <p style={{ fontSize:14, color:"#475569", marginBottom:28 }}>Fill in your details and we&apos;ll get back to you shortly.</p>
            <QuickForm />
          </div>
        </div>
      </section>

      {/* ════ CTA BANNER ════ */}
      <section ref={ctaRef} className="reveal" style={{ padding:"0 24px 96px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ background:"linear-gradient(135deg,var(--navy) 0%,#083E6E 50%,var(--teal) 100%)", borderRadius:24, padding:"64px 48px", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div className="geo-dot-grid" style={{ position:"absolute", inset:0, opacity:0.2 }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:800, color:"#fff", marginBottom:16 }}>
                Ready to Make a Difference?
              </h2>
              <p style={{ fontSize:17, color:"rgba(255,255,255,0.75)", maxWidth:500, margin:"0 auto 36px" }}>
                Join thousands building a safer and more ethical digital world.
              </p>
              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
                <Link href="/volunteer" className="btn-primary" style={{ textDecoration:"none" }}>
                  Become a Volunteer <Icon name="arrow" size={16} color="#fff" />
                </Link>
                <Link href="/contact" className="btn-outline" style={{ textDecoration:"none" }}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
