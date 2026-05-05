"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Aktuelles", href: "#aktuelles" },
  {
    label: "Sport",
    href: "#sport",
    children: [
      { label: "Badminton", href: "#sport" },
      { label: "Yoga", href: "#sport" },
      { label: "Wassergymnastik", href: "#sport" },
      { label: "Pilates", href: "#sport" },
      { label: "Skifreizeiten", href: "#sport" },
      { label: "Sommersport", href: "#sport" },
    ],
  },
  {
    label: "Verein",
    href: "#verein",
    children: [
      { label: "Über uns", href: "#verein" },
      { label: "Fusion 2026", href: "#verein" },
      { label: "Vorstand", href: "#verein" },
    ],
  },
  { label: "Kontakt", href: "#kontakt" },
];

const sports = [
  {
    icon: "🏸",
    label: "Badminton",
    sub: "Mo & Mi · Sporthalle Herder-Str.",
    desc: "Für alle Altersklassen — Einsteiger bis Ligaspieler. Flexible Hallenzeiten in Unna.",
    color: "from-yellow-900 to-slate-950",
  },
  {
    icon: "🧘",
    label: "Yoga",
    sub: "Do 18:00 Uhr · PWG Unna",
    desc: "Kursleitung: Katrin Koning. Jeden Donnerstag ab 18 Uhr in der Dreifachhalle des PWG.",
    color: "from-purple-900 to-slate-950",
  },
  {
    icon: "🏊",
    label: "Wassergymnastik",
    sub: "Do · Schwimmsporthalle Bergenkamp",
    desc: "Sanfte Bewegung im Wasser für Gesundheit und Fitness. Offen für alle Altersgruppen.",
    color: "from-blue-900 to-slate-950",
  },
  {
    icon: "🤸",
    label: "Pilates",
    sub: "Fr 18:30–19:30 · Falkschule",
    desc: "Gezieltes Körpertraining für Kraft und Flexibilität. Kleine Gruppen, große Wirkung.",
    color: "from-pink-900 to-slate-950",
  },
  {
    icon: "⛷️",
    label: "Skifreizeiten",
    sub: "Zell am See · Dolomiti Superski",
    desc: "Jährliche Vereinsreisen — Ski-Tradition seit der Gründung des Ski-Clubs Unna 1963.",
    color: "from-sky-900 to-slate-950",
  },
  {
    icon: "🚴",
    label: "Sommersport",
    sub: "Mountainbiken · Wandern",
    desc: "Outdoor-Aktivitäten rund um Unna — Radtouren und Wanderungen den ganzen Sommer.",
    color: "from-green-900 to-slate-950",
  },
];

const news = [
  {
    date: "1. April 2026",
    category: "VEREIN",
    title: "Sport Club Unna gegründet!",
    excerpt: "Ski-Club Unna und Badminton-Sport-Club Unna fusionieren zum Sport Club Unna. Ein neues Kapitel für den Vereinssport in Unna beginnt — mit langer Tradition seit 1963.",
  },
  {
    date: "17. März 2026",
    category: "EINLADUNG",
    title: "Jahreshauptversammlung 2026",
    excerpt: "Die JHV fand am 17.03.2026 um 18 Uhr in der Neuen Schmiede statt. Der neue Vorstand für den Sport Club Unna wurde gewählt.",
  },
  {
    date: "Oktober 2025",
    category: "SPORT",
    title: "Neue Yoga-Trainerin: Katrin Koning",
    excerpt: "Seit Herbst 2025 leitet Katrin Koning unsere Yoga-Kurse. Jeden Donnerstag ab 18:00 Uhr in der Dreifachhalle des PWG — Einsteiger herzlich willkommen!",
  },
  {
    date: "2025",
    category: "SPORT",
    title: "Skifreizeit Zell am See — Plätze verfügbar",
    excerpt: "Die jährliche Vereinsreise führt uns wieder nach Zell am See. Anmeldung für Mitglieder ab sofort möglich. 80+ Mitglieder fahren jedes Jahr mit.",
  },
];

export default function Design15() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "system-ui, Arial, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <header className="bg-[#cc0000] text-white w-full sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0 min-w-0">
              <Image
                src="/sc-unna-logo.png"
                alt="Sport Club Unna"
                width={44}
                height={44}
                className="w-9 h-9 md:w-11 md:h-11 object-contain bg-white rounded-full p-0.5 shadow-md flex-shrink-0"
              />
              <div className="leading-tight min-w-0">
                <div className="font-black text-base md:text-lg uppercase tracking-tight leading-none">Sport Club Unna</div>
                <div className="text-xs font-semibold opacity-80 uppercase tracking-widest leading-none hidden sm:block">Gegründet 1963</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-white/20 rounded transition-colors flex items-center gap-1 min-h-[44px]"
                    >
                      {link.label}
                      <svg className={`w-3 h-3 opacity-70 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 8l4.5 4.5L14.5 8H5.5z" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 bg-white text-[#111] shadow-xl min-w-[200px] border-t-2 border-[#cc0000] z-50">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-sm font-semibold hover:bg-[#cc0000] hover:text-white transition-colors border-b border-gray-100 last:border-0 min-h-[44px] flex items-center"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-white/20 rounded transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#kontakt"
                className="ml-2 bg-white text-[#cc0000] font-black uppercase text-sm px-4 py-2 hover:bg-gray-100 transition-colors rounded shadow min-h-[44px] flex items-center"
              >
                Mitglied werden
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center hover:bg-white/20 rounded transition-colors flex-shrink-0"
              onClick={() => { setMobileOpen(!mobileOpen); setOpenDropdown(null); }}
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <span className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 bg-white rounded-full transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </span>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="border-t border-white/20 pt-2 pb-4 overflow-y-auto max-h-[75vh]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-2 py-3 font-semibold uppercase text-sm hover:bg-white/20 rounded min-h-[44px]"
                      >
                        <span>{link.label}</span>
                        <svg className={`w-3 h-3 opacity-70 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 8l4.5 4.5L14.5 8H5.5z" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ${openDropdown === link.label ? "max-h-96" : "max-h-0"}`}>
                        <div className="pl-4 border-l-2 border-white/30 ml-2 mb-1">
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-2 py-2.5 text-sm font-medium opacity-90 hover:opacity-100 hover:bg-white/10 rounded min-h-[44px] flex items-center"
                              onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-2 py-3 font-semibold uppercase text-sm hover:bg-white/20 rounded min-h-[44px] flex items-center"
                      onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="mt-3 px-2">
                <a
                  href="#kontakt"
                  className="block bg-white text-[#cc0000] font-black uppercase text-sm px-4 py-3 text-center rounded min-h-[44px] flex items-center justify-center"
                  onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                >
                  Mitglied werden
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[580px] flex items-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#cc0000]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 sm:pb-16 w-full">
          <div className="flex items-end gap-4 sm:gap-6">
            <Image
              src="/sc-unna-logo.png"
              alt="Sport Club Unna"
              width={96}
              height={96}
              className="hidden sm:block w-20 h-20 md:w-24 md:h-24 object-contain bg-white rounded-full p-2 shadow-2xl border-2 border-white/30 flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="inline-block bg-[#cc0000] text-white text-xs font-black uppercase tracking-widest px-3 py-1 mb-3">
                Ski-Club + Badminton-Sport-Club Unna · Fusion 2026
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-none mb-2" style={{ letterSpacing: "-0.03em" }}>
                Sport Club<br />Unna
              </h1>
              <p className="text-base sm:text-xl font-bold text-white/60 uppercase tracking-widest mb-6">
                Gemeinsam. Aktiv. Seit 1963.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#kontakt"
                  className="bg-[#cc0000] hover:bg-[#a30000] transition-colors text-white font-black py-3.5 px-7 text-sm shadow-xl uppercase tracking-wide min-h-[44px] flex items-center justify-center"
                >
                  Mitglied werden
                </a>
                <a
                  href="#sport"
                  className="bg-white/10 hover:bg-white/20 transition-colors text-white font-black py-3.5 px-7 text-sm border-2 border-white/30 shadow-xl uppercase tracking-wide backdrop-blur-sm min-h-[44px] flex items-center justify-center"
                >
                  Unsere Sportarten →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPORTARTEN ── */}
      <section className="bg-[#f4f4f4] py-16" id="sport">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="text-[#cc0000] text-xs font-black uppercase tracking-widest mb-1">Was wir bieten</div>
            <h2 className="text-3xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>Unsere Sportarten</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((s) => (
              <div
                key={s.label}
                className={`group bg-gradient-to-br ${s.color} overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="p-6 pb-4 flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{s.icon}</div>
                  <div className="min-w-0">
                    <div className="inline-block bg-[#cc0000] text-white text-xs font-black uppercase px-2 py-0.5 mb-2">
                      {s.sub}
                    </div>
                    <h3 className="text-white font-black text-xl uppercase leading-tight">{s.label}</h3>
                  </div>
                </div>
                <div className="px-6 pb-6 border-t-2 border-[#cc0000] pt-4">
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                  <span className="text-[#cc0000] font-bold text-sm uppercase mt-3 inline-block group-hover:underline">
                    Mehr erfahren →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEREIN INFO ── */}
      <section className="py-16 bg-white" id="verein">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#cc0000] text-xs font-black uppercase tracking-widest mb-2">Unsere Geschichte</div>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
                Tradition seit 1963
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Der Ski-Club Unna und der Badminton-Sport-Club Unna haben sich 2026 zum <strong>Sport Club Unna</strong> zusammengeschlossen. Was vereint bleibt: jahrzehntelange Leidenschaft für Sport und ein starker Gemeinschaftsgeist.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Mit über 500 Mitgliedern und 6 aktiven Sportabteilungen bieten wir für jede Altersgruppe das passende Angebot — vom Badminton-Nachwuchs bis zur Ski-Freizeit für Familien.
              </p>
              <a
                href="#kontakt"
                className="inline-block bg-[#cc0000] hover:bg-[#a30000] transition-colors text-white font-black uppercase px-8 py-3 shadow"
              >
                Jetzt Mitglied werden
              </a>
            </div>
            <div className="bg-[#111] text-white p-8">
              <div className="text-[#cc0000] text-xs font-black uppercase tracking-widest mb-6">Sport Club Unna in Zahlen</div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Mitglieder" },
                  { value: "6+", label: "Sportarten" },
                  { value: "1963", label: "Gegründet" },
                  { value: "2026", label: "Fusion" },
                ].map((s) => (
                  <div key={s.label} className="border-l-4 border-[#cc0000] pl-4">
                    <p className="text-3xl font-black text-white leading-none">{s.value}</p>
                    <p className="text-white/40 text-xs uppercase font-semibold tracking-widest mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="py-16 bg-[#f4f4f4]" id="aktuelles">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="text-[#cc0000] text-xs font-black uppercase tracking-widest mb-1">Vereinsnachrichten</div>
            <h2 className="text-3xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>Neuigkeiten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {news.map((item, i) => (
              <div
                key={i}
                className="group flex gap-0 bg-white hover:bg-gray-50 transition-colors overflow-hidden shadow-sm hover:shadow cursor-pointer"
              >
                <div className="w-2 bg-[#cc0000] flex-shrink-0" />
                <div className="flex flex-col justify-between p-5 min-w-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#cc0000] text-white text-xs font-black uppercase px-2 py-0.5">{item.category}</span>
                      <span className="text-gray-400 text-xs font-semibold">{item.date}</span>
                    </div>
                    <h3 className="font-black text-base leading-tight group-hover:text-[#cc0000] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </div>
                  <span className="text-[#cc0000] font-bold text-xs uppercase mt-3">Weiterlesen →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111] py-16" id="kontakt">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#cc0000] text-xs font-black uppercase tracking-widest mb-2">Werde Teil der Familie</div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            Gemeinsam aktiv seit 1963
          </h2>
          <p className="text-white/50 text-base font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            Ob Badminton, Yoga, Ski oder Sommersport — beim Sport Club Unna ist jeder willkommen, der Freude an Bewegung und Gemeinschaft hat.
          </p>
          <div className="flex justify-center gap-6 sm:gap-12 mb-10 flex-wrap">
            {[
              { value: "500+", label: "Mitglieder" },
              { value: "6+", label: "Sportarten" },
              { value: "60+", label: "Jahre Tradition" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-white/40 text-xs uppercase font-semibold tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@scunna.de"
              className="bg-[#cc0000] hover:bg-[#a30000] transition-colors text-white font-black uppercase px-10 py-4 shadow-lg"
            >
              Jetzt Mitglied werden
            </a>
            <a
              href="mailto:info@scunna.de"
              className="bg-white/10 hover:bg-white/20 transition-colors text-white font-black uppercase px-10 py-4 border border-white/20"
            >
              info@scunna.de →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/sc-unna-logo.png" alt="Sport Club Unna" width={36} height={36} className="w-9 h-9 object-contain bg-white rounded-full p-0.5 flex-shrink-0" />
              <h4 className="font-black text-base uppercase tracking-wide">Sport Club Unna</h4>
            </div>
            <p className="font-semibold text-white/90">Sport Club Unna e.V.</p>
            <p className="text-white/70 mt-1">Stralsunder Straße 63</p>
            <p className="text-white/70">59427 Unna</p>
            <p className="mt-3 text-[#cc0000] font-bold">Gemeinschaft seit 1963.</p>
          </div>
          <div>
            <h4 className="font-black text-base uppercase tracking-wide mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white/80">
              <li>E-Mail: <a href="mailto:info@scunna.de" className="text-[#cc0000] font-bold hover:underline">info@scunna.de</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Mitglied werden →</a></li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#cc0000] rounded flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#cc0000] rounded flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-base uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              {[
                { label: "Startseite", href: "#" },
                { label: "Aktuelles", href: "#aktuelles" },
                { label: "Sportarten", href: "#sport" },
                { label: "Vereinsgeschichte", href: "#verein" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#cc0000] text-white text-center py-3 text-xs font-semibold">
          <p>© 2026 Sport Club Unna e.V. —{" "}
            <Link href="/" className="underline hover:no-underline">Zurück zur Designauswahl</Link>
          </p>
        </div>
      </footer>

    </div>
  );
}
