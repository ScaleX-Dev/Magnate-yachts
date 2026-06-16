import Link from "next/link";
import { Radio, MessageCircle, MapPin } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="hidden lg:block w-full bg-[var(--color-navy-dark)] text-white/55 text-[11.5px]">
      <div className="container-site flex items-center justify-between h-9 gap-4">

        {/* Left — operational info */}
        <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap scrollbar-none">
          <span className="flex items-center gap-1.5">
            <MapPin size={10} className="shrink-0 text-white/35" />
            Galle &amp; Trincomalee, Sri Lanka
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Radio size={10} className="shrink-0 text-white/35" />
            Monitoring VHF&nbsp;16
          </span>
          <a
            href="https://wa.me/94XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-white/90 transition-colors"
          >
            <MessageCircle size={10} className="shrink-0 text-white/35" />
            WhatsApp +94&nbsp;···
          </a>
        </div>

        {/* Right — utility controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="hover:text-white/90 transition-colors">USD ▾</button>
          <span className="text-white/15">|</span>
          <button className="hover:text-white/90 transition-colors">EN ▾</button>
        </div>
      </div>
    </div>
  );
}
