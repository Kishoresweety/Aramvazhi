import Link from "next/link";
import Icon from "./Icon";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Projects",  href: "/projects" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact",   href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",       href: "/privacy-policy" },
  { label: "Code of Ethics",       href: "/code-of-ethics" },
  { label: "Community Guidelines", href: "/community-guidelines" },
];

const SOCIAL = [
  { name: "linkedin",  href: "#", label: "LinkedIn" },
  { name: "instagram", href: "#", label: "Instagram" },
  { name: "youtube",   href: "#", label: "YouTube" },
  { name: "twitter",   href: "#", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#08183A", color:"#fff", paddingTop:64, paddingBottom:32 }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>

        {/* Top grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:48, marginBottom:56 }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", marginBottom:16 }}>
              <div style={{ width:38, height:38, borderRadius:10, background:"linear-gradient(135deg,#0B2463,#0A9E96)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Icon name="globe" size={18} color="#fff" />
              </div>
              <span style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:18, color:"#fff" }}>Aram Vazhi</span>
            </Link>
            <p style={{ color:"#94A3B8", fontSize:14, lineHeight:1.7, marginBottom:20 }}>
              Technology for Humanity.<br />Awareness for Society.
            </p>
            <div style={{ display:"flex", gap:10 }}>
              {SOCIAL.map(s => (
                <a key={s.name} href={s.href} className="social-btn" aria-label={s.label}>
                  <Icon name={s.name} size={18} color="#fff" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase", color:"#64748B", marginBottom:20 }}>Pages</h4>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase", color:"#64748B", marginBottom:20 }}>Legal & Community</h4>
            {LEGAL_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase", color:"#64748B", marginBottom:20 }}>Get in Touch</h4>
            <p style={{ color:"#94A3B8", fontSize:14, lineHeight:1.7, marginBottom:20 }}>
              Building a safer, smarter, and more ethical digital world — together.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize:13, padding:"10px 22px", textDecoration:"none" }}>
              Contact Us <Icon name="arrow" size={13} color="#fff" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:28, display:"flex", flexWrap:"wrap", gap:16, justifyContent:"space-between", alignItems:"center" }}>
          <p style={{ color:"#475569", fontSize:13 }}>
            © {new Date().getFullYear()} Aram Vazhi. All rights reserved.
          </p>
          <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
            {LEGAL_LINKS.map(l => (
              <Link key={l.href} href={l.href} style={{ color:"#475569", fontSize:12, textDecoration:"none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
