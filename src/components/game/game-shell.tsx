import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GeneralsBrand() {
  return <div className="brand-gold flex items-center gap-3 text-[clamp(1.15rem,1.65vw,1.85rem)] font-extrabold"><CrownMark />GENERALS</div>;
}

function CrownMark() {
  return <svg viewBox="0 0 64 48" aria-hidden className="h-9 w-11 fill-gold"><path d="M5 38 1 11l14 10L25 2l8 18L44 4l6 19 13-10-6 25H5Zm4 5h46v4H9v-4Z" /></svg>;
}

export function StatusIndicator({ label = "Server Online" }: { label?: string }) {
  return <span className="inline-flex items-center gap-2 text-xs font-semibold text-success"><span className="size-2.5 rounded-full bg-success shadow-[0_0_12px_var(--success)]" />{label}</span>;
}

export function GoldPanel({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn("gold-panel relative rounded-lg border border-gold/50 bg-panel-strong/90 backdrop-blur-md", className)}>{children}<i aria-hidden className="absolute left-0 top-0 size-3 border-l-2 border-t-2 border-gold"/><i aria-hidden className="absolute right-0 top-0 size-3 border-r-2 border-t-2 border-gold"/><i aria-hidden className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-gold"/><i aria-hidden className="absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-gold"/></section>;
}