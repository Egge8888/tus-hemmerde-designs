import Link from "next/link";

const designs = [
  {
    href: "/design-a",
    label: "Design A",
    name: "Kraft & Athletik",
    tagline: "Bold · Dark · Modern",
    description:
      "Dunkles Farbschema mit knallroten Akzenten, Glassmorphism-Karten und einem athletischen, kraftvollen Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
    accentHex: "#dc2626",
    dotClass: "bg-red-600",
    badgeClass: "bg-red-600/20 text-red-400 border border-red-600/30",
    ctaClass: "bg-red-600 hover:bg-red-500 text-white",
  },
  {
    href: "/design-b",
    label: "Design B",
    name: "Heimat & Herzblut",
    tagline: "Warm · Freundlich · Einladend",
    description:
      "Warme Cremtöne mit roten Vereinsfarben, abgerundete Karten und ein einladendes, gemeinschaftliches Gefühl.",
    preview: "bg-gradient-to-br from-red-50 via-rose-50 to-red-100",
    accentHex: "#dc2626",
    dotClass: "bg-red-500",
    badgeClass: "bg-red-100 text-red-700 border border-red-200",
    ctaClass: "bg-red-600 hover:bg-red-500 text-white",
  },
  {
    href: "/design-c",
    label: "Design C",
    name: "Tradition trifft Moderne",
    tagline: "Klassisch · Professionell · Seriös",
    description:
      "Rot und Dunkelblau, strukturiertes Zeitungsgrid und ein professionelles, traditionsreiches Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-red-950",
    accentHex: "#dc2626",
    dotClass: "bg-red-600",
    badgeClass: "bg-red-600/20 text-red-300 border border-red-600/30",
    ctaClass: "bg-red-600 hover:bg-red-500 text-white",
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#030712", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #1f2937", backgroundColor: "rgba(17,24,39,0.9)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 14 }}>T</div>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.025em" }}>TuS Hemmerde 1919</span>
          <span style={{ marginLeft: "auto", fontSize: 14, color: "#6b7280" }}>Design-Auswahl</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "80px 24px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)", color: "#f87171", fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 999, marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#f87171", display: "inline-block" }}></span>
          3 Design-Konzepte · Vereinsfarben Rot & Weiß
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
          Neue Website für den<br />
          <span style={{ color: "#f87171" }}>TuS Hemmerde 1919 e.V.</span>
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
                  <div className={d.badgeClass} style={{ width: 56, height: 56, borderRadius: 12, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.4)", backgroundColor: d.accentHex }}>T</div>
                  <div style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, display: "inline-block", backgroundColor: "rgba(220,38,38,0.15)", color: "#fca5a5", border: "1px solid rgba(220,38,38,0.3)" }}>{d.tagline}</div>
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
