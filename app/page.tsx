import Link from "next/link";

const designsHandcrafted = [
  {
    href: "/design-a",
    label: "Design A",
    name: "Kraft & Athletik",
    tagline: "Bold · Dark · Modern",
    description: "Dunkles Farbschema mit knallroten Akzenten, Glassmorphism-Karten und athletischem Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
    accentHex: "#dc2626",
  },
  {
    href: "/design-b",
    label: "Design B",
    name: "Heimat & Herzblut",
    tagline: "Warm · Freundlich · Einladend",
    description: "Warme Cremtöne mit roten Vereinsfarben, abgerundete Karten und gemeinschaftliches Gefühl.",
    preview: "bg-gradient-to-br from-red-50 via-rose-50 to-red-100",
    accentHex: "#dc2626",
  },
  {
    href: "/design-c",
    label: "Design C",
    name: "Tradition trifft Moderne",
    tagline: "Klassisch · Professionell · Seriös",
    description: "Rot und Dunkelblau, strukturiertes Zeitungsgrid und professionelles Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-red-950",
    accentHex: "#dc2626",
  },
];

const designsStitch = [
  {
    href: "/design-stitch-mega.html",
    label: "Stitch ★ Favorit",
    name: "1919 Gegründet.",
    tagline: "Editorial · Sportfotografie · Bold",
    description: "Großformatige Sportfotos, \"1919 Gegründet.\" Hero, rote Typografie-Akzente, Kapitel-Struktur. KI-generiert mit Stitch.",
    preview: "bg-gradient-to-br from-stone-100 via-white to-red-50",
    accentHex: "#dc2626",
    isStitch: true,
    isFavorite: true,
  },
  {
    href: "/design-d.html",
    label: "Stitch D",
    name: "Liquid Light",
    tagline: "Glassmorphism · Hell · Modern",
    description: "Floating Nav, Glasskarten, rote Akzente auf hellem Hintergrund. Gemeinsam. Stark. Seit 1919.",
    preview: "bg-gradient-to-br from-white via-red-50 to-rose-100",
    accentHex: "#dc2626",
    isStitch: true,
  },
  {
    href: "/design-f.html",
    label: "Stitch F",
    name: "Klassisch Modern",
    tagline: "Editorial · Serif · Elegant",
    description: "\"Tradition. Sport. Gemeinschaft.\" mit großer Serif-Schrift, rotem Akzent und klarem Zeitungslayout.",
    preview: "bg-gradient-to-br from-neutral-100 via-white to-red-50",
    accentHex: "#dc2626",
    isStitch: true,
  },
];

function DesignCard({ d }: { d: typeof designsHandcrafted[0] & { isStitch?: boolean; isFavorite?: boolean } }) {
  const isExternal = d.href.endsWith(".html");
  return (
    <a
      href={d.href}
      style={{
        display: "block",
        borderRadius: 16,
        overflow: "hidden",
        border: d.isFavorite ? "2px solid #dc2626" : "1px solid #1f2937",
        backgroundColor: "#111827",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
        position: "relative",
      }}
      className="design-card"
    >
      {d.isFavorite && (
        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 20, backgroundColor: "#dc2626", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>
          ★ Favorit
        </div>
      )}
      {d.isStitch && !d.isFavorite && (
        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 20, backgroundColor: "#1d4ed8", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>
          Stitch AI
        </div>
      )}
      {/* Preview */}
      <div className={d.preview} style={{ height: 200, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.4)", backgroundColor: d.accentHex }}>T</div>
          <div style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, display: "inline-block", backgroundColor: "rgba(220,38,38,0.15)", color: "#fca5a5", border: "1px solid rgba(220,38,38,0.3)" }}>{d.tagline}</div>
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: d.isStitch ? "#60a5fa" : "#6b7280", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{d.label}</div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>{d.name}</h2>
          </div>
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#dc2626", marginTop: 6 }}></div>
        </div>
        <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{d.description}</p>
        <div style={{ width: "100%", padding: "10px 0", borderRadius: 12, fontSize: 14, fontWeight: 700, textAlign: "center", display: "block", backgroundColor: d.isFavorite ? "#dc2626" : "#1f2937", color: d.isFavorite ? "#fff" : "#9ca3af" }}>
          Design ansehen →
        </div>
      </div>
    </a>
  );
}

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
          6 Design-Konzepte · 3× handcrafted · 3× Stitch AI
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
          Neue Website für den<br />
          <span style={{ color: "#f87171" }}>TuS Hemmerde 1919 e.V.</span>
        </h1>
        <p style={{ color: "#9ca3af", fontSize: 18, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Sechs visuelle Richtungen — drei handcrafted, drei mit Stitch AI generiert. Klickt auf ein Design, um die vollständige Vorschau zu sehen.
        </p>
      </section>

      {/* Stitch Designs — featured */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ height: 1, flex: 1, backgroundColor: "#1f2937" }}></div>
          <span style={{ fontSize: 12, color: "#60a5fa", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>✦ Stitch AI — generiert</span>
          <div style={{ height: 1, flex: 1, backgroundColor: "#1f2937" }}></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {designsStitch.map((d) => <DesignCard key={d.href} d={d} />)}
        </div>
      </section>

      {/* Handcrafted Designs */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ height: 1, flex: 1, backgroundColor: "#1f2937" }}></div>
          <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Handcrafted</span>
          <div style={{ height: 1, flex: 1, backgroundColor: "#1f2937" }}></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {designsHandcrafted.map((d) => <DesignCard key={d.href} d={d} />)}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1f2937", padding: "32px 24px", textAlign: "center", color: "#4b5563", fontSize: 14 }}>
        TuS Hemmerde 1919 e.V. · Sportplatz Hemmerde, 59174 Unna · info@tushemmerde.de
      </footer>

      <style>{`
        .design-card:hover { transform: translateY(-4px); border-color: #374151 !important; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
      `}</style>
    </div>
  );
}
