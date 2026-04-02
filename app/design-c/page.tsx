"use client";
import Link from "next/link";

const sports = [
  { name: "Fußball", sub: "Jugend & Erwachsene", members: "180+" },
  { name: "Volleyball", sub: "Mixed & Damen", members: "60+" },
  { name: "Basketball", sub: "Training & Liga", members: "45+" },
  { name: "Turnen", sub: "Alle Altersgruppen", members: "80+" },
  { name: "Leichtathletik", sub: "Laufen & Feld", members: "35+" },
  { name: "Fitness", sub: "Workout & Calisthenics", members: "45+" },
];

const news = [
  {
    date: "28. März 2026",
    category: "Vereinsnachrichten",
    title: "Jahreshauptversammlung 2026",
    excerpt: "Am 15. April findet unsere diesjährige Hauptversammlung statt. Alle Mitglieder sind herzlich eingeladen. Auf der Agenda stehen Neuwahlen und die Vorstellung unserer Zukunftspläne.",
  },
  {
    date: "15. März 2026",
    category: "Training",
    title: "Neue Trainingszeiten ab April",
    excerpt: "Ab dem 1. April gelten neue Trainingszeiten für mehrere Abteilungen. Besonders die Fußball-Jugend und die Zumba-Gruppe sind von den Änderungen betroffen.",
  },
  {
    date: "2. März 2026",
    category: "Mitglieder",
    title: "Willkommen beim TuS Hemmerde",
    excerpt: "Wir freuen uns über 23 neue Mitglieder in diesem Quartal! Besonders im Bereich Kinderturnen verzeichnen wir starkes Wachstum.",
  },
];

export default function DesignC() {
  return (
    <div style={{ backgroundColor: "#f8fafc", color: "#0f172a", fontFamily: "'Georgia', 'Times New Roman', serif", minHeight: "100vh" }}>

      {/* TOP BAR */}
      <div style={{ backgroundColor: "#1d4ed8", padding: "8px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontFamily: "'Arial', sans-serif" }}>📍 Sportplatz Hemmerde, 59174 Unna  ·  ✉️ info@tushemmerde.de</span>
          <span style={{ color: "#d97706", fontSize: 12, fontWeight: 700, fontFamily: "'Arial', sans-serif", letterSpacing: "0.08em" }}>GEGRÜNDET 1919</span>
        </div>
      </div>

      {/* NAV */}
      <nav style={{ backgroundColor: "#fff", borderBottom: "3px solid #1d4ed8", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginRight: "auto" }}>
            {/* Crest placeholder */}
            <div style={{ width: 52, height: 52, borderRadius: 8, background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #d97706", boxShadow: "0 2px 8px rgba(29,78,216,0.25)" }}>
              <div style={{ textAlign: "center", lineHeight: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", fontFamily: "'Arial Black', sans-serif" }}>TuS</div>
                <div style={{ fontSize: 8, color: "#d97706", fontWeight: 700, fontFamily: "'Arial', sans-serif", letterSpacing: "0.05em" }}>1919</div>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#1e3a8a", letterSpacing: "-0.01em", lineHeight: 1.1 }}>TuS Hemmerde 1919 e.V.</div>
              <div style={{ fontSize: 12, color: "#64748b", fontFamily: "'Arial', sans-serif", letterSpacing: "0.05em" }}>Turn- und Sportverein · Unna-Hemmerde</div>
            </div>
          </div>
          {/* Menu */}
          <div style={{ display: "flex", gap: 0, fontFamily: "'Arial', sans-serif" }}>
            {["Aktuelles", "Sport", "Mitglied werden", "Kontakt"].map((item, i) => (
              <a key={item} href="#" style={{ color: "#374151", textDecoration: "none", padding: "0 20px", fontSize: 14, fontWeight: 600, letterSpacing: "0.02em", height: 72, display: "flex", alignItems: "center", borderBottom: "3px solid transparent", marginBottom: -3, transition: "all 0.2s", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#1d4ed8"; e.currentTarget.style.borderBottomColor = "#1d4ed8"; e.currentTarget.style.backgroundColor = "#f0f4ff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.backgroundColor = "transparent"; }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO — Split layout */}
      <section style={{ display: "grid", gridTemplateColumns: "45% 55%", minHeight: "88vh" }}>
        {/* Left: Blue side */}
        <div style={{ backgroundColor: "#1d4ed8", padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {/* Decorative elements */}
          <div style={{ position: "absolute", top: -80, left: -80, width: 320, height: 320, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }}></div>
          <div style={{ position: "absolute", bottom: -60, right: -40, width: 280, height: 280, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }}></div>
          <div style={{ position: "absolute", top: 0, right: 0, width: 4, height: "100%", backgroundColor: "#d97706" }}></div>

          {/* Club crest */}
          <div style={{ width: 96, height: 96, borderRadius: 16, background: "rgba(255,255,255,0.1)", border: "3px solid #d97706", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 40, backdropFilter: "blur(10px)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "'Arial Black', sans-serif", lineHeight: 1 }}>TuS</div>
              <div style={{ fontSize: 11, color: "#d97706", fontWeight: 700, fontFamily: "'Arial', sans-serif", letterSpacing: "0.05em" }}>1919</div>
            </div>
          </div>

          <div style={{ fontSize: 11, color: "#93c5fd", fontFamily: "'Arial', sans-serif", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            Turn- und Sportverein
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 24, letterSpacing: "-0.01em" }}>
            Tradition.<br />
            Gemeinschaft.<br />
            <span style={{ color: "#d97706" }}>Leidenschaft.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#bfdbfe", lineHeight: 1.75, fontFamily: "'Arial', sans-serif", fontWeight: 400, maxWidth: 360, marginBottom: 40 }}>
            Seit 1919 verbindet der TuS Hemmerde Menschen im Herzen von Unna. Mit 10 Sportarten und über 500 Mitgliedern sind wir Ihr Sportverein in der Region.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#" style={{ backgroundColor: "#d97706", color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 4, textDecoration: "none", fontFamily: "'Arial', sans-serif", letterSpacing: "0.03em", boxShadow: "0 4px 12px rgba(217,119,6,0.4)" }}>
              Mitglied werden
            </a>
            <a href="#" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, fontSize: 14, padding: "14px 24px", borderRadius: 4, textDecoration: "none", fontFamily: "'Arial', sans-serif", border: "1px solid rgba(255,255,255,0.2)" }}>
              Mehr erfahren →
            </a>
          </div>
        </div>

        {/* Right: White side with featured content */}
        <div style={{ backgroundColor: "#fff", padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ borderLeft: "4px solid #d97706", paddingLeft: 24, marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#64748b", fontFamily: "'Arial', sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Neueste Nachricht</div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: "#1e3a8a", lineHeight: 1.3, marginBottom: 12 }}>Jahreshauptversammlung 2026</h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, fontFamily: "'Arial', sans-serif", marginBottom: 16 }}>Am 15. April findet unsere diesjährige Hauptversammlung statt. Alle Mitglieder sind herzlich eingeladen.</p>
            <a href="#" style={{ color: "#1d4ed8", fontWeight: 600, textDecoration: "none", fontFamily: "'Arial', sans-serif", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              Weiterlesen <span style={{ color: "#d97706" }}>→</span>
            </a>
          </div>

          {/* Quick facts grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "⚽", label: "10 Sportarten", sub: "Von Fußball bis Zumba" },
              { icon: "👥", label: "500+ Mitglieder", sub: "Aktive Vereinsfamilie" },
              { icon: "🏆", label: "Seit 1919", sub: "Über 100 Jahre Tradition" },
              { icon: "📍", label: "Unna-Hemmerde", sub: "Im Herzen von NRW" },
            ].map((f) => (
              <div key={f.label} style={{ padding: 20, backgroundColor: "#f8fafc", borderRadius: 8, border: "1px solid #e2e8f0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1e3a8a" }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'Arial', sans-serif", marginTop: 2 }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ backgroundColor: "#1d4ed8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { value: "Gegründet 1919", label: "Über 100 Jahre Vereinsgeschichte" },
            { value: "500+ Mitglieder", label: "Aktive Sporttreibende in Hemmerde" },
            { value: "10 Sportarten", label: "Vielfältiges Angebot für alle" },
          ].map((stat, i) => (
            <div key={stat.value} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
              <div style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", marginBottom: 6 }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: "#93c5fd", fontFamily: "'Arial', sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SPORTS SECTION */}
      <section style={{ padding: "96px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ width: 48, height: 4, backgroundColor: "#d97706", borderRadius: 2, marginBottom: 16 }}></div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1e3a8a", letterSpacing: "-0.01em" }}>Unsere Sportabteilungen</h2>
              <p style={{ fontSize: 15, color: "#64748b", fontFamily: "'Arial', sans-serif", marginTop: 8 }}>Aktiv in 10 Disziplinen — für jedes Alter und jede Leistungsstufe.</p>
            </div>
            <a href="#" style={{ color: "#1d4ed8", fontWeight: 600, textDecoration: "none", fontFamily: "'Arial', sans-serif", fontSize: 14, border: "1px solid #1d4ed8", padding: "10px 20px", borderRadius: 4, transition: "all 0.2s" }}>
              Alle Sportarten →
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {sports.map((sport) => (
              <div key={sport.name}
                style={{ backgroundColor: "#fff", borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", cursor: "pointer", transition: "all 0.3s" }}
                className="sport-card-c">
                {/* Blue header stripe */}
                <div style={{ height: 6, background: "linear-gradient(90deg, #1d4ed8, #3b82f6)", borderBottom: "3px solid #d97706" }}></div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1e3a8a", marginBottom: 4 }}>{sport.name}</h3>
                  <div style={{ fontSize: 13, color: "#94a3b8", fontFamily: "'Arial', sans-serif", marginBottom: 20 }}>{sport.sub}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#64748b", fontFamily: "'Arial', sans-serif" }}>{sport.members} Mitglieder</span>
                    <span style={{ fontSize: 13, color: "#1d4ed8", fontWeight: 600, fontFamily: "'Arial', sans-serif" }}>Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION - Newspaper grid */}
      <section style={{ padding: "96px 24px", backgroundColor: "#fff", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ borderBottom: "3px solid #1d4ed8", paddingBottom: 16, marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontSize: 11, color: "#64748b", fontFamily: "'Arial', sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Vereinsnachrichten</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1e3a8a", letterSpacing: "-0.01em" }}>Aktuelles &amp; Berichte</h2>
            </div>
            <a href="#" style={{ color: "#1d4ed8", fontWeight: 600, textDecoration: "none", fontFamily: "'Arial', sans-serif", fontSize: 13 }}>Alle Nachrichten →</a>
          </div>

          {/* 3-column newspaper grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", gap: 0 }}>
            {news.map((item, i) => (
              <>
                <div key={item.title} style={{ padding: i === 0 ? "0 32px 0 0" : i === 2 ? "0 0 0 32px" : "0 32px" }}>
                  <div style={{ display: "inline-block", backgroundColor: "#1d4ed8", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 2, marginBottom: 12, fontFamily: "'Arial', sans-serif", letterSpacing: "0.06em" }}>
                    {item.category.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'Arial', sans-serif", marginBottom: 10 }}>{item.date}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1e3a8a", lineHeight: 1.3, marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, fontFamily: "'Arial', sans-serif", marginBottom: 16 }}>{item.excerpt}</p>
                  <a href="#" style={{ color: "#d97706", fontWeight: 600, textDecoration: "none", fontFamily: "'Arial', sans-serif", fontSize: 13 }}>Weiterlesen →</a>
                </div>
                {i < 2 && <div key={`div-${i}`} style={{ backgroundColor: "#e2e8f0" }}></div>}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section style={{ padding: "96px 24px", backgroundColor: "#1e3a8a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ width: 48, height: 4, backgroundColor: "#d97706", borderRadius: 2, marginBottom: 20 }}></div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.01em" }}>
              Werden Sie Mitglied des TuS Hemmerde 1919 e.V.
            </h2>
            <p style={{ fontSize: 17, color: "#93c5fd", fontFamily: "'Arial', sans-serif", lineHeight: 1.75, marginBottom: 36 }}>
              Treten Sie einer aktiven Gemeinschaft bei, die seit über 100 Jahren Sport und Zusammenhalt in Unna-Hemmerde lebt. Für Einzelpersonen, Familien und Firmen.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
              {["10 Sportarten zur Auswahl", "Über 500 aktive Mitglieder", "Familienmitgliedschaft möglich", "Professionelle Trainer"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "#bfdbfe", fontFamily: "'Arial', sans-serif", fontSize: 15, marginBottom: 12 }}>
                  <span style={{ color: "#d97706", fontWeight: 700, fontSize: 18 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" style={{ backgroundColor: "#d97706", color: "#fff", fontWeight: 700, fontSize: 15, padding: "16px 36px", borderRadius: 4, textDecoration: "none", fontFamily: "'Arial', sans-serif", letterSpacing: "0.02em", boxShadow: "0 4px 16px rgba(217,119,6,0.4)" }}>
                Jetzt Mitglied werden
              </a>
              <a href="#" style={{ backgroundColor: "transparent", color: "#93c5fd", fontWeight: 600, fontSize: 15, padding: "16px 28px", borderRadius: 4, textDecoration: "none", fontFamily: "'Arial', sans-serif", border: "1px solid rgba(147,197,253,0.4)" }}>
                Beitragsinfo →
              </a>
            </div>
          </div>
          {/* Right side form/card */}
          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 48, boxShadow: "0 16px 48px rgba(0,0,0,0.2)", border: "2px solid #d97706" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e3a8a", marginBottom: 8 }}>Mitgliedschaft anfragen</h3>
            <p style={{ fontSize: 14, color: "#64748b", fontFamily: "'Arial', sans-serif", marginBottom: 32 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            {["Name", "E-Mail-Adresse", "Gewünschte Sportart"].map((placeholder) => (
              <div key={placeholder} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "#374151", fontWeight: 600, fontFamily: "'Arial', sans-serif", marginBottom: 6 }}>{placeholder}</div>
                <div style={{ height: 44, borderRadius: 6, border: "1px solid #cbd5e1", backgroundColor: "#f8fafc" }}></div>
              </div>
            ))}
            <div style={{ height: 44, borderRadius: 6, backgroundColor: "#1d4ed8", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Arial', sans-serif", marginTop: 8, cursor: "pointer", boxShadow: "0 4px 12px rgba(29,78,216,0.3)" }}>
              Anfrage senden
            </div>
            <div style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", fontFamily: "'Arial', sans-serif", marginTop: 16 }}>
              Oder schreiben Sie uns: info@tushemmerde.de
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0f172a", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 8, background: "linear-gradient(135deg, #1d4ed8, #1e40af)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #d97706" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", fontFamily: "'Arial Black', sans-serif", lineHeight: 1 }}>TuS</div>
                    <div style={{ fontSize: 8, color: "#d97706", fontWeight: 700, fontFamily: "'Arial', sans-serif" }}>1919</div>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>TuS Hemmerde 1919 e.V.</div>
                  <div style={{ fontSize: 12, color: "#475569", fontFamily: "'Arial', sans-serif" }}>Turn- und Sportverein</div>
                </div>
              </div>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, fontFamily: "'Arial', sans-serif", maxWidth: 260 }}>
                Tradition, Sport und Gemeinschaft seit über 100 Jahren in Unna-Hemmerde.
              </p>
            </div>
            {[
              { title: "Sport", links: ["Fußball", "Volleyball", "Basketball", "Turnen", "Leichtathletik", "Mehr..."] },
              { title: "Verein", links: ["Über uns", "Geschichte", "Vorstand", "Satzung", "Mitglied werden"] },
              { title: "Kontakt", links: ["Sportplatz Hemmerde", "59174 Unna", "info@tushemmerde.de", ""] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: 12, color: "#d97706", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Arial', sans-serif", marginBottom: 16 }}>{col.title}</div>
                {col.links.map((link) => link && (
                  <div key={link} style={{ fontSize: 14, color: "#475569", marginBottom: 8, fontFamily: "'Arial', sans-serif" }}>{link}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#334155", fontFamily: "'Arial', sans-serif" }}>© 2026 TuS Hemmerde 1919 e.V. · Alle Rechte vorbehalten.</span>
            <Link href="/" style={{ fontSize: 13, color: "#475569", textDecoration: "none", fontFamily: "'Arial', sans-serif" }}>← Zurück zur Designauswahl</Link>
          </div>
        </div>
      </footer>

      <style>{`
        .sport-card-c:hover { border-color: #1d4ed8 !important; box-shadow: 0 8px 24px rgba(29,78,216,0.15) !important; transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
