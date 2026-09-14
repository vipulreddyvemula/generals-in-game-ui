import { Check, Copy, Flag, Hourglass, Settings, Signal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GeneralsBrand, StatusIndicator } from "./game-shell";
import { matchInfo } from "@/lib/game-mock";

export function GameTopBar({ onSurrender }: { onSurrender: () => void }) {
  const [copied, setCopied] = useState(false);
  const copyRoom = () => { void navigator.clipboard?.writeText(matchInfo.room); setCopied(true); window.setTimeout(() => setCopied(false), 1200); };
  return <header className="relative z-30 grid h-[72px] shrink-0 grid-cols-[minmax(360px,1fr)_250px_minmax(360px,1fr)] items-center border-b border-gold/35 bg-panel-strong/95 px-4 shadow-lg backdrop-blur-xl">
    <div className="flex min-w-0 items-center gap-5"><GeneralsBrand/><div className="hidden rounded-md border border-panel-border bg-background/55 px-3 py-2 lg:block"><div className="flex items-center gap-2 text-xs font-semibold">Room: {matchInfo.room}<Button variant="ghost" size="icon" onClick={copyRoom} aria-label="Copy room name" className="size-5">{copied ? <Check className="text-success"/> : <Copy/>}</Button></div><p className="text-[10px] text-muted-foreground">Map: {matchInfo.map}<span className="mx-2">|</span>Speed: {matchInfo.speed}</p></div></div>
    <div className="relative flex h-[68px] flex-col items-center justify-center border-x border-b border-gold/55 bg-background/75"><div className="flex items-center gap-2 font-brand text-lg font-bold"><Hourglass className="size-4 text-gold"/>Turn {matchInfo.turn}</div><span className="text-xl font-bold tabular-nums text-primary">{matchInfo.clock}</span><i aria-hidden className="absolute -bottom-1 size-2 rotate-45 border-b border-r border-gold bg-background"/></div>
    <div className="flex items-center justify-end gap-3"><div className="hidden items-center gap-4 rounded-md border border-panel-border bg-background/45 px-4 py-3 md:flex"><StatusIndicator/><span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Signal className="size-4 text-success"/>{matchInfo.latency}</span></div><Button variant="gameOutline" size="icon" aria-label="Match settings" className="size-11"><Settings className="size-5"/></Button><Button variant="danger" size="game" onClick={onSurrender}><Flag/>Surrender</Button></div>
  </header>;
}