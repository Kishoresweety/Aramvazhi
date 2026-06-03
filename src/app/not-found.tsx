import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"var(--sky)", padding:24, textAlign:"center" }}>
      <div>
        <div style={{ fontSize:96, fontFamily:"var(--font-sora)", fontWeight:800, background:"linear-gradient(135deg,var(--navy),var(--teal))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1, marginBottom:16 }}>
          404
        </div>
        <h1 style={{ fontFamily:"var(--font-sora)", fontWeight:700, fontSize:28, color:"var(--navy)", marginBottom:12 }}>Page Not Found</h1>
        <p style={{ color:"#475569", fontSize:16, maxWidth:420, margin:"0 auto 36px" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary" style={{ textDecoration:"none" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
