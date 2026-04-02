"use client";
import Link from "next/link";

const sports = [
  { name: "Fußball", icon: "⚽", members: "180+", desc: "Jugend & Erwachsene" },
  { name: "Volleyball", icon: "🏐", members: "60+", desc: "Mixed & Damen" },
  { name: "Basketball", icon: "🏀", members: "45+", desc: "Training & Liga" },
  { name: "Turnen", icon: "🤸", members: "80+", desc: "Alle Altersgruppen" },
  { name: "Leichtathletik", icon: "🏃", members: "35+", desc: "Laufen & Feld" },
  { name: "Zumba", icon: "💃", members: "55+", desc: "Fitness & Spaß" },
];

const news = [
  {
    date: "28. März 2026",
    category: "VEREIN",
    title: "Jahreshauptversammlung 2026",
    excerpt: "Am 15. April findet unsere diesjährige Hauptversammlung statt. Alle Mitglieder sind herzlich eingeladen. Auf der Agenda stehen Neuwahlen und die Vorstellung unserer Zukunftspläne.",
  },
  {
    date: "15. März 2026",
    category: "TRAINING",
    title: "Neue Trainingszeiten ab April",
    excerpt: "Ab dem 1. April gelten neue Trainingszeiten für mehrere Abteilungen. Besonders die Fußball-Jugend und die Zumba-Gruppe sind von den Änderungen betroffen.",
  },
  {
    date: "2. März 2026",
    category: "WILLKOMMEN",
    title: "Willkommen beim TuS Hemmerde",
    excerpt: "Wir freuen uns über 23 neue Mitglieder in diesem Quartal! Besonders im Bereich Kinderturnen und Workout verzeichnen wir starkes Wachstum.",
  },
];

export default function DesignA() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#fff", fontFamily: "'Arial Black', 'Impact', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", backgroundColor: "rgba(15,23,42,0.85)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginRight: "auto" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg, #22c55e, #16a34a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: "#000", boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}>T</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: "-0.02em", lineHeight: 1.1 }}>TuS Hemmerde</div>
              <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, letterSpacing: "0.1em" }}>1919 E.V.</div>
            </div>
          </div>
          {/* Menu */}
          <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>
            {["AKTUELLES", "SPORT", "MITGLIED WERDEN", "KONTAKT"].map((item) => (
              <a key={item} href="#" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background glow effects */}
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }}></div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 10 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(34,197,94,0.3)", padding: "6px 16px", borderRadius: 999, marginBottom: 32, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#22c55e", backgroundColor: "rgba(34,197,94,0.05)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }}></span>
            GEGRÜNDET 1919 · UNNA-HEMMERDE · NRW
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 32, textTransform: "uppercase" }}>
            DEIN<br />
            <span style={{ color: "#22c55e", textShadow: "0 0 40px rgba(34,197,94,0.4)" }}>VEREIN.</span><br />
            DEINE<br />
            <span style={{ WebkitTextStroke: "2px #22c55e", color: "transparent" }}>STÄRKE.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#94a3b8", maxWidth: 480, lineHeight: 1.7, marginBottom: 48, fontFamily: "system-ui, sans-serif", fontWeight: 400 }}>
            Sport verbindet. Seit über 100 Jahren bringen wir Menschen in Hemmerde zusammen — für Fitness, Teamgeist und Gemeinschaft.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#22c55e", color: "#000", fontWeight: 900, fontSize: 15, padding: "16px 32px", borderRadius: 8, textDecoration: "none", letterSpacing: "0.05em", boxShadow: "0 0 30px rgba(34,197,94,0.3)", transition: "box-shadow 0.2s" }}>
              JETZT MITGLIED WERDEN
            </a>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 8, textDecoration: "none", letterSpacing: "0.05em", backdropFilter: "blur(10px)" }}>
              SPORTANGEBOTE →
            </a>
          </div>
        </div>

        {/* Right side decorative number */}
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(8rem, 20vw, 18rem)", fontWeight: 900, color: "rgba(34,197,94,0.04)", lineHeight: 1, userSelect: "none", letterSpacing: "-0.05em" }}>
          1919
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ backgroundColor: "#0f172a", borderTop: "1px solid rgba(34,197,94,0.15)", borderBottom: "1px solid rgba(34,197,94,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { value: "1919", label: "Gegründet" },
            { value: "500+", label: "Mitglieder" },
            { value: "10", label: "Sportarten" },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: "32px 24px", textAlign: "center", borderRight: "1px solid rgba(34,197,94,0.1)" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#22c55e", lineHeight: 1, letterSpacing: "-0.04em", textShadow: "0 0 30px rgba(34,197,94,0.3)" }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: "#64748b", fontWeight: 700, letterSpacing: "0.1em", marginTop: 6, textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SPORTS SECTION */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12 }}>// UNSERE SPORTARTEN</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
              SPORT FÜR<br /><span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)", color: "transparent" }}>JEDEN.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {sports.map((sport) => (
              <div key={sport.name}
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 28, backdropFilter: "blur(10px)", cursor: "pointer", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                className="sport-card-a">
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(34,197,94,0.08) 0%, transparent 60%)", pointerEvents: "none" }}></div>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{sport.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 4 }}>{sport.name}</h3>
                <div style={{ fontSize: 13, color: "#64748b", fontFamily: "system-ui, sans-serif", marginBottom: 16 }}>{sport.desc}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22c55e", boxShadow: "0 0 6px #22c55e" }}></div>
                  <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 700 }}>{sport.members} Mitglieder</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section style={{ padding: "96px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12 }}>// AKTUELLES</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase" }}>NEWS &amp; EVENTS</h2>
            </div>
            <a href="#" style={{ fontSize: 13, color: "#22c55e", fontWeight: 700, textDecoration: "none", letterSpacing: "0.05em" }}>ALLE NACHRICHTEN →</a>
          </div>
          <div style={{ display: "grid", gap: 2 }}>
            {news.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr auto", alignItems: "center", gap: 24, padding: "28px 32px", backgroundColor: i === 0 ? "rgba(34,197,94,0.05)" : "transparent", border: i === 0 ? "1px solid rgba(34,197,94,0.15)" : "1px solid transparent", borderRadius: 8, cursor: "pointer", transition: "background-color 0.2s" }}
                className="news-row-a">
                <div style={{ fontSize: 12, color: "#64748b", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>{item.date}</div>
                <div>
                  <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>{item.category}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>{item.excerpt}</p>
                </div>
                <div style={{ fontSize: 20, color: "#334155" }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)", borderRadius: 20, padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.1)" }}></div>
            <div style={{ position: "absolute", bottom: -60, left: -30, width: 280, height: 280, borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.08)" }}></div>
            <div style={{ position: "relative", zIndex: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", color: "rgba(0,0,0,0.5)", marginBottom: 16 }}>// MITGLIEDSCHAFT</div>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#000", letterSpacing: "-0.03em", textTransform: "uppercase", marginBottom: 16 }}>
                WERDE TEIL<br />DES VEREINS
              </h2>
              <p style={{ fontSize: 18, color: "rgba(0,0,0,0.65)", fontFamily: "system-ui, sans-serif", fontWeight: 400, maxWidth: 480, margin: "0 auto 40px" }}>
                Über 500 Mitglieder. 10 Sportarten. Eine Gemeinschaft. Der TuS Hemmerde ist dein Zuhause.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#" style={{ backgroundColor: "#000", color: "#22c55e", fontWeight: 900, fontSize: 15, padding: "16px 40px", borderRadius: 8, textDecoration: "none", letterSpacing: "0.05em" }}>JETZT ANMELDEN</a>
                <a href="#" style={{ backgroundColor: "rgba(0,0,0,0.15)", color: "#000", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 8, textDecoration: "none" }}>MEHR ERFAHREN</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#0a1020", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg, #22c55e, #16a34a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: "#000" }}>T</div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 16 }}>TuS Hemmerde</div>
                  <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, letterSpacing: "0.1em" }}>1919 E.V.</div>
                </div>
              </div>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, fontFamily: "system-ui, sans-serif", maxWidth: 260 }}>
                Sport, Gemeinschaft und Tradition seit über 100 Jahren in Unna-Hemmerde.
              </p>
            </div>
            {[
              { title: "SPORT", links: ["Fußball", "Volleyball", "Basketball", "Turnen", "Zumba", "Mehr..."] },
              { title: "VEREIN", links: ["Über uns", "Geschichte", "Vorstand", "Mitglied werden"] },
              { title: "KONTAKT", links: ["Sportplatz Hemmerde", "59174 Unna", "info@tushemmerde.de", ""] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 16 }}>{col.title}</div>
                {col.links.map((link) => link && (
                  <div key={link} style={{ fontSize: 14, color: "#475569", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>{link}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#334155", fontFamily: "system-ui, sans-serif" }}>© 2026 TuS Hemmerde 1919 e.V. Alle Rechte vorbehalten.</span>
            <Link href="/" style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}>← Zurück zur Designauswahl</Link>
          </div>
        </div>
      </footer>

      <style>{`
        .sport-card-a:hover { border-color: rgba(34,197,94,0.4) !important; box-shadow: 0 0 30px rgba(34,197,94,0.15); transform: translateY(-2px); }
        .news-row-a:hover { background-color: rgba(255,255,255,0.03) !important; }
      `}</style>
    </div>
  );
}
