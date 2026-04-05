"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

function useInView(
  opts: IntersectionObserverInit = {},
): readonly [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: 0.12, ...opts },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- opts fixed after mount
  return [ref, v] as const;
}

function Fade({
  children,
  delay = 0,
  className = "",
  dir = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  dir?: "up" | "left" | "right" | "none";
}) {
  const [ref, v] = useInView();
  const t = { up: "translateY(36px)", left: "translateX(36px)", right: "translateX(-36px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0, transform: v ? "none" : (t[dir] || t.up),
      transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function PLine({ style = {} }: { style?: CSSProperties }) {
  return <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 20%, rgba(163,186,214,0.2) 50%, rgba(255,255,255,0.05) 80%, transparent)", ...style }} />;
}

function DiamondLogo({ size = 40, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" style={{ opacity, flexShrink: 0 }}>
      <g transform="translate(46, 46)">
        <polygon points="0,-42 42,0 0,42 -42,0" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinejoin="miter"/>
        <line x1="-30" y1="-12" x2="30" y2="-12" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <line x1="0" y1="-42" x2="-30" y2="-12" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <line x1="0" y1="-42" x2="30" y2="-12" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <line x1="0" y1="-12" x2="0" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <polygon points="0,-42 30,-12 42,0" fill="#C9A84C" stroke="#C9A84C" strokeWidth="0.5" strokeLinejoin="miter" opacity="0.85"/>
      </g>
    </svg>
  );
}

function GlassPanel({ style = {} }: { style?: CSSProperties }) {
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, rgba(201,168,76,0.03) 0%, rgba(255,255,255,0.02) 40%, rgba(163,186,214,0.04) 100%)",
      border: "1px solid rgba(201,168,76,0.08)", ...style,
    }}>
      <div style={{ position: "absolute", top: 0, left: "30%", width: "40%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: "30%", left: 0, width: "1px", height: "30%", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.12), transparent)" }} />
    </div>
  );
}

// Photo placeholders that represent the real images
const PLACEHOLDERS = {
  shower: "linear-gradient(145deg, #1a2a40 0%, #243448 30%, #1e2d42 60%, #182838 100%)",
  railing1: "linear-gradient(145deg, #0f1e30 0%, #1a2d44 40%, #142438 100%)",
  railing2: "linear-gradient(145deg, #152536 0%, #1e3348 40%, #162a3c 100%)",
  partition: "linear-gradient(145deg, #1c2c3e 0%, #253a4e 40%, #1a2a3c 100%)",
  balcony: "linear-gradient(145deg, #222e3c 0%, #2a3a4a 40%, #1e2e40 100%)",
};

type PlaceholderKey = keyof typeof PLACEHOLDERS;

type PortfolioEntry = {
  title: string;
  loc: string;
  type: PlaceholderKey;
  desc: string;
  tags: string[];
};

function PhotoBox({
  type,
  style = {},
  children,
  onClick,
}: {
  type: PlaceholderKey;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
}) {
  const bg = PLACEHOLDERS[type] ?? PLACEHOLDERS.shower;
  const boxStyle: CSSProperties = {
    background: bg,
    position: "relative",
    overflow: "hidden",
    ...style,
  };
  const inner = (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.04) 50%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, 50%)",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "9px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.15)",
          whiteSpace: "nowrap",
        }}
      >
        {type === "shower" && "Shower Enclosure"}
        {type === "railing1" && "Glass Railing"}
        {type === "railing2" && "Balcony Railing"}
        {type === "partition" && "Glass Partition"}
        {type === "balcony" && "High Rise Railing"}
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "120%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
          transform: "rotate(-15deg)",
        }}
      />
      {children}
    </>
  );
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          ...boxStyle,
          cursor: "pointer",
          border: "none",
          padding: 0,
          margin: 0,
          font: "inherit",
          color: "inherit",
          display: "block",
          width: "100%",
          textAlign: "inherit",
        }}
      >
        {inner}
      </button>
    );
  }
  return <div style={boxStyle}>{inner}</div>;
}

function Nav({ scrolled }: { scrolled: boolean }) {
  const links = ["Portfolio", "Services", "Process", "About", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "12px 40px" : "20px 40px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(10,22,40,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.08)" : "none",
      transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <DiamondLogo size={44} />
        <div style={{ borderLeft: "1px solid rgba(201,168,76,0.2)", paddingLeft: "16px", height: "36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "var(--font-display), serif", fontSize: "19px", fontWeight: 400, letterSpacing: "5px", color: "#fff", lineHeight: 1.1 }}>EXQUISITE</div>
          <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "8.5px", letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase", marginTop: "2px" }}>Custom Glass</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "2.5px",
            textTransform: "uppercase", color: "rgba(255,255,255,0.45)", textDecoration: "none",
            transition: "color 0.3s", cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
          }}
          >{l}</a>
        ))}
        <a href="tel:9788158354" style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "1px",
          color: "rgba(255,255,255,0.5)", textDecoration: "none",
        }}>(978) 815-8354</a>
        <a href="#contact" style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "2.5px",
          textTransform: "uppercase", color: "#0A1628", background: "#C9A84C",
          padding: "10px 22px", textDecoration: "none", transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#d4b85e";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#C9A84C";
        }}
        >Free Estimate</a>
      </div>
    </nav>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 200); }, []);
  return (
    <section style={{
      position: "relative", minHeight: "100vh", display: "flex",
      flexDirection: "column", justifyContent: "flex-end",
      padding: "0 40px 80px", overflow: "hidden", background: "#0A1628",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(20,35,55,0.8), rgba(10,22,40,1))",
      }} />
      {/* Decorative glass panels */}
      <GlassPanel style={{
        position: "absolute", top: "14%", right: "7%", width: "280px", height: "400px",
        opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
        transition: "all 1.5s cubic-bezier(0.16,1,0.3,1) 1.4s",
      }} />
      <GlassPanel style={{
        position: "absolute", top: "22%", right: "22%", width: "140px", height: "240px",
        opacity: loaded ? 0.6 : 0, transform: loaded ? "none" : "translateY(15px)",
        transition: "all 1.5s cubic-bezier(0.16,1,0.3,1) 1.7s",
      }} />
      <div style={{
        position: "absolute", top: "30%", left: "5%", width: "30%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2) 50%, transparent)",
        opacity: loaded ? 1 : 0, transition: "opacity 2s ease 1.2s",
      }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "820px" }}>
        <div style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "5px",
          textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px",
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(15px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s",
        }}>Custom Architectural Glass &middot; Massachusetts & New Hampshire</div>
        <h1 style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(42px, 6.5vw, 88px)", fontWeight: 400,
          lineHeight: 1.08, color: "#fff", margin: "0 0 28px",
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(30px)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.7s",
        }}>
          Precision Glass,<br/>Handcrafted for<br/>
          <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Your Space</span>
        </h1>
        <p style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.8,
          color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 0 44px",
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 1s",
        }}>
          Custom frameless shower enclosures, glass railings, architectural mirrors, and bespoke glass installations.
          Every piece is measured, fabricated, and installed by our team.
        </p>
        <div style={{
          display: "flex", gap: "20px", alignItems: "center",
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 1.2s",
        }}>
          <a href="#contact" style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: "11px", letterSpacing: "3px",
            textTransform: "uppercase", color: "#0A1628", background: "#C9A84C",
            padding: "16px 36px", textDecoration: "none", transition: "all 0.4s", display: "inline-block",
          }}
          onMouseEnter={(e) => {
            const t = e.currentTarget as HTMLAnchorElement;
            t.style.background = "#d4b85e";
            t.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const t = e.currentTarget as HTMLAnchorElement;
            t.style.background = "#C9A84C";
            t.style.transform = "none";
          }}
          >Request Free Estimate</a>
          <a href="#portfolio" style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: "11px", letterSpacing: "3px",
            textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
            textDecoration: "none", padding: "16px 0",
            borderBottom: "1px solid rgba(201,168,76,0.3)", transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
          }}
          >View Our Work</a>
        </div>
      </div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", borderTop: "1px solid rgba(201,168,76,0.12)",
        opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.6s",
      }}>
        {[
          { n: "100%", l: "Custom Fabricated" },
          { n: "2,400+", l: "Installations" },
          { n: "MA & NH", l: "Service Area" },
          { n: "Lifetime", l: "Warranty" },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: "22px 40px",
            borderRight: i < 3 ? "1px solid rgba(201,168,76,0.08)" : "none",
          }}>
            <div style={{ fontFamily: "var(--font-display), serif", fontSize: "22px", fontWeight: 400, color: "#C9A84C" }}>{s.n}</div>
            <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CraftInterlude() {
  return (
    <section style={{ background: "#0A1628", padding: "100px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)" }} />
      <Fade>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "60px", alignItems: "center", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "right" }}>
            <p style={{
              fontFamily: "var(--font-display), serif", fontSize: "clamp(20px, 2.5vw, 30px)",
              fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0,
            }}>
              Every edge polished.<br/>Every angle calculated.<br/>Every panel inspected.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "1px", height: "60px", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.3))" }} />
            <DiamondLogo size={56} opacity={0.4} />
            <div style={{ width: "1px", height: "60px", background: "linear-gradient(180deg, rgba(201,168,76,0.3), transparent)" }} />
          </div>
          <div>
            <p style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: "13px", lineHeight: 1.9,
              color: "rgba(255,255,255,0.3)", margin: 0,
            }}>
              Glass work demands perfection. A fraction of a millimeter off and it shows. That&apos;s why we measure with laser precision, cut with diamond tools, and temper every panel to exact specification. No shortcuts. No compromises.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState(0);
  const projects: PortfolioEntry[] = [
    { title: "Custom Shower Enclosure", loc: "Residential, MA", type: "shower",
      desc: "Frameless glass shower enclosure custom fitted to a vaulted ceiling with skylight. 3/8\" ultra-clear tempered glass with polished chrome hardware, precision cut to match the roofline angle.",
      tags: ["Frameless Design", "Vaulted Ceiling Fit", "Chrome Hardware"] },
    { title: "Exterior Glass Railing", loc: "New Construction, NH", type: "railing1",
      desc: "Structural glass railing system for a second-story balcony on a coastal new build. Half-inch tempered glass panels with matte black post mount system, engineered for wind load compliance.",
      tags: ["1/2\" Tempered", "Black Post Mount", "Wind Rated"] },
    { title: "Residential Balcony System", loc: "Waterfront, NH", type: "railing2",
      desc: "Full perimeter glass railing with seamless corner transitions. Designed to preserve unobstructed views while meeting all structural code requirements for elevated decks.",
      tags: ["Full Perimeter", "Corner Transitions", "Code Compliant"] },
    { title: "Commercial Glass Partition", loc: "Office, MA", type: "partition",
      desc: "Floor-to-ceiling glass partition walls for a commercial office space with exposed brick. Multi-panel system with minimal framing to maintain visual openness.",
      tags: ["Floor to Ceiling", "Minimal Frame", "Multi Panel"] },
    { title: "High Rise Glass Railing", loc: "Boston, MA", type: "balcony",
      desc: "Glass guard railing installed on a high-rise balcony overlooking Boston Common. Precision engineered for structural integrity at height with a clean base channel mount.",
      tags: ["High Rise Rated", "Base Channel", "City Views"] },
  ];
  const p = projects[active];
  return (
    <section id="portfolio" style={{ background: "#0c1a30", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <Fade>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px" }}>
          <div>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C" }}>Selected Projects</span>
            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#fff", margin: "10px 0 0" }}>
              Our <span style={{ fontStyle: "italic" }}>Work</span>
            </h2>
          </div>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.3)" }}>
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </Fade>
      <Fade delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "0", border: "1px solid rgba(201,168,76,0.1)", minHeight: "480px" }}>
          <PhotoBox type={p.type} style={{ minHeight: "480px" }}>
            <div style={{ position: "absolute", bottom: "24px", left: "24px", fontFamily: "var(--font-display), serif", fontSize: "80px", fontWeight: 400, color: "rgba(201,168,76,0.06)", lineHeight: 1 }}>
              {String(active + 1).padStart(2, "0")}
            </div>
          </PhotoBox>
          <div style={{ padding: "50px 45px", display: "flex", flexDirection: "column", justifyContent: "center", background: "rgba(10,22,40,0.5)" }}>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px" }}>{p.loc}</span>
            <h3 style={{ fontFamily: "var(--font-display), serif", fontSize: "28px", fontWeight: 400, color: "#fff", margin: "0 0 20px", lineHeight: 1.3 }}>{p.title}</h3>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", lineHeight: 1.85, color: "rgba(255,255,255,0.4)", margin: "0 0 28px" }}>{p.desc}</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
              {p.tags.map((t, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "1.5px",
                  textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                  padding: "7px 14px", border: "1px solid rgba(201,168,76,0.15)",
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              {projects.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? "44px" : "20px", height: "2px",
                  background: i === active ? "#C9A84C" : "rgba(255,255,255,0.12)",
                  border: "none", cursor: "pointer", padding: 0, transition: "all 0.4s",
                }} />
              ))}
            </div>
          </div>
        </div>
        {/* Thumbnail strip */}
        <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
          {projects.map((proj, i) => (
            <PhotoBox key={i} type={proj.type} style={{
              flex: 1, height: "64px", cursor: "pointer",
              opacity: i === active ? 1 : 0.35, transition: "opacity 0.4s",
              border: i === active ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent",
            }} onClick={() => setActive(i)} />
          ))}
        </div>
      </Fade>
    </section>
  );
}

function Services() {
  const [hov, setHov] = useState<number | null>(null);
  const svcs = [
    { n: "01", title: "Frameless Shower Enclosures", desc: "Custom measured, cut, and installed for your exact bathroom. From simple single panels to complex multi-panel enclosures with angled ceilings, steam ratings, and specialty hardware.", feats: ["Walk-in & Hinged Doors", "Neo-Angle & Corner Units", "Low Iron Ultra-Clear Glass"] },
    { n: "02", title: "Glass Railings & Guards", desc: "Structural glass railing systems for interior stairs, elevated decks, and balconies. Engineered for code compliance with marine-grade stainless, aluminum, or matte black hardware.", feats: ["Post Mount & Base Shoe", "Interior & Exterior", "Wind & Code Rated"] },
    { n: "03", title: "Architectural Mirrors", desc: "Custom cut mirrors for bathrooms, living spaces, gyms, and commercial settings. Beveled, antiqued, backlit, and oversized options. Precision installed with invisible mounting.", feats: ["Antiqued & Tinted", "Beveled Edge Options", "Backlit Available"] },
    { n: "04", title: "Glass Walls & Partitions", desc: "Interior glass walls and room dividers for residential and commercial spaces. Frameless or channel-mounted systems that preserve light flow while defining separate areas.", feats: ["Floor to Ceiling", "Frosted & Textured", "Office & Residential"] },
  ];
  return (
    <section id="services" style={{ background: "#0A1628", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <Fade>
        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>What We Do</span>
        <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#fff", margin: "0 0 70px" }}>
          Our <span style={{ fontStyle: "italic" }}>Specialties</span>
        </h2>
      </Fade>
      {svcs.map((s, i) => (
        <Fade key={i} delay={i * 0.06}>
          <div onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{
            display: "grid", gridTemplateColumns: "50px 1fr 1fr", gap: "36px",
            padding: "36px 0", alignItems: "start",
            borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "default",
          }}>
            <span style={{ fontFamily: "var(--font-display), serif", fontSize: "14px", color: "rgba(201,168,76,0.4)" }}>{s.n}</span>
            <div>
              <h3 style={{
                fontFamily: "var(--font-display), serif", fontSize: "26px", fontWeight: 400,
                color: hov === i ? "#C9A84C" : "#fff", margin: "0 0 10px", lineHeight: 1.3, transition: "color 0.3s",
              }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.35)", margin: 0, maxWidth: "380px" }}>{s.desc}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px", opacity: hov === i ? 1 : 0.5, transition: "opacity 0.4s" }}>
              {s.feats.map((f, j) => (
                <span key={j} style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "14px", height: "1px", background: "rgba(201,168,76,0.35)" }} />{f}
                </span>
              ))}
            </div>
          </div>
        </Fade>
      ))}
    </section>
  );
}

function WhyECG() {
  const items = [
    { icon: "\u2666", title: "Fully Custom", desc: "No prefab. No off-the-shelf. Every single piece is made to measure for your exact space." },
    { icon: "\u25C7", title: "In-House Team", desc: "We don't subcontract. Our technicians measure, fabricate, and install every project." },
    { icon: "\u2726", title: "Premium Materials", desc: "Domestic glass suppliers, marine-grade hardware, and the highest temper standards in the industry." },
    { icon: "\u25CB", title: "Lifetime Warranty", desc: "We stand behind our work. Every installation is backed by our lifetime craftsmanship guarantee." },
  ];
  return (
    <section style={{ background: "#0c1a30", padding: "100px 40px" }}>
      <PLine style={{ marginBottom: "60px" }} />
      <Fade>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>Why Exquisite</span>
          <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, color: "#fff", margin: 0 }}>
            Built on <span style={{ fontStyle: "italic" }}>Trust & Precision</span>
          </h2>
        </div>
      </Fade>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(201,168,76,0.06)" }}>
        {items.map((item, i) => (
          <Fade key={i} delay={i * 0.08}>
            <div style={{ background: "#0c1a30", padding: "44px 32px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display), serif", fontSize: "28px", color: "rgba(201,168,76,0.3)", marginBottom: "18px" }}>{item.icon}</div>
              <h4 style={{ fontFamily: "var(--font-display), serif", fontSize: "18px", fontWeight: 400, color: "#fff", margin: "0 0 12px" }}>{item.title}</h4>
              <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", lineHeight: 1.75, color: "rgba(255,255,255,0.3)", margin: 0 }}>{item.desc}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "We visit your home or job site, take preliminary measurements, discuss your vision, review hardware and glass options, and provide a detailed estimate. No pressure, no obligation." },
    { n: "02", t: "Template & Measure", d: "Once approved, our technicians return with precision tools to capture every dimension. Angles, slopes, out-of-plumb walls: we account for all of it. This is where custom means custom." },
    { n: "03", t: "Fabrication", d: "Your glass is cut, tempered, and polished in our facility. Every hole, notch, and edge is inspected before it leaves our shop. We use only premium domestic glass suppliers." },
    { n: "04", t: "Installation", d: "Our crew handles the full installation, typically in a single visit. We protect your space, install with care, clean up completely, and walk you through maintenance." },
  ];
  return (
    <section id="process" style={{ background: "#0A1628", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
        <Fade>
          <div style={{ position: "sticky", top: "130px" }}>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>How We Work</span>
            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#fff", margin: "0 0 20px" }}>
              Measured Twice.<br/><span style={{ fontStyle: "italic" }}>Cut Once.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.35)", maxWidth: "340px" }}>
              Glass doesn&apos;t forgive mistakes. That&apos;s why every project follows the same disciplined four-step process, whether it&apos;s a single shower panel or a 200-foot commercial installation.
            </p>
            <div style={{ marginTop: "40px", position: "relative", height: "180px" }}>
              <GlassPanel style={{ position: "absolute", left: 0, top: 0, width: "100px", height: "160px" }} />
              <GlassPanel style={{ position: "absolute", left: "70px", top: "20px", width: "80px", height: "120px" }} />
              <GlassPanel style={{ position: "absolute", left: "120px", top: "40px", width: "60px", height: "100px" }} />
            </div>
          </div>
        </Fade>
        <div>
          {steps.map((s, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div style={{ padding: "36px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-display), serif", fontSize: "13px", color: "rgba(201,168,76,0.45)" }}>{s.n}</span>
                  <h3 style={{ fontFamily: "var(--font-display), serif", fontSize: "24px", fontWeight: 400, color: "#fff", margin: 0 }}>{s.t}</h3>
                </div>
                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", lineHeight: 1.85, color: "rgba(255,255,255,0.35)", margin: 0, paddingLeft: "27px" }}>{s.d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [a, setA] = useState(0);
  const ts = [
    { q: "They turned our master bathroom into something out of a magazine. The frameless enclosure is absolutely flawless. You can't even feel where the glass meets the wall.", n: "Sarah M.", l: "North Andover, MA", p: "Frameless Shower Enclosure" },
    { q: "We interviewed four companies for our deck railing project. ECG was the only one who understood what we wanted: invisible structure, unobstructed views. They delivered exactly that.", n: "David & Anne L.", l: "Hampton, NH", p: "Glass Railing System" },
    { q: "The glass partitions completely transformed our office. The craftsmanship is outstanding, and the install was clean and professional. Highly recommend for any commercial project.", n: "James K.", l: "Haverhill, MA", p: "Glass Partition" },
  ];
  const t = ts[a];
  return (
    <section style={{ background: "#0c1a30", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <Fade>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "44px" }}>What Clients Say</span>
          <div style={{ fontFamily: "var(--font-display), serif", fontSize: "100px", lineHeight: 0.5, color: "rgba(201,168,76,0.08)", marginBottom: "16px" }}>&ldquo;</div>
          <p style={{
            fontFamily: "var(--font-display), serif", fontSize: "22px", fontWeight: 400, lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)", margin: "0 0 36px", fontStyle: "italic", minHeight: "120px",
          }}>{t.q}</p>
          <div style={{ marginBottom: "6px" }}>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", letterSpacing: "2px", color: "#C9A84C" }}>{t.n}</span>
          </div>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>{t.l} &middot; {t.p}</span>
          <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "40px" }}>
            {ts.map((_, i) => (
              <button key={i} onClick={() => setA(i)} style={{
                width: i === a ? "44px" : "20px", height: "2px",
                background: i === a ? "#C9A84C" : "rgba(255,255,255,0.1)",
                border: "none", cursor: "pointer", padding: 0, transition: "all 0.4s",
              }} />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#0A1628", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "start" }}>
        <Fade>
          <div>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>About ECG</span>
            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#fff", margin: "0 0 24px", lineHeight: 1.2 }}>
              Glass Is Our<br/><span style={{ fontStyle: "italic" }}>Only Craft.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
              Exquisite Custom Glass is a precision glass fabrication and installation company based in Haverhill, Massachusetts. We serve homeowners, architects, designers, and contractors across Massachusetts and New Hampshire.
            </p>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.4)", margin: "0 0 36px" }}>
              Every project is fully custom. No templates, no off-the-shelf solutions. Our team handles measurement, fabrication, and installation in-house so nothing is lost between steps.
            </p>
            <div style={{ display: "flex", gap: "36px" }}>
              {["Licensed & Insured", "Locally Owned", "Lifetime Warranty"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    width: "18px", height: "18px", borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-body), sans-serif", fontSize: "8px", color: "#C9A84C",
                  }}>&#10003;</span>
                  <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
        <Fade delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", height: "380px" }}>
            <PhotoBox type="railing1" style={{ borderRadius: "2px" }} />
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "8px" }}>
              <PhotoBox type="partition" style={{ borderRadius: "2px" }} />
              <PhotoBox type="shower" style={{ borderRadius: "2px" }} />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How long does a typical project take from start to finish?", a: "Most residential projects take 2 to 4 weeks from initial consultation to installation. The timeline includes your consultation, precision templating, fabrication, and a final install visit. Larger commercial projects may take longer depending on scope." },
    { q: "What type of glass do you use?", a: "We use tempered safety glass on every project, which is required by building code for shower enclosures and railings. We offer standard clear, low-iron ultra-clear, frosted, tinted, and patterned options. Thickness ranges from 3/8\" for showers to 1/2\" for structural railings." },
    { q: "Do you offer frameless shower doors?", a: "Frameless is our specialty. We design and install fully frameless enclosures with minimal hardware for a clean, modern look. We also offer semi-frameless options for clients who prefer a different aesthetic or have budget considerations." },
    { q: "What areas do you serve?", a: "We serve a 36-mile radius from our base in Haverhill, MA. This covers eastern Massachusetts and southern New Hampshire, including Boston, the North Shore, Merrimack Valley, Seacoast NH, Nashua, Manchester, and surrounding communities." },
    { q: "Can you work with my contractor or designer?", a: "Absolutely. We regularly collaborate with architects, interior designers, and general contractors. We can join site meetings, review blueprints, and coordinate our work with other trades on your project timeline." },
    { q: "What hardware finishes are available?", a: "We carry polished chrome, brushed nickel, matte black, satin brass, oil-rubbed bronze, and polished brass. We source from premium manufacturers and can accommodate custom finish requests." },
    { q: "Is tempered glass safe?", a: "Yes. Tempered glass is up to five times stronger than standard glass, and if it does break, it shatters into small rounded pieces rather than sharp shards. It's required by code for all shower and railing applications." },
    { q: "Do you provide a warranty?", a: "Every installation comes with our lifetime craftsmanship warranty covering the seal, hardware mounting, and fit. Glass carries a manufacturer warranty against defects. We stand behind our work completely." },
  ];
  return (
    <section style={{ background: "#0c1a30", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <Fade>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>Common Questions</span>
            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, color: "#fff", margin: 0 }}>
              Frequently <span style={{ fontStyle: "italic" }}>Asked</span>
            </h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left",
              }}>
                <span style={{
                  fontFamily: "var(--font-display), serif", fontSize: "17px", fontWeight: 400,
                  color: open === i ? "#C9A84C" : "rgba(255,255,255,0.7)", transition: "color 0.3s", paddingRight: "20px",
                }}>{faq.q}</span>
                <span style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: "20px", color: "rgba(201,168,76,0.4)",
                  transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s",
                  flexShrink: 0, width: "24px", textAlign: "center",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? "300px" : "0", overflow: "hidden",
                transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.3s",
                opacity: open === i ? 1 : 0,
              }}>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: "13px", lineHeight: 1.85,
                  color: "rgba(255,255,255,0.35)", margin: "0 0 24px", paddingRight: "44px",
                }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

function ServiceArea() {
  const areas = ["Boston", "Cambridge", "North Shore", "Merrimack Valley", "Haverhill",
    "Newburyport", "Andover", "Nashua NH", "Manchester NH", "Portsmouth NH",
    "Hampton NH", "Seacoast NH", "Lowell", "Lawrence", "Salem", "Gloucester"];
  return (
    <section style={{ background: "#0A1628", padding: "100px 40px" }}>
      <PLine style={{ marginBottom: "60px" }} />
      <Fade>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>Where We Work</span>
            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, color: "#fff", margin: "0 0 20px" }}>
              Serving <span style={{ fontStyle: "italic" }}>MA & NH</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.35)", margin: "0 0 28px", maxWidth: "400px" }}>
              Based in Haverhill, Massachusetts, we serve a 36-mile radius covering eastern Massachusetts and southern New Hampshire.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {areas.map((area, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "1.5px",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
                  padding: "6px 12px", border: "1px solid rgba(255,255,255,0.06)",
                }}>{area}</span>
              ))}
            </div>
          </div>
          <div style={{
            height: "360px", position: "relative",
            background: "linear-gradient(160deg, rgba(12,26,48,0.8), rgba(10,22,40,1))",
            border: "1px solid rgba(201,168,76,0.08)", overflow: "hidden",
          }}>
            <svg width="100%" height="100%" viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="rad" cx="55%" cy="45%">
                  <stop offset="0%" stopColor="rgba(201,168,76,0.08)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx="220" cy="160" r="140" fill="url(#rad)" stroke="rgba(201,168,76,0.15)" strokeWidth="1" strokeDasharray="4,4" />
              <circle cx="220" cy="160" r="4" fill="#C9A84C" />
              <text x="232" y="156" fontFamily="var(--font-body), DM Sans, sans-serif" fontSize="8" fill="rgba(201,168,76,0.6)" letterSpacing="1.5">HAVERHILL</text>
              {[
                { x: 195, y: 265, n: "BOSTON" },
                { x: 120, y: 185, n: "NASHUA" },
                { x: 140, y: 145, n: "MANCHESTER" },
                { x: 285, y: 118, n: "PORTSMOUTH" },
                { x: 278, y: 175, n: "NEWBURYPORT" },
                { x: 145, y: 225, n: "LOWELL" },
              ].map((city, i) => (
                <g key={i}>
                  <circle cx={city.x} cy={city.y} r="2" fill="rgba(255,255,255,0.25)" />
                  <text x={city.x + 6} y={city.y + 3} fontFamily="var(--font-body), DM Sans, sans-serif" fontSize="6" fill="rgba(255,255,255,0.2)" letterSpacing="1">{city.n}</text>
                </g>
              ))}
              <path d="M 340,30 Q 350,100 330,180 Q 310,260 280,340" fill="none" stroke="rgba(163,186,214,0.08)" strokeWidth="40" />
            </svg>
            <div style={{ position: "absolute", bottom: "16px", left: "20px", fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(201,168,76,0.3)" }}>36 Mile Service Radius</div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

function Contact() {
  const [foc, setFoc] = useState<string | null>(null);
  const iStyle = (f: string): CSSProperties => ({
    fontFamily: "var(--font-body), sans-serif", fontSize: "13px", color: "#fff",
    background: "transparent", border: "none",
    borderBottom: `1px solid ${foc === f ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.08)"}`,
    padding: "13px 0", outline: "none", width: "100%", transition: "border-color 0.3s", letterSpacing: "0.5px",
  });
  return (
    <section id="contact" style={{ background: "#0c1a30", padding: "120px 40px" }}>
      <PLine style={{ marginBottom: "70px" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
        <Fade>
          <div>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", display: "block", marginBottom: "10px" }}>Start Your Project</span>
            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#fff", margin: "0 0 24px", lineHeight: 1.2 }}>
              Request a Free<br/><span style={{ fontStyle: "italic" }}>Estimate.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.4)", margin: "0 0 40px", maxWidth: "360px" }}>
              Every project starts with a conversation. Tell us about your space and we&apos;ll schedule a complimentary on-site consultation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {[
                { l: "Phone", v: "(978) 815-8354" },
                { l: "Email", v: "hello@exquisitecustomglass.com" },
                { l: "Based In", v: "Haverhill, Massachusetts" },
              ].map((item, i) => (
                <div key={i}>
                  <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", display: "block", marginBottom: "5px" }}>{item.l}</span>
                  <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{item.v}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
        <Fade delay={0.12}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingTop: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
              {["First Name", "Last Name"].map(label => (
                <div key={label}>
                  <label style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,168,76,0.4)", display: "block", marginBottom: "3px" }}>{label}</label>
                  <input style={iStyle(label)} onFocus={() => setFoc(label)} onBlur={() => setFoc(null)} />
                </div>
              ))}
            </div>
            {["Email", "Phone"].map(label => (
              <div key={label}>
                <label style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,168,76,0.4)", display: "block", marginBottom: "3px" }}>{label}</label>
                <input style={iStyle(label)} onFocus={() => setFoc(label)} onBlur={() => setFoc(null)} />
              </div>
            ))}
            <div>
              <label style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,168,76,0.4)", display: "block", marginBottom: "3px" }}>Project Type</label>
              <select style={{ ...iStyle("type"), appearance: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)" }}
                onFocus={() => setFoc("type")} onBlur={() => setFoc(null)}>
                <option value="">Select a service</option>
                <option value="shower">Shower Enclosure</option>
                <option value="railing">Glass Railing</option>
                <option value="mirror">Custom Mirror</option>
                <option value="partition">Glass Wall / Partition</option>
                <option value="commercial">Commercial Project</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,168,76,0.4)", display: "block", marginBottom: "3px" }}>Tell Us About Your Project</label>
              <textarea rows={4} style={{ ...iStyle("msg"), resize: "vertical" }} onFocus={() => setFoc("msg")} onBlur={() => setFoc(null)} />
            </div>
            <button style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: "11px", letterSpacing: "3px",
              textTransform: "uppercase", color: "#0A1628", background: "#C9A84C",
              padding: "16px 40px", border: "none", cursor: "pointer", alignSelf: "flex-start",
              transition: "all 0.4s", marginTop: "4px",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget as HTMLButtonElement;
              t.style.background = "#d4b85e";
              t.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget as HTMLButtonElement;
              t.style.background = "#C9A84C";
              t.style.transform = "none";
            }}
            >Request Free Estimate</button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#07101f", padding: "50px 40px 36px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <DiamondLogo size={30} opacity={0.5} />
          <div>
            <div style={{ fontFamily: "var(--font-display), serif", fontSize: "14px", letterSpacing: "4px", color: "rgba(255,255,255,0.5)" }}>EXQUISITE</div>
            <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "7px", letterSpacing: "4px", color: "rgba(201,168,76,0.4)", textTransform: "uppercase" }}>Custom Glass</div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
            (978) 815-8354 &middot; hello@exquisitecustomglass.com
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.15)", margin: 0 }}>
            &copy; 2026 Exquisite Custom Glass. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", color: "rgba(255,255,255,0.1)", margin: "4px 0 0" }}>
            Licensed &middot; Insured &middot; Serving MA & NH
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function ECG() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div
      className="ecg-root"
      style={{
        overflowX: "hidden",
        minHeight: "100vh",
        background: "#0A1628",
        color: "#fff",
      }}
    >
      <Nav scrolled={scrolled} />
      <Hero />
      <CraftInterlude />
      <Portfolio />
      <Services />
      <WhyECG />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  );
}