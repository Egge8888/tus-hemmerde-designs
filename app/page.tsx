const designs = [
  {
    href: "/design-j.html",
    label: "Design 1",
    name: "Fanzine Edition",
    tagline: "Fanzine · Bold · Rot/Schwarz",
    description: "Druckfrische Fanzine-Energie: rotes Hero, schwarze Flächen, harte Kontraste und aggressive Typografie.",
    preview: "bg-gradient-to-br from-red-700 via-red-800 to-black",
  },
  {
    href: "/design-k.html",
    label: "Design 2",
    name: "Dark Classic",
    tagline: "Dunkel · Elegant · Strukturiert",
    description: "Schwarze Nav mit rotem Akzentbalken, strukturiertes Layout, starke Typografie und klare Hierarchie.",
    preview: "bg-gradient-to-br from-zinc-900 via-zinc-800 to-red-900",
  },
  {
    href: "/design-l.html",
    label: "Design 3",
    name: "Tradition & Gemeinschaft",
    tagline: "Warm · Serif · Gemeinschaft",
    description: "Warmes Off-White, Serif-Typografie und Fotokollagen — persönlich und einladend wie ein Schwarzes Brett.",
    preview: "bg-gradient-to-br from-stone-100 via-amber-50 to-red-50",
  },
  {
    href: "/design-m.html",
    label: "Design 4",
    name: "Swiss Rationalism",
    tagline: "Minimalist · Raster · Präzise",
    description: "Roter 6px-Balken oben, strenge Typografie, Grid-Perfektion. Schweizer Designschule trifft Vereinssport.",
    preview: "bg-gradient-to-br from-white via-gray-50 to-red-50",
  },
  {
    href: "/design-n.html",
    label: "Design 5",
    name: "Noir Athletic",
    tagline: "Schwarz · Neon-Rot · Modern",
    description: "Tiefschwarz mit Neon-roten Highlights, moderne Kartenstruktur und kraftvolle Sportästhetik.",
    preview: "bg-gradient-to-br from-black via-zinc-950 to-red-950",
  },
  {
    href: "/design-o.html",
    label: "Design 6",
    name: "Editorial",
    tagline: "Editorial · Strukturiert · Klar",
    description: "Zeitungsartiges Layout, klare Typografie-Hierarchie, rote Akzente auf weißem Grund. Seriös und modern.",
    preview: "bg-gradient-to-br from-white via-zinc-50 to-red-50",
  },
  {
    href: "/design-g.html",
    label: "Design 7",
    name: "Neo-Brutalist (Fanzine)",
    tagline: "Fanzine · Aggressive · Rot/Schwarz",
    description: "Schwarze Nav, krachend rotes Hero, harter Offset-Shadow-Stil. Großbuchstaben, keine Rundungen — roh wie ein Stadion-Fanzine.",
    preview: "bg-gradient-to-br from-black via-zinc-900 to-red-950",
  },
  {
    href: "/design-h.html",
    label: "Design 2",
    name: "Cyber-Athletic",
    tagline: "Dark · Neon · Futuristisch",
    description: "Tiefschwarzer Hintergrund, rote Neon-Akzente, Grid-Raster-Ästhetik. Futuristisch und athletisch zugleich.",
    preview: "bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-900",
  },
  {
    href: "/design-i.html",
    label: "Design 3",
    name: "Liquid Crystal",
    tagline: "Glassmorphism · Kristall · Modern",
    description: "Weiße Transparenz-Elemente, Glaseffekte und rote Akzente. Leicht, modern, elegant.",
    preview: "bg-gradient-to-br from-zinc-100 via-white to-red-50",
  },
  {
    href: "/design-stitch-mega.html",
    label: "Design 4",
    name: "1919 Gegründet.",
    tagline: "Editorial · Sportfotografie · Bold",
    description: "Großformatige Sportfotos, markante Typografie und eine klare Kapitel-Struktur. Rot als zentrales Gestaltungselement.",
    preview: "bg-gradient-to-br from-stone-100 via-white to-red-50",
  },
  {
    href: "/design-d.html",
    label: "Design 5",
    name: "Liquid Light",
    tagline: "Glassmorphism · Hell · Modern",
    description: "Floating Navigation, Glasskarten und rote Akzente auf hellem Hintergrund. Gemeinsam. Stark. Seit 1919.",
    preview: "bg-gradient-to-br from-white via-red-50 to-rose-100",
  },
  {
    href: "/design-f.html",
    label: "Design 6",
    name: "Klassisch Modern",
    tagline: "Editorial · Serif · Elegant",
    description: "\"Tradition. Sport. Gemeinschaft.\" mit großer Serif-Schrift, rotem Akzent und klarem Zeitungslayout.",
    preview: "bg-gradient-to-br from-neutral-100 via-white to-red-50",
  },
  {
    href: "/design-a",
    label: "Design 7",
    name: "Kraft & Athletik",
    tagline: "Bold · Dark · Modern",
    description: "Dunkles Farbschema mit knallroten Akzenten, Glassmorphism-Karten und athletischem Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  },
  {
    href: "/design-b",
    label: "Design 8",
    name: "Heimat & Herzblut",
    tagline: "Warm · Freundlich · Einladend",
    description: "Warme Cremetöne mit roten Vereinsfarben, abgerundete Karten und ein gemeinschaftliches Gefühl.",
    preview: "bg-gradient-to-br from-red-50 via-rose-50 to-red-100",
  },
  {
    href: "/design-c",
    label: "Design 9",
    name: "Tradition trifft Moderne",
    tagline: "Klassisch · Professionell · Seriös",
    description: "Rot und Dunkelblau, strukturiertes Zeitungsgrid und professionelles Erscheinungsbild.",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-red-950",
  },
];

function DesignCard({ d }: { d: typeof designs[0] }) {
  return (
    <a
      href={d.href}
      style={{
        display: "block",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #1f2937",
        backgroundColor: "#111827",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
      }}
      className="design-card"
    >
      {/* Preview */}
      <div className={d.preview} style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <img src="/tus-logo.png" alt="TuS Hemmerde Logo" style={{ width: 56, height: 56, objectFit: "contain", margin: "0 auto 12px", display: "block", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))" }} />
          <div style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, display: "inline-block", backgroundColor: "rgba(220,38,38,0.12)", color: "#dc2626", border: "1px solid rgba(220,38,38,0.25)" }}>{d.tagline}</div>
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: 24 }}>
        <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{d.label}</div>
        <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>{d.name}</h2>
        <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{d.description}</p>
        <div style={{ width: "100%", padding: "10px 0", borderRadius: 12, fontSize: 14, fontWeight: 700, textAlign: "center", backgroundColor: "#1f2937", color: "#e5e7eb" }}>
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
          <img src="/tus-logo.png" alt="TuS Hemmerde Logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.025em" }}>TuS Hemmerde 1919</span>
          <span style={{ marginLeft: "auto", fontSize: 14, color: "#6b7280" }}>Design-Auswahl</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "80px 24px 48px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
          Neue Website für den<br />
          <span style={{ color: "#f87171" }}>TuS Hemmerde 1919 e.V.</span>
        </h1>
        <p style={{ color: "#9ca3af", fontSize: 18, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
          15 Design-Vorschläge für die neue Vereinswebsite. Klickt auf ein Design, um die vollständige Vorschau zu sehen.
        </p>
      </section>

      {/* Design Grid */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {designs.map((d) => <DesignCard key={d.href} d={d} />)}
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
