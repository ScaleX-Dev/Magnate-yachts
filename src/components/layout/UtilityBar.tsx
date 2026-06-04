// ─── UtilityBar ───────────────────────────────────────────────────────────────
// Top-of-page status bar: location, VHF channel, WhatsApp, and utility links.

import Link from "next/link";
import { Radio, MessageCircle, MapPin } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="w-full bg-[var(--color-navy-dark)] text-white/70 text-xs">
      <div className="container-site flex items-center justify-between h-9 gap-4">
        {/* Left — operational info */}
        <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-none">
          <span className="flex items-center gap-1.5">
            <MapPin size={11} className="shrink-0" />
            Galle &amp; Trincomalee, Sri Lanka
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Radio size={11} className="shrink-0" />
            Monitoring VHF&nbsp;16
          </span>
          <a
            href="https://wa.me/94XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MessageCircle size={11} className="shrink-0" />
            WhatsApp +94&nbsp;···
          </a>
        </div>

        {/* Right — utility controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Currency — placeholder, wire up later */}
          <button className="hover:text-white transition-colors">USD ▾</button>
          <span className="text-white/20">|</span>
          {/* Language — placeholder, wire up with next-intl later */}
          <button className="hover:text-white transition-colors">EN ▾</button>
        </div>
      </div>
    </div>
  );
}
