"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Projects",  href: "/projects" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const linkColor = (active: boolean) => {
    if (scrolled) return active ? "var(--navy)" : "#475569";
    if (isHome)   return "rgba(255,255,255,0.88)";
    return active ? "var(--navy)" : "#475569";
  };

  return (
    <nav style={{
      position:   "fixed",
      top: 0, left: 0, right: 0,
      zIndex:     1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter:       scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      boxShadow:  scrolled ? "0 1px 0 rgba(0,0,0,.06),0 4px 20px rgba(11,36,99,.06)" : "none",
      transition: "all .3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
            <div style={{
              width:38, height:38, borderRadius:10, flexShrink:0,
              background: "linear-gradient(135deg,#0B2463,#0A9E96)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <Icon name="globe" size={18} color="#fff" />
            </div>
            <span style={{
              fontFamily: "var(--font-sora)", fontWeight:700, fontSize:18,
              color: scrolled ? "var(--navy)" : isHome ? "#fff" : "var(--navy)",
            }}>
              Aram Vazhi
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:32 }}>
            {NAV.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{
                  fontFamily: "var(--font-sora)", fontWeight:500, fontSize:14,
                  color: linkColor(active), textDecoration:"none",
                  padding:"6px 4px", position:"relative", transition:"color .2s ease",
                }}>
                  {label}
                  <span style={{
                    position:"absolute", bottom:-2, left:0, right:0,
                    height:2, background:"var(--teal)", borderRadius:2,
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin:"left",
                    transition:"transform .25s ease",
                  }} />
                </Link>
              );
            })}
            <Link href="/volunteer" className="btn-primary" style={{ padding:"9px 22px", fontSize:13, textDecoration:"none" }}>
              Volunteer <Icon name="arrow" size={14} color="#fff" />
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            className={`hamburger hamburger-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ display:"none" }}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}
        style={{ background:"#fff", borderTop:"1px solid #F1F5F9" }}>
        <div style={{ padding:"12px 24px 20px", display:"flex", flexDirection:"column", gap:4 }}>
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              textDecoration:"none", padding:"10px 0",
              fontFamily:"var(--font-sora)", fontSize:15, fontWeight:500,
              color: pathname === href ? "var(--teal)" : "#374151",
              borderBottom:"1px solid #F1F5F9", display:"block",
            }}>
              {label}
            </Link>
          ))}
          <Link href="/volunteer" className="btn-primary"
            style={{ marginTop:12, justifyContent:"center", textDecoration:"none" }}>
            Volunteer Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
