import { useState } from "react";

// ─── Design Tokens ───
const T = {
  primary: "#4F46E5",
  secondary: "#10B981",
  bg: "#F3F4F6",
  text: "#1F2937",
  textSec: "#6B7280",
  danger: "#EF4444",
  white: "#FFFFFF",
  border: "#E5E7EB",
  dark: "#111827",
};

// ─── Shared Components ───
const WireLabel = ({ children, style }) => (
  <div style={{ fontSize: 10, color: T.textSec, fontFamily: "monospace", letterSpacing: 0.5, textTransform: "uppercase", ...style }}>
    {children}
  </div>
);

const ScreenID = ({ id, title }) => (
  <div style={{ position: "absolute", top: -28, left: 0, display: "flex", gap: 8, alignItems: "baseline" }}>
    <span style={{ fontSize: 11, fontWeight: 700, color: T.primary, fontFamily: "monospace", background: "#EEF2FF", padding: "2px 6px", borderRadius: 4 }}>{id}</span>
    <span style={{ fontSize: 11, color: T.textSec, fontFamily: "monospace" }}>{title}</span>
  </div>
);

const MobileFrame = ({ id, title, children, dark }) => (
  <div style={{ position: "relative", width: 375, minHeight: 812, background: dark ? T.dark : T.white, borderRadius: 20, overflow: "hidden", border: `1px solid ${T.border}`, flexShrink: 0, display: "flex", flexDirection: "column" }}>
    <ScreenID id={id} title={title} />
    {/* Status bar */}
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 12, color: dark ? "#fff" : T.text, flexShrink: 0 }}>
      <span style={{ fontWeight: 600 }}>9:41</span>
      <div style={{ display: "flex", gap: 4 }}>
        <div style={{ width: 16, height: 10, border: `1px solid ${dark ? "#fff" : T.text}`, borderRadius: 2, position: "relative" }}>
          <div style={{ position: "absolute", right: 1, top: 1, bottom: 1, left: 3, background: dark ? "#fff" : T.text, borderRadius: 1 }} />
        </div>
      </div>
    </div>
    {children}
  </div>
);

const DesktopFrame = ({ id, title, children }) => (
  <div style={{ position: "relative", width: 1440, height: 900, background: T.white, borderRadius: 12, overflow: "hidden", border: `1px solid ${T.border}`, flexShrink: 0, display: "flex" }}>
    <ScreenID id={id} title={title} />
    {children}
  </div>
);

const Sidebar = ({ active }) => {
  const items = ["Dashboard", "Job Listings", "Candidates", "Messages", "Analytics", "Company Profile", "Settings"];
  return (
    <div style={{ width: 220, background: T.dark, color: "#fff", display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "20px 16px", borderBottom: "1px solid #374151" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>J</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Acme Corp</div>
            <div style={{ fontSize: 10, color: T.textSec }}>Employer</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "12px 0", flex: 1 }}>
        {items.map((item) => (
          <div key={item} style={{ padding: "10px 16px", fontSize: 13, cursor: "pointer", background: active === item ? "rgba(79,70,229,0.2)" : "transparent", color: active === item ? "#fff" : "#9CA3AF", borderLeft: active === item ? `3px solid ${T.primary}` : "3px solid transparent", fontWeight: active === item ? 600 : 400 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ padding: "16px", borderTop: "1px solid #374151", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#374151" }} />
        <div style={{ fontSize: 12, color: "#9CA3AF" }}>John Doe</div>
      </div>
    </div>
  );
};

const Btn = ({ children, primary, small, style, danger }) => (
  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: small ? "6px 12px" : "10px 20px", borderRadius: 8, fontSize: small ? 12 : 14, fontWeight: 600, background: danger ? T.danger : primary ? T.primary : "transparent", color: danger ? "#fff" : primary ? "#fff" : T.primary, border: primary || danger ? "none" : `1.5px solid ${T.primary}`, cursor: "pointer", ...style }}>
    {children}
  </div>
);

const Chip = ({ children, active, color }) => (
  <div style={{ display: "inline-flex", padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 500, background: active ? (color || T.primary) + "18" : T.bg, color: active ? (color || T.primary) : T.textSec, border: `1px solid ${active ? (color || T.primary) + "40" : T.border}` }}>
    {children}
  </div>
);

const Badge = ({ children, color }) => (
  <span style={{ display: "inline-flex", padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: (color || T.secondary) + "18", color: color || T.secondary }}>
    {children}
  </span>
);

// ─── A-6: Main Canvas Default ───
const ScreenA6 = () => {
  const jobOrbs = [
    { x: 120, y: 180, label: "Barista", color: "#F59E0B", size: 22 },
    { x: 260, y: 140, label: "Cashier", color: "#10B981", size: 20 },
    { x: 80, y: 320, label: "Designer", color: "#8B5CF6", size: 24 },
    { x: 300, y: 280, label: "Driver", color: "#EF4444", size: 18 },
    { x: 190, y: 400, label: "Cook", color: "#F59E0B", size: 20 },
    { x: 50, y: 460, label: "Dev", color: "#3B82F6", size: 22 },
    { x: 310, y: 430, label: "Nurse", color: "#EC4899", size: 20 },
    { x: 150, y: 540, label: "Clerk", color: "#10B981", size: 18 },
    { x: 270, y: 520, label: "Tutor", color: "#8B5CF6", size: 16 },
    { x: 90, y: 600, label: "Mover", color: "#F59E0B", size: 20 },
  ];

  return (
    <MobileFrame id="A-6" title="Main Canvas — Default" dark>
      {/* Map grid background */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Grid lines for map placeholder */}
        <svg width="375" height="768" style={{ position: "absolute", top: 0, left: 0, opacity: 0.08 }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="375" y2={i * 40} stroke="#fff" strokeWidth="1" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="768" stroke="#fff" strokeWidth="1" />
          ))}
        </svg>

        {/* Street-like lines */}
        <svg width="375" height="768" style={{ position: "absolute", top: 0, left: 0, opacity: 0.12 }}>
          <line x1="0" y1="200" x2="375" y2="200" stroke="#fff" strokeWidth="2" />
          <line x1="0" y1="450" x2="375" y2="450" stroke="#fff" strokeWidth="2" />
          <line x1="120" y1="0" x2="120" y2="768" stroke="#fff" strokeWidth="2" />
          <line x1="280" y1="0" x2="280" y2="768" stroke="#fff" strokeWidth="2" />
          <line x1="0" y1="300" x2="200" y2="300" stroke="#fff" strokeWidth="1.5" />
          <line x1="200" y1="100" x2="200" y2="500" stroke="#fff" strokeWidth="1.5" />
        </svg>

        {/* Jobs nearby pill */}
        <div style={{ position: "absolute", top: 12, left: 16, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "6px 14px", fontSize: 12, color: "#fff", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.secondary }} />
          14 jobs nearby
        </div>

        {/* Notification bell */}
        <div style={{ position: "absolute", top: 12, right: 16, width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 16 }}>🔔</span>
          <div style={{ position: "absolute", top: 4, right: 4, width: 14, height: 14, borderRadius: "50%", background: T.danger, fontSize: 8, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>3</div>
        </div>

        {/* Discovery radius */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 240, height: 240, borderRadius: "50%", border: "1.5px dashed rgba(79,70,229,0.3)" }} />

        {/* Attraction line to nearest high-score job */}
        <svg width="375" height="768" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
          <path d="M 188 384 Q 150 280 120 180" stroke={T.primary} strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
        </svg>

        {/* Job orbs */}
        {jobOrbs.map((job, i) => (
          <div key={i} style={{ position: "absolute", left: job.x - job.size / 2, top: job.y, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: job.size, height: job.size, borderRadius: "50%", background: job.color, boxShadow: `0 0 12px ${job.color}60`, opacity: 0.85 }} />
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.6)", marginTop: 3, whiteSpace: "nowrap" }}>{job.label}</span>
          </div>
        ))}

        {/* User orb (center) */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: T.primary, boxShadow: `0 0 20px ${T.primary}80, 0 0 40px ${T.primary}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
          </div>
          {/* Pulse ring */}
          <div style={{ position: "absolute", width: 60, height: 60, borderRadius: "50%", border: `2px solid ${T.primary}40`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>You</span>
        </div>

        {/* List view button */}
        <div style={{ position: "absolute", bottom: 80, right: 16, width: 40, height: 40, borderRadius: 12, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
          ☰
        </div>

        {/* Bottom hint */}
        <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
          Flick to explore • Tap orb for preferences • Pinch to zoom
        </div>
      </div>
    </MobileFrame>
  );
};

// ─── A-7: Main Canvas — Job Proximity Popup ───
const ScreenA7 = () => (
  <MobileFrame id="A-7" title="Main Canvas — Job Popup" dark>
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      {/* Simplified map grid */}
      <svg width="375" height="768" style={{ position: "absolute", top: 0, left: 0, opacity: 0.08 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="375" y2={i * 40} stroke="#fff" strokeWidth="1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="768" stroke="#fff" strokeWidth="1" />
        ))}
      </svg>

      <svg width="375" height="768" style={{ position: "absolute", top: 0, left: 0, opacity: 0.12 }}>
        <line x1="0" y1="200" x2="375" y2="200" stroke="#fff" strokeWidth="2" />
        <line x1="120" y1="0" x2="120" y2="768" stroke="#fff" strokeWidth="2" />
        <line x1="280" y1="0" x2="280" y2="768" stroke="#fff" strokeWidth="2" />
      </svg>

      {/* Bright attraction line */}
      <svg width="375" height="768" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
        <path d="M 188 400 Q 200 350 220 310" stroke={T.primary} strokeWidth="2.5" fill="none" opacity="0.7" />
        <path d="M 188 400 Q 200 350 220 310" stroke={T.primary} strokeWidth="6" fill="none" opacity="0.15" />
      </svg>

      {/* Job orb (target) */}
      <div style={{ position: "absolute", left: 208, top: 280, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#F59E0B", boxShadow: "0 0 16px rgba(245,158,11,0.6)" }} />
      </div>

      {/* Proximity popup card */}
      <div style={{ position: "absolute", left: 112, top: 180, width: 200, background: "rgba(255,255,255,0.95)", borderRadius: 12, padding: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Barista</div>
        <div style={{ fontSize: 11, color: T.textSec, marginTop: 2 }}>Café Helsinki</div>
        <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: T.text }}>€14-18/hr</span>
          <span style={{ fontSize: 10, color: T.textSec }}>•</span>
          <span style={{ fontSize: 11, color: T.textSec }}>0.3km</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <Badge color={T.primary}>87% match</Badge>
          <span style={{ fontSize: 10, color: T.primary }}>Tap for details →</span>
        </div>
        {/* Arrow pointing to orb */}
        <div style={{ position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)", width: 12, height: 12, background: "rgba(255,255,255,0.95)" }} />
      </div>

      {/* User orb */}
      <div style={{ position: "absolute", top: 380, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: T.primary, boxShadow: `0 0 20px ${T.primary}80` }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
      </div>

      {/* Same UI elements */}
      <div style={{ position: "absolute", top: 12, left: 16, background: "rgba(0,0,0,0.6)", borderRadius: 20, padding: "6px 14px", fontSize: 12, color: "#fff", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.secondary }} />
        14 jobs nearby
      </div>

      <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
        Flick to explore • Tap orb for preferences • Pinch to zoom
      </div>
    </div>
  </MobileFrame>
);

// ─── A-8: Job Detail Bottom Sheet ───
const ScreenA8 = () => (
  <MobileFrame id="A-8" title="Job Detail — Bottom Sheet" dark>
    {/* Dimmed canvas peek */}
    <div style={{ height: 240, position: "relative", background: "rgba(17,24,39,0.7)" }}>
      <svg width="375" height="240" style={{ position: "absolute", opacity: 0.05 }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 40} x2="375" y2={i * 40} stroke="#fff" strokeWidth="1" />
        ))}
      </svg>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 30, height: 30, borderRadius: "50%", background: T.primary, opacity: 0.4, boxShadow: `0 0 20px ${T.primary}50` }} />
      <div style={{ position: "absolute", top: "40%", left: "60%", width: 18, height: 18, borderRadius: "50%", background: "#F59E0B", opacity: 0.5 }} />
    </div>

    {/* Bottom sheet */}
    <div style={{ flex: 1, background: T.white, borderRadius: "24px 24px 0 0", marginTop: -24, position: "relative", overflow: "auto", display: "flex", flexDirection: "column" }}>
      {/* Drag handle */}
      <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 6px" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "#D1D5DB" }} />
      </div>

      <div style={{ padding: "0 20px 100px", flex: 1 }}>
        {/* Company header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: T.bg, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: T.textSec }}>C</div>
          <div>
            <div style={{ fontSize: 13, color: T.textSec, display: "flex", alignItems: "center", gap: 6 }}>
              Café Helsinki <Badge color={T.primary}>Verified</Badge>
            </div>
          </div>
        </div>

        <div style={{ fontSize: 22, fontWeight: 700, color: T.text, marginBottom: 12 }}>Barista</div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <Chip active color="#F59E0B">Food Service</Chip>
          <Chip active>0.3km away</Chip>
          <Chip active color={T.secondary}>€14-18/hr</Chip>
        </div>

        {/* Match score */}
        <div style={{ background: T.bg, borderRadius: 12, padding: 14, marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Match Score</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: T.primary }}>87%</span>
          </div>
          <div style={{ height: 6, background: "#E5E7EB", borderRadius: 3 }}>
            <div style={{ width: "87%", height: "100%", background: T.primary, borderRadius: 3 }} />
          </div>
        </div>

        {/* About */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 8 }}>About this job</div>
          <div style={{ fontSize: 13, color: T.textSec, lineHeight: 1.6 }}>
            Join our friendly team at Café Helsinki in the heart of the city. We're looking for an experienced barista who is passionate about coffee and customer service. Flexible hours available.
          </div>
        </div>

        {/* Requirements */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 8 }}>Requirements</div>
          <div style={{ fontSize: 13, color: T.textSec, lineHeight: 1.8 }}>
            • 1+ years barista experience{"\n"}
            • Knowledge of espresso techniques{"\n"}
            • Customer-facing communication skills
          </div>
        </div>

        {/* Pay & Schedule */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 8 }}>Pay & Schedule</div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: T.text }}>💰 €14-18/hr</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: T.text }}>🕐 Part-time, Flexible</div>
          </div>
        </div>

        {/* Location mini map */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 8 }}>Location</div>
          <div style={{ height: 100, background: T.bg, borderRadius: 12, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.textSec, fontSize: 12 }}>
            📍 Map preview
          </div>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: T.white, borderTop: `1px solid ${T.border}`, padding: "12px 20px 28px", display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn primary style={{ width: "100%", padding: "14px 0" }}>Match</Btn>
        <div style={{ textAlign: "center", fontSize: 13, color: T.textSec, cursor: "pointer" }}>Not Interested</div>
      </div>
    </div>
  </MobileFrame>
);

// ─── A-9: Preferences Bottom Sheet ───
const ScreenA9 = () => {
  const categories = ["Retail", "Food Service", "Warehouse", "Delivery", "Office", "Creative", "Tech", "Healthcare"];
  const activeCategories = [1, 4, 6];

  return (
    <MobileFrame id="A-9" title="Preferences — Bottom Sheet" dark>
      {/* Dimmed canvas */}
      <div style={{ height: 200, position: "relative", background: "rgba(17,24,39,0.7)" }}>
        <svg width="375" height="200" style={{ position: "absolute", opacity: 0.05 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 40} x2="375" y2={i * 40} stroke="#fff" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* Bottom sheet */}
      <div style={{ flex: 1, background: T.white, borderRadius: "24px 24px 0 0", marginTop: -24, position: "relative", overflow: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 6px" }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "#D1D5DB" }} />
        </div>

        <div style={{ padding: "0 20px 100px", flex: 1 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 20 }}>Your Preferences</div>

          {/* Categories */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 10 }}>Categories</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {categories.map((cat, i) => (
                <div key={cat} style={{ padding: "8px 16px", borderRadius: 20, fontSize: 13, background: activeCategories.includes(i) ? T.primary + "15" : T.bg, color: activeCategories.includes(i) ? T.primary : T.textSec, border: `1.5px solid ${activeCategories.includes(i) ? T.primary : T.border}`, fontWeight: activeCategories.includes(i) ? 600 : 400 }}>
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Pay Range */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Pay Range</span>
              <span style={{ fontSize: 12, color: T.primary, fontWeight: 600 }}>€15 – €45/hr</span>
            </div>
            <div style={{ height: 4, background: "#E5E7EB", borderRadius: 2, position: "relative" }}>
              <div style={{ position: "absolute", left: "15%", right: "55%", height: "100%", background: T.primary, borderRadius: 2 }} />
              <div style={{ position: "absolute", left: "15%", top: -4, width: 12, height: 12, borderRadius: "50%", background: T.primary, border: "2px solid #fff", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
              <div style={{ position: "absolute", left: "45%", top: -4, width: 12, height: 12, borderRadius: "50%", background: T.primary, border: "2px solid #fff", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
            </div>
          </div>

          {/* Max Distance */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Max Distance</span>
              <span style={{ fontSize: 12, color: T.primary, fontWeight: 600 }}>15km</span>
            </div>
            <div style={{ height: 4, background: "#E5E7EB", borderRadius: 2, position: "relative" }}>
              <div style={{ position: "absolute", left: 0, width: "30%", height: "100%", background: T.primary, borderRadius: 2 }} />
              <div style={{ position: "absolute", left: "30%", top: -4, width: 12, height: 12, borderRadius: "50%", background: T.primary, border: "2px solid #fff", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
            </div>
          </div>

          {/* Experience Level */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 10 }}>Experience Level</div>
            <div style={{ display: "flex", gap: 8 }}>
              {["Entry", "Mid", "Senior"].map((lvl, i) => (
                <div key={lvl} style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRadius: 8, fontSize: 13, background: i === 0 ? T.primary : T.bg, color: i === 0 ? "#fff" : T.textSec, border: `1.5px solid ${i === 0 ? T.primary : T.border}`, fontWeight: i === 0 ? 600 : 400 }}>
                  {lvl}
                </div>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 10 }}>Job Type</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Full-time", "Part-time", "Contract", "Gig"].map((type, i) => (
                <div key={type} style={{ padding: "8px 16px", borderRadius: 20, fontSize: 13, background: [1, 3].includes(i) ? T.primary + "15" : T.bg, color: [1, 3].includes(i) ? T.primary : T.textSec, border: `1.5px solid ${[1, 3].includes(i) ? T.primary : T.border}`, fontWeight: [1, 3].includes(i) ? 600 : 400 }}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apply button */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: T.white, borderTop: `1px solid ${T.border}`, padding: "12px 20px 28px" }}>
          <Btn primary style={{ width: "100%", padding: "14px 0" }}>Apply Preferences</Btn>
        </div>
      </div>
    </MobileFrame>
  );
};

// ─── B-4: Employer Dashboard ───
const ScreenB4 = () => (
  <DesktopFrame id="B-4" title="Dashboard — Overview">
    <Sidebar active="Dashboard" />
    <div style={{ flex: 1, padding: 32, overflow: "auto", background: T.bg }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.text }}>Dashboard</div>
        <Btn primary>+ Create New Job</Btn>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
        {[
          { label: "Active Listings", value: "12", color: T.primary },
          { label: "Total Impressions", value: "3,847", sub: "This week", color: "#3B82F6" },
          { label: "Pending Matches", value: "28", color: "#F59E0B" },
          { label: "Response Rate", value: "84%", color: T.secondary },
        ].map((stat) => (
          <div key={stat.label} style={{ flex: 1, background: T.white, borderRadius: 12, padding: 20, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 12, color: T.textSec, marginBottom: 8 }}>{stat.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            {stat.sub && <div style={{ fontSize: 11, color: T.textSec, marginTop: 4 }}>{stat.sub}</div>}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {/* Recent Activity */}
        <div style={{ flex: 1.2, background: T.white, borderRadius: 12, padding: 20, border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 16 }}>Recent Activity</div>
          {[
            { text: "New match request from Alex M. for Barista role", time: "5 min ago", dot: T.primary },
            { text: "Sarah K. sent you a message", time: "22 min ago", dot: "#3B82F6" },
            { text: "Driver listing reached 500 impressions", time: "1 hr ago", dot: T.secondary },
            { text: "Match with James P. expired (Cook)", time: "3 hr ago", dot: T.textSec },
            { text: "New match request from Liisa T. for Cashier role", time: "5 hr ago", dot: T.primary },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 4 ? `1px solid ${T.bg}` : "none" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.dot, marginTop: 5, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: T.text }}>{item.text}</div>
                <div style={{ fontSize: 11, color: T.textSec, marginTop: 2 }}>{item.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Performing */}
        <div style={{ flex: 0.8, background: T.white, borderRadius: 12, padding: 20, border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 16 }}>Top Performing Listings</div>
          {[
            { title: "Barista", impressions: 1240, pct: 100 },
            { title: "Delivery Driver", impressions: 890, pct: 72 },
            { title: "Cashier", impressions: 640, pct: 52 },
          ].map((job, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                <span style={{ color: T.text, fontWeight: 500 }}>{job.title}</span>
                <span style={{ color: T.textSec }}>{job.impressions}</span>
              </div>
              <div style={{ height: 6, background: T.bg, borderRadius: 3 }}>
                <div style={{ width: `${job.pct}%`, height: "100%", background: T.primary, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DesktopFrame>
);

// ─── B-5: Job Listings ───
const ScreenB5 = () => {
  const jobs = [
    { title: "Barista", cat: "Food Service", status: "Active", location: "Kamppi, Helsinki", pay: "€14-18/hr", impressions: 1240, matches: 15, date: "Jan 8, 2026" },
    { title: "Delivery Driver", cat: "Delivery", status: "Active", location: "Kallio, Helsinki", pay: "€16-20/hr", impressions: 890, matches: 12, date: "Jan 5, 2026" },
    { title: "Cashier", cat: "Retail", status: "Active", location: "Sörnäinen, Helsinki", pay: "€12-15/hr", impressions: 640, matches: 8, date: "Jan 3, 2026" },
    { title: "Line Cook", cat: "Food Service", status: "Paused", location: "Punavuori, Helsinki", pay: "€15-19/hr", impressions: 320, matches: 5, date: "Dec 28, 2025" },
    { title: "Warehouse Worker", cat: "Warehouse", status: "Closed", location: "Pasila, Helsinki", pay: "€14-16/hr", impressions: 210, matches: 3, date: "Dec 15, 2025" },
  ];
  const statusColor = { Active: T.secondary, Paused: "#F59E0B", Closed: T.textSec };

  return (
    <DesktopFrame id="B-5" title="Job Listings — List View">
      <Sidebar active="Job Listings" />
      <div style={{ flex: 1, padding: 32, overflow: "auto", background: T.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: T.text }}>Job Listings</div>
          <Btn primary>+ Create New Job</Btn>
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <div style={{ padding: "8px 14px", borderRadius: 8, border: `1px solid ${T.border}`, background: T.white, fontSize: 13, color: T.textSec }}>Status: All ▾</div>
          <div style={{ padding: "8px 14px", borderRadius: 8, border: `1px solid ${T.border}`, background: T.white, fontSize: 13, color: T.textSec }}>Category: All ▾</div>
          <div style={{ flex: 1, padding: "8px 14px", borderRadius: 8, border: `1px solid ${T.border}`, background: T.white, fontSize: 13, color: T.textSec }}>🔍 Search listings...</div>
        </div>

        {/* Table */}
        <div style={{ background: T.white, borderRadius: 12, border: `1px solid ${T.border}`, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 0.8fr 1.5fr 1fr 0.8fr 0.8fr 1fr 0.8fr", padding: "12px 16px", background: T.bg, borderBottom: `1px solid ${T.border}`, fontSize: 11, fontWeight: 600, color: T.textSec, textTransform: "uppercase", letterSpacing: 0.5 }}>
            <div>Job Title</div><div>Category</div><div>Status</div><div>Location</div><div>Pay</div><div>Views</div><div>Matches</div><div>Created</div><div>Actions</div>
          </div>
          {jobs.map((job, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 0.8fr 1.5fr 1fr 0.8fr 0.8fr 1fr 0.8fr", padding: "14px 16px", borderBottom: i < jobs.length - 1 ? `1px solid ${T.bg}` : "none", fontSize: 13, alignItems: "center" }}>
              <div style={{ fontWeight: 600, color: T.text }}>{job.title}</div>
              <div style={{ color: T.textSec }}>{job.cat}</div>
              <div><Badge color={statusColor[job.status]}>{job.status}</Badge></div>
              <div style={{ color: T.textSec, fontSize: 12 }}>{job.location}</div>
              <div style={{ color: T.text }}>{job.pay}</div>
              <div style={{ color: T.textSec }}>{job.impressions}</div>
              <div style={{ color: T.text, fontWeight: 500 }}>{job.matches}</div>
              <div style={{ color: T.textSec, fontSize: 12 }}>{job.date}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ fontSize: 12, color: T.primary, cursor: "pointer" }}>Edit</span>
                <span style={{ fontSize: 12, color: T.textSec, cursor: "pointer" }}>⋮</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
          {[1, 2, 3].map((p) => (
            <div key={p} style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, background: p === 1 ? T.primary : T.white, color: p === 1 ? "#fff" : T.textSec, border: `1px solid ${p === 1 ? T.primary : T.border}` }}>{p}</div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
};

// ─── B-6: Create / Edit Job ───
const ScreenB6 = () => (
  <DesktopFrame id="B-6" title="Create / Edit Job">
    <Sidebar active="Job Listings" />
    <div style={{ flex: 1, padding: 32, overflow: "auto", background: T.bg }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.text }}>Create New Job</div>
        <div style={{ display: "flex", gap: 12 }}>
          <Btn>Save Draft</Btn>
          <Btn primary>Publish</Btn>
        </div>
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {/* Left column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: T.white, borderRadius: 12, padding: 24, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 16 }}>Job Details</div>
            {[
              { label: "Job Title", placeholder: "e.g. Barista, Delivery Driver" },
              { label: "Category", placeholder: "Select category ▾", type: "select" },
              { label: "Subcategory", placeholder: "Select subcategory ▾", type: "select" },
            ].map((field) => (
              <div key={field.label} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>{field.label}</div>
                <div style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${T.border}`, fontSize: 13, color: T.textSec, background: T.white }}>{field.placeholder}</div>
              </div>
            ))}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>Description</div>
              <div style={{ height: 120, borderRadius: 8, border: `1px solid ${T.border}`, padding: 14, fontSize: 13, color: T.textSec }}>Write a compelling job description...</div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>Requirements</div>
              <div style={{ height: 80, borderRadius: 8, border: `1px solid ${T.border}`, padding: 14, fontSize: 13, color: T.textSec }}>• Add requirement...</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>Skills</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Chip active>Coffee</Chip>
                <Chip active>Customer Service</Chip>
                <div style={{ padding: "4px 10px", borderRadius: 20, fontSize: 11, border: `1px dashed ${T.border}`, color: T.textSec }}>+ Add skill</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ width: 420, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: T.white, borderRadius: 12, padding: 24, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 16 }}>Location</div>
            <div style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${T.border}`, fontSize: 13, color: T.textSec, marginBottom: 12 }}>📍 Enter address...</div>
            <div style={{ height: 160, background: T.bg, borderRadius: 8, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.textSec, fontSize: 12 }}>
              Interactive map — drag pin
            </div>
          </div>

          <div style={{ background: T.white, borderRadius: 12, padding: 24, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 16 }}>Pay & Schedule</div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 8 }}>Pay Type</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Hourly", "Salary", "Project"].map((t, i) => (
                  <div key={t} style={{ flex: 1, padding: "8px 0", textAlign: "center", borderRadius: 8, fontSize: 12, background: i === 0 ? T.primary : T.bg, color: i === 0 ? "#fff" : T.textSec, border: `1px solid ${i === 0 ? T.primary : T.border}` }}>{t}</div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>Min (€/hr)</div>
                <div style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${T.border}`, fontSize: 13, color: T.textSec }}>14</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>Max (€/hr)</div>
                <div style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${T.border}`, fontSize: 13, color: T.textSec }}>18</div>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 8 }}>Schedule</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Full-time", "Part-time", "Flexible"].map((s, i) => (
                  <Chip key={s} active={i === 1}>{s}</Chip>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 8 }}>Experience Level</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Entry", "Mid", "Senior"].map((l, i) => (
                  <div key={l} style={{ flex: 1, padding: "8px 0", textAlign: "center", borderRadius: 8, fontSize: 12, background: i === 0 ? T.primary + "15" : T.bg, color: i === 0 ? T.primary : T.textSec, border: `1px solid ${i === 0 ? T.primary + "40" : T.border}` }}>{l}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 6 }}>Listing Duration</div>
              <div style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${T.border}`, fontSize: 13, color: T.textSec }}>30 days ▾</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DesktopFrame>
);

// ─── B-8: Candidates View ───
const ScreenB8 = () => {
  const candidates = [
    { name: "Alex M.", score: 92, skills: ["Barista", "Latte Art", "POS Systems"], exp: "3 yrs café experience", dist: "1.2km", date: "Jan 10" },
    { name: "Sarah K.", score: 87, skills: ["Customer Service", "Coffee", "Food Prep"], exp: "2 yrs food service", dist: "2.8km", date: "Jan 9" },
    { name: "Mikko L.", score: 81, skills: ["Espresso", "Cashier", "Cleaning"], exp: "1 yr café experience", dist: "0.8km", date: "Jan 8" },
    { name: "Liisa T.", score: 76, skills: ["Restaurant", "Barista", "Finnish"], exp: "6 months café", dist: "3.5km", date: "Jan 7" },
    { name: "James P.", score: 72, skills: ["Service", "English", "Fast Learner"], exp: "No café experience", dist: "4.1km", date: "Jan 6" },
    { name: "Emma R.", score: 68, skills: ["Retail", "Coffee Enthusiast"], exp: "1 yr retail", dist: "5.2km", date: "Jan 5" },
  ];

  return (
    <DesktopFrame id="B-8" title="Candidates — Per-Job View">
      <Sidebar active="Candidates" />
      <div style={{ flex: 1, padding: 32, overflow: "auto", background: T.bg }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: T.primary, cursor: "pointer" }}>← Back to listings</span>
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.text, marginBottom: 20 }}>Candidates for Barista</div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `2px solid ${T.border}` }}>
          {["Pending (4)", "Accepted (2)", "Declined (1)"].map((tab, i) => (
            <div key={tab} style={{ padding: "10px 20px", fontSize: 13, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? T.primary : T.textSec, borderBottom: i === 0 ? `2px solid ${T.primary}` : "2px solid transparent", marginBottom: -2, cursor: "pointer" }}>{tab}</div>
          ))}
        </div>

        {/* Candidate cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {candidates.map((c, i) => (
            <div key={i} style={{ background: T.white, borderRadius: 12, padding: 20, border: `1px solid ${T.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: T.textSec }}>{c.name.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: T.text }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: T.textSec }}>{c.dist} away • {c.date}</div>
                  </div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: c.score >= 85 ? T.secondary : c.score >= 75 ? T.primary : T.textSec }}>{c.score}%</div>
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 10 }}>
                {c.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <div style={{ fontSize: 12, color: T.textSec, marginBottom: 14 }}>{c.exp}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1, padding: "8px 0", textAlign: "center", borderRadius: 8, fontSize: 12, background: T.white, color: T.primary, border: `1.5px solid ${T.primary}`, fontWeight: 600, cursor: "pointer" }}>View Profile</div>
                <div style={{ flex: 1, padding: "8px 0", textAlign: "center", borderRadius: 8, fontSize: 12, background: T.secondary, color: "#fff", fontWeight: 600, cursor: "pointer" }}>Accept</div>
                <div style={{ width: 36, padding: "8px 0", textAlign: "center", borderRadius: 8, fontSize: 12, background: T.bg, color: T.textSec, cursor: "pointer" }}>✕</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
};

// ─── Main App with Navigation ───
export default function NextMoveWireframes() {
  const [activeScreen, setActiveScreen] = useState("A-6");

  const screens = [
    { id: "A-6", label: "Canvas Default", platform: "mobile", priority: "P0" },
    { id: "A-7", label: "Job Popup", platform: "mobile", priority: "P0" },
    { id: "A-8", label: "Job Detail", platform: "mobile", priority: "P0" },
    { id: "A-9", label: "Preferences", platform: "mobile", priority: "P0" },
    { id: "B-4", label: "Dashboard", platform: "desktop", priority: "P0" },
    { id: "B-5", label: "Job Listings", platform: "desktop", priority: "P0" },
    { id: "B-6", label: "Create Job", platform: "desktop", priority: "P0" },
    { id: "B-8", label: "Candidates", platform: "desktop", priority: "P0" },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case "A-6": return <ScreenA6 />;
      case "A-7": return <ScreenA7 />;
      case "A-8": return <ScreenA8 />;
      case "A-9": return <ScreenA9 />;
      case "B-4": return <ScreenB4 />;
      case "B-5": return <ScreenB5 />;
      case "B-6": return <ScreenB6 />;
      case "B-8": return <ScreenB8 />;
      default: return <ScreenA6 />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Top nav */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: `1px solid ${T.border}`, padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, height: 56 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: T.primary, letterSpacing: -0.5 }}>NextMove Wireframes</div>
          <div style={{ width: 1, height: 24, background: T.border }} />

          {/* Mobile screens */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 10, color: T.textSec, marginRight: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Mobile</span>
            {screens.filter(s => s.platform === "mobile").map((s) => (
              <div key={s.id} onClick={() => setActiveScreen(s.id)} style={{ padding: "6px 12px", borderRadius: 6, fontSize: 12, cursor: "pointer", background: activeScreen === s.id ? T.primary : "transparent", color: activeScreen === s.id ? "#fff" : T.textSec, fontWeight: activeScreen === s.id ? 600 : 400, whiteSpace: "nowrap" }}>
                {s.id} {s.label}
              </div>
            ))}
          </div>

          <div style={{ width: 1, height: 24, background: T.border }} />

          {/* Desktop screens */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 10, color: T.textSec, marginRight: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Desktop</span>
            {screens.filter(s => s.platform === "desktop").map((s) => (
              <div key={s.id} onClick={() => setActiveScreen(s.id)} style={{ padding: "6px 12px", borderRadius: 6, fontSize: 12, cursor: "pointer", background: activeScreen === s.id ? T.primary : "transparent", color: activeScreen === s.id ? "#fff" : T.textSec, fontWeight: activeScreen === s.id ? 600 : 400, whiteSpace: "nowrap" }}>
                {s.id} {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen display */}
      <div style={{ padding: 40, display: "flex", justifyContent: "center" }}>
        {renderScreen()}
      </div>

      {/* Footer info */}
      <div style={{ textAlign: "center", padding: "20px 0 40px", fontSize: 11, color: T.textSec }}>
        P0 Wireframes — NextMove Location-Based Job Discovery Platform
      </div>
    </div>
  );
}
