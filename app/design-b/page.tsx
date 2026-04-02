"use client";
import Link from "next/link";

const sports = [
  { name: "Fußball", emoji: "⚽", members: "180+", color: "#f59e0b" },
  { name: "Volleyball", emoji: "🏐", members: "60+", color: "#f97316" },
  { name: "Basketball", emoji: "🏀", members: "45+", color: "#ef4444" },
  { name: "Turnen", emoji: "🤸", members: "80+", color: "#8b5cf6" },
  { name: "Kinderturnen", emoji: "🧒", members: "55+", color: "#ec4899" },
  { name: "Zumba", emoji: "💃", members: "55+", color: "#22c55e" },
];

const news = [
  {
    date: "28. März 2026",
    tag: "Verein",
    tagColor: "#f59e0b",
    title: "Jahreshauptversammlung 2026",
    excerpt: "Am 15. April findet unsere diesjährige Hauptversammlung statt. Alle Mitglieder sind herzlich eingeladen. Auf der Agenda stehen Neuwahlen und die Vorstellung unserer Zukunftspläne für den Verein.",
    featured: true,
  },
  {
    date: "15. März 2026",
    tag: "Training",
    tagColor: "#f97316",
    title: "Neue Trainingszeiten ab April",
    excerpt: "Ab dem 1. April gelten neue Trainingszeiten für mehrere Abteilungen. Besonders die Fußball-Jugend ist betroffen.",
    featured: false,
  },
  {
    date: "2. März 2026",
    tag: "Willkommen",
    tagColor: "#22c55e",
    title: "Willkommen beim TuS Hemmerde",
    excerpt: "Wir freuen uns über 23 neue Mitglieder in diesem Quartal! Besonders im Bereich Kinderturnen.",
    featured: false,
  },
];

export default function DesignB() {
  return (
    <div style={{ backgroundColor: "#faf7f2", color: "#1c1917", fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ backgroundColor: "#fff", borderBottom: "2px solid #fef3c7", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginRight: "auto" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #f59e0b, #f97316)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "0 4px 12px rgba(245,158,11,0.3)" }}>🏅</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#1c1917", lineHeight: 1.1 }}>TuS Hemmerde</div>
              <div style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600 }}>1919 e.V. · Unna-Hemmerde</div>
            </div>
          </div>
          {/* Menu */}
          <div style={{ display: "flex", gap: 28, fontSize: 15, fontWeight: 600 }}>
            {[
              { label: "Aktuelles", href: "#" },
              { label: "Sport", href: "#" },
              { label: "Mitglied werden", href: "#" },
              { label: "Kontakt", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} style={{ color: "#57534e", textDecoration: "none", padding: "4px 0", borderBottom: "2px solid transparent", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#f59e0b"; e.currentTarget.style.borderBottomColor = "#f59e0b"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#57534e"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
                {item.label}
              </a>
            ))}
          </div>
          <a href="#" style={{ marginLeft: 24, backgroundColor: "#f59e0b", color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 22px", borderRadius: 20, textDecoration: "none", boxShadow: "0 4px 12px rgba(245,158,11,0.3)" }}>
            Mitglied werden
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #faf7f2 0%, #fef3c7 40%, #fed7aa 70%, #fbbf24 100%)", minHeight: "88vh", display: "flex", alignItems: "center" }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", backgroundColor: "rgba(251,191,36,0.15)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: -120, left: "30%", width: 400, height: 400, borderRadius: "50%", backgroundColor: "rgba(249,115,22,0.1)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", top: "20%", right: "15%", width: 60, height: 60, borderRadius: "50%", backgroundColor: "#f59e0b", opacity: 0.3 }}></div>
        <div style={{ position: "absolute", top: "60%", right: "25%", width: 30, height: 30, borderRadius: "50%", backgroundColor: "#f97316", opacity: 0.4 }}></div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", border: "2px solid #fde68a", padding: "8px 20px", borderRadius: 99, marginBottom: 28, fontSize: 14, fontWeight: 600, color: "#92400e", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              🏆 Seit über 100 Jahren in Hemmerde
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15, color: "#1c1917", marginBottom: 24, letterSpacing: "-0.02em" }}>
              Dein Zuhause<br />
              für Sport &amp;<br />
              <span style={{ color: "#f59e0b" }}>Gemeinschaft</span>
            </h1>
            <p style={{ fontSize: 18, color: "#78716c", lineHeight: 1.75, marginBottom: 40, maxWidth: 440 }}>
              Beim TuS Hemmerde findet jeder seinen Platz. 10 Sportarten, über 500 Mitglieder und jede Menge Spaß warten auf dich! 😊
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#f59e0b", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 99, textDecoration: "none", boxShadow: "0 8px 24px rgba(245,158,11,0.35)" }}>
                Dabei sein! 🎉
              </a>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#1c1917", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 99, textDecoration: "none", border: "2px solid #e7e5e4", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                Sport entdecken →
              </a>
            </div>
          </div>

          {/* Photo placeholder */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.15)", background: "linear-gradient(135deg, #fbbf24 0%, #f97316 40%, #ef4444 70%, #8b5cf6 100%)", height: 480, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 72 }}>⚽🏐🏀</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 18, textAlign: "center", opacity: 0.9 }}>TuS Hemmerde<br />in Aktion</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Foto-Galerie coming soon</div>
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: -20, left: -20, backgroundColor: "#fff", borderRadius: 20, padding: "20px 24px", boxShadow: "0 12px 32px rgba(0,0,0,0.12)", border: "2px solid #fde68a" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#f59e0b", lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: 13, color: "#78716c", fontWeight: 600 }}>Glückliche Mitglieder</div>
            </div>
            <div style={{ position: "absolute", top: -16, right: -16, backgroundColor: "#fff", borderRadius: 16, padding: "14px 18px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", border: "2px solid #fed7aa" }}>
              <div style={{ fontSize: 22 }}>🏆</div>
              <div style={{ fontSize: 11, color: "#78716c", fontWeight: 600, marginTop: 4 }}>Seit 1919</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ backgroundColor: "#fff", borderTop: "2px solid #fef3c7", borderBottom: "2px solid #fef3c7", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { value: "1919", label: "Gegründet", emoji: "📅" },
            { value: "500+", label: "Mitglieder", emoji: "👥" },
            { value: "10", label: "Sportarten", emoji: "🏅" },
          ].map((stat, i) => (
            <div key={stat.label} style={{ padding: "36px 24px", textAlign: "center", borderRight: i < 2 ? "2px solid #fef3c7" : "none" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.emoji}</div>
              <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f59e0b", lineHeight: 1, letterSpacing: "-0.03em" }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: "#a8a29e", fontWeight: 600, marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SPORTS SECTION */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fef3c7", color: "#92400e", fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 99, marginBottom: 16 }}>
              🏃 Unsere Sportabteilungen
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#1c1917", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Für jeden ist etwas dabei! 🎯
            </h2>
            <p style={{ fontSize: 17, color: "#78716c", maxWidth: 480, margin: "0 auto" }}>
              Von Fußball bis Zumba — entdecke unser vielfältiges Angebot für Jung und Alt.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {sports.map((sport) => (
              <div key={sport.name}
                style={{ backgroundColor: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", border: "2px solid transparent", cursor: "pointer", transition: "all 0.3s" }}
                className="sport-card-b">
                <div style={{ width: 64, height: 64, borderRadius: 16, backgroundColor: sport.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 20 }}>
                  {sport.emoji}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1c1917", marginBottom: 8 }}>{sport.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 99, backgroundColor: sport.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: sport.color }}>
                    {sport.members.replace("+", "")}
                  </div>
                  <span style={{ fontSize: 14, color: "#78716c" }}>{sport.members} Mitglieder</span>
                </div>
                <div style={{ marginTop: 20, height: 3, borderRadius: 99, backgroundColor: sport.color + "25", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "70%", borderRadius: 99, backgroundColor: sport.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section style={{ padding: "96px 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fef3c7", color: "#92400e", fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 99, marginBottom: 16 }}>
                📰 Vereinsnachrichten
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1c1917", letterSpacing: "-0.02em" }}>Aktuelles aus dem Verein</h2>
            </div>
            <a href="#" style={{ color: "#f59e0b", fontWeight: 700, textDecoration: "none", fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>Alle Nachrichten →</a>
          </div>

          {/* Magazine layout: 1 large + 2 small */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 20 }}>
            {/* Featured */}
            <div style={{ gridRow: "1 / 3", backgroundColor: "#faf7f2", borderRadius: 24, overflow: "hidden", border: "2px solid #fef3c7", cursor: "pointer" }} className="news-card-b">
              <div style={{ height: 240, background: "linear-gradient(135deg, #fbbf24 0%, #f97316 60%, #ef4444 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
                📋
              </div>
              <div style={{ padding: 32 }}>
                <div style={{ display: "inline-block", backgroundColor: news[0].tagColor + "20", color: news[0].tagColor, fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 99, marginBottom: 16 }}>
                  {news[0].tag}
                </div>
                <div style={{ fontSize: 13, color: "#a8a29e", marginBottom: 10 }}>{news[0].date}</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1c1917", marginBottom: 12, letterSpacing: "-0.01em" }}>{news[0].title}</h3>
                <p style={{ fontSize: 15, color: "#78716c", lineHeight: 1.7 }}>{news[0].excerpt}</p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, color: "#f59e0b", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>Mehr lesen →</a>
              </div>
            </div>
            {/* Small news */}
            {news.slice(1).map((item, i) => (
              <div key={i} style={{ backgroundColor: "#faf7f2", borderRadius: 20, padding: 28, border: "2px solid #fef3c7", cursor: "pointer", display: "flex", gap: 20, alignItems: "flex-start" }} className="news-card-b">
                <div style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: item.tagColor + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                  {i === 0 ? "📅" : "👋"}
                </div>
                <div>
                  <div style={{ display: "inline-block", backgroundColor: item.tagColor + "20", color: item.tagColor, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 99, marginBottom: 8 }}>
                    {item.tag}
                  </div>
                  <div style={{ fontSize: 12, color: "#a8a29e", marginBottom: 6 }}>{item.date}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1c1917", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.6 }}>{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #f97316 100%)", borderRadius: 28, padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 24px 60px rgba(245,158,11,0.25)" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)" }}></div>
            <div style={{ position: "absolute", bottom: -80, left: -40, width: 320, height: 320, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)" }}></div>
            <div style={{ position: "relative", zIndex: 10 }}>
              <div style={{ fontSize: 52, marginBottom: 20 }}>🤝</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16 }}>
                Werde Teil unserer Familie!
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
                Beim TuS Hemmerde bist du nicht nur Sportler — du bist Teil einer lebendigen Gemeinschaft. Wir freuen uns auf dich! 😊
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#" style={{ backgroundColor: "#fff", color: "#f59e0b", fontWeight: 800, fontSize: 16, padding: "16px 40px", borderRadius: 99, textDecoration: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
                  Jetzt Mitglied werden 🎉
                </a>
                <a href="#" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 99, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                  Alle Sportarten →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#fff7ed", borderTop: "2px solid #fde68a", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #f59e0b, #f97316)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏅</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 17, color: "#1c1917" }}>TuS Hemmerde</div>
                  <div style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600 }}>1919 e.V.</div>
                </div>
              </div>
              <p style={{ color: "#a8a29e", fontSize: 15, lineHeight: 1.7, maxWidth: 260 }}>
                Sport, Gemeinschaft und Tradition seit über 100 Jahren in Unna-Hemmerde. 💚
              </p>
            </div>
            {[
              { title: "Sport", links: ["⚽ Fußball", "🏐 Volleyball", "🏀 Basketball", "🤸 Turnen", "💃 Zumba"] },
              { title: "Verein", links: ["Über uns", "Geschichte", "Vorstand", "Mitglied werden"] },
              { title: "Kontakt", links: ["📍 Sportplatz Hemmerde", "59174 Unna", "✉️ info@tushemmerde.de", ""] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontWeight: 700, color: "#f59e0b", fontSize: 14, marginBottom: 16 }}>{col.title}</div>
                {col.links.map((link) => link && (
                  <div key={link} style={{ fontSize: 14, color: "#a8a29e", marginBottom: 8 }}>{link}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "2px solid #fde68a", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#a8a29e" }}>© 2026 TuS Hemmerde 1919 e.V. · Mit ❤️ aus Hemmerde</span>
            <Link href="/" style={{ fontSize: 13, color: "#f59e0b", textDecoration: "none", fontWeight: 600 }}>← Zurück zur Designauswahl</Link>
          </div>
        </div>
      </footer>

      <style>{`
        .sport-card-b:hover { border-color: #f59e0b !important; box-shadow: 0 12px 32px rgba(245,158,11,0.15) !important; transform: translateY(-3px); }
        .news-card-b:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); transition: all 0.3s; }
      `}</style>
    </div>
  );
}
