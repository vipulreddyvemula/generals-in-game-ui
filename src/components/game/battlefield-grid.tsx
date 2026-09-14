import { Crown } from "lucide-react";
import { buildBattlefield, MAP_SIZE } from "@/lib/game-mock";
import { cn } from "@/lib/utils";

const tiles = buildBattlefield();
export function BattlefieldGrid({ selected, onSelect }: { selected: number | null; onSelect: (index: number) => void }) {
  return <div className="grid aspect-square w-full max-w-[min(72vh,760px)] bg-tile-line p-px shadow-[0_20px_70px_var(--background)]" style={{ gridTemplateColumns: `repeat(${MAP_SIZE},minmax(0,1fr))`, gap: "1px" }} role="grid" aria-label="Battlefield">
    {tiles.map((tile,index) => <button key={index} type="button" role="gridcell" aria-label={`Battlefield tile ${index + 1}`} onClick={() => onSelect(index)} className={cn("relative flex min-h-0 items-center justify-center overflow-hidden bg-tile text-[clamp(6px,.65vw,11px)] font-bold leading-none text-tile-ink hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-gold",tile.kind === "mountain" && "bg-tile-mountain",tile.kind === "city" && "bg-tile-city",tile.owner === 1 && "bg-player-7",tile.owner === 2 && "bg-player-2",selected === index && "z-10 outline-2 outline-gold")}>
      {tile.kind === "mountain" && <svg viewBox="0 0 24 24" className="size-[76%] opacity-70" aria-hidden><path d="M1 20 8 7l4 7 4-8 7 14" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>}
      {tile.kind === "city" && <svg viewBox="0 0 24 24" className="absolute size-[90%] opacity-65" aria-hidden><path d="M4 21V9h3V6h3v3h4V5h3v4h3v12M2 21h20" fill="none" stroke="currentColor" strokeWidth="1.7"/></svg>}
      {tile.kind === "general" && <Crown className="size-[65%] fill-foreground text-foreground drop-shadow"/>}
      {tile.army !== undefined && <span className={cn("relative z-10",tile.kind === "general" && "absolute bottom-0.5 right-1 text-foreground")}>{tile.army}</span>}
    </button>)}
  </div>;
}