import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="hidden lg:block w-full bg-[var(--color-midnight)] border-b border-white/[0.05]">
      <div className="container-site flex items-center justify-between h-8">
        <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-none">
          <span
            className="flex items-center gap-1.5 text-[10.5px] text-white/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <MapPin size={9} className="shrink-0 text-[var(--color-amber)]/50" />
            Galle &amp; Trincomalee, Sri Lanka
          </span>
          <Link
            href="https://wa.me/94769850115"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10.5px] text-white/30 hover:text-white/60 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <MessageCircle size={9} className="shrink-0 text-[var(--color-amber)]/50" />
            WhatsApp +94&nbsp;76&nbsp;985&nbsp;0115
          </Link>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            className="text-[10.5px] text-white/25 hover:text-white/50 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            USD ▾
          </button>
          <span className="text-white/10">|</span>
          <button
            className="text-[10.5px] text-white/25 hover:text-white/50 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            EN ▾
          </button>
        </div>
      </div>
    </div>
  );
}
