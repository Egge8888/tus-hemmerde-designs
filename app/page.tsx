import Link from "next/link";

const designs = [
  {
    href: "/design-a",
    label: "Design A",
    name: "Kraft & Athletik",
    tagline: "Bold · Dark · Modern",
    description:
      "Dunkles Farbschema mit neongrünen Akzenten, Glassmorphism-Karten und einem athletischen, kraftvollen Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
    accentHex: "#22c55e",
    dotClass: "bg-green-500",
    badgeClass: "bg-green-500/20 text-green-400 border border-green-500/30",
    ctaClass: "bg-green-500 hover:bg-green-400 text-black",
  },
  {
    href: "/design-b",
    label: "Design B",
    name: "Heimat & Herzblut",
    tagline: "Warm · Freundlich · Einladend",
    description:
      "Warme Cremtöne mit orangen Akzenten, abgerundete Karten und ein einladendes, gemeinschaftliches Gefühl.",
    preview: "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100",
    accentHex: "#f59e0b",
    dotClass: "bg-amber-500",
    badgeClass: "bg-amber-500/20 text-amber-700 border border-amber-400/40",
    ctaClass: "bg-amber-500 hover:bg-amber-400 text-white",
  },
  {
    href: "/design-c",
    label: "Design C",
    name: "Tradition trifft Moderne",
    tagline: "Klassisch · Professionell · Seriös",
    description:
      "Royal Blau mit Gold-Akzenten, strukturiertes Layout und ein professionelles, traditionsreiches Erscheinungsbild.",
    preview: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950",
    accentHex: "#d97706",
    dotClass: "bg-yellow-500",
    badgeClass: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    ctaClass: "bg-yellow-600 hover:bg-yellow-500 text-white",
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#030712", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #1f2937", backgroundColor: "rgba(17,24,39,0.9)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#000", fontSize: 14 }}>T</div>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.025em" }}>TuS Hemmerde 1919</span>
          <span style={{ marginLeft: "auto", fontSize: 14, color: "#6b7280" }}>Design-Auswahl</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "80px 24px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#4ade80", fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 999, marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block" }}></span>
          3 Design-Konzepte
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
          Neue Website für den<br />
          <span style={{ color: "#4ade80" }}>TuS Hemmerde 1919 e.V.</span>
        </h1>
        <p style={{ color: "#9ca3af", fontSize: 18, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Drei visuelle Richtungen für euren Vereins-Webauftritt. Klickt auf ein Design, um eine vollständige Vorschau zu sehen.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap", fontSize: 14, color: "#6b7280" }}>
          {["Gegründet 1919", "500+ Mitglieder", "10 Sportarten", "Unna-Hemmerde, NRW"].map((s, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#374151", display: "inline-block" }}></span>}
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Design Cards */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {designs.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              style={{ display: "block", borderRadius: 16, overflow: "hidden", border: "1px solid #1f2937", backgroundColor: "#111827", textDecoration: "none", color: "inherit", transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s" }}
              className="design-card"
            >
              {/* Preview */}
              <div className={d.preview} style={{ height: 200, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.4)", backgroundColor: d.accentHex }}>T</div>
                  <div className={d.badgeClass} style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, display: "inline-block" }}>{d.tagline}</div>
                </div>
              </div>
              {/* Body */}
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{d.label}</div>
                    <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>{d.name}</h2>
                  </div>
                  <div className={d.dotClass} style={{ width: 12, height: 12, borderRadius: "50%", marginTop: 6 }}></div>
                </div>
                <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{d.description}</p>
                <div className={d.ctaClass} style={{ width: "100%", padding: "10px 0", borderRadius: 12, fontSize: 14, fontWeight: 700, textAlign: "center", display: "block", transition: "background-color 0.2s" }}>
                  Design ansehen →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1f2937", padding: "32px 24px", textAlign: "center", color: "#4b5563", fontSize: 14 }}>
        TuS Hemmerde 1919 e.V. · Sportplatz Hemmerde, 59174 Unna · info@tushemmerde.de
      </footer>

      <style>{`
        .design-card:hover { transform: translateY(-4px); border-color: #374151; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
      `}</style>
    </div>
  );
}
