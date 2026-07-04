import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-midnight)]/96 backdrop-blur-xl border-t border-white/[0.08]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch h-[56px]">
        <a
          href="https://wa.me/94769850115"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-white/65 active:bg-white/5 transition-colors"
        >
          <MessageCircle size={15} className="text-emerald-400 shrink-0" />
          <span className="text-[13px] font-medium" style={{ fontFamily: "var(--font-body)" }}>
            WhatsApp
          </span>
        </a>

        <div className="w-px bg-white/[0.08]" />

        <Link
          href="/book"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[var(--color-amber)] text-white active:bg-[var(--color-amber-light)] transition-colors"
        >
          <span className="text-[13px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>
            Plan your stay
          </span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
