export type GamePlayer = { rank: number; name: string; colour: string; army: number; land: number; you?: boolean };

export const gamePlayers: GamePlayer[] = [
  { rank: 1, name: "Goose", colour: "bg-player-7", army: 40, land: 3, you: true },
  { rank: 2, name: "Maverick", colour: "bg-player-2", army: 38, land: 1 },
  { rank: 3, name: "Phoenix", colour: "bg-player-3", army: 28, land: 5 },
  { rank: 4, name: "Shadow", colour: "bg-player-4", army: 24, land: 4 },
  { rank: 5, name: "Reaper", colour: "bg-player-5", army: 19, land: 2 },
  { rank: 6, name: "Titan", colour: "bg-player-6", army: 16, land: 3 },
  { rank: 7, name: "Nova", colour: "bg-player-1", army: 12, land: 2 },
  { rank: 8, name: "Vortex", colour: "bg-player-8", army: 11, land: 1 },
];

export const matchInfo = { room: "Warzone Alpha", map: "20 × 20", speed: "Normal", turn: 37, clock: "00:42", latency: "32 ms" };

export type Ability = { name: string; description: string; cost: number; state: "AVAILABLE" | "LOCKED" | "COOLDOWN"; icon: "scout" | "blitz" | "reinforce" | "fortify" | "airstrike" | "supply"; cooldown?: string };
export const abilities: Ability[] = [
  { name: "Scout", description: "Reveal a 3 × 3 area of the fog.", cost: 20, state: "AVAILABLE", icon: "scout" },
  { name: "Blitz", description: "Double movement speed for one turn.", cost: 35, state: "AVAILABLE", icon: "blitz" },
  { name: "Reinforce", description: "Add 25 army to your general.", cost: 40, state: "COOLDOWN", icon: "reinforce", cooldown: "3 turns" },
  { name: "Fortify", description: "Halve incoming damage on one tile.", cost: 30, state: "AVAILABLE", icon: "fortify" },
  { name: "Airstrike", description: "Remove 15 army from an enemy tile.", cost: 60, state: "LOCKED", icon: "airstrike" },
  { name: "Supply Surge", description: "Instantly gain 20 commander energy.", cost: 25, state: "LOCKED", icon: "supply" },
];

export type Tile = { kind: "empty" | "mountain" | "city" | "general" | "owned"; army?: number; owner?: 1 | 2 };
export const MAP_SIZE = 20;
export function buildBattlefield(): Tile[] {
  const tiles: Tile[] = Array.from({ length: MAP_SIZE * MAP_SIZE }, () => ({ kind: "empty" }));
  const mountains = [8, 13, 22, 29, 31, 46, 51, 67, 72, 79, 88, 95, 103, 117, 124, 139, 141, 157, 168, 179, 201, 218, 229, 246, 259, 281, 300, 319, 337, 352, 368, 389];
  const cities: Array<[number, number]> = [[20,50],[22,35],[45,53],[70,41],[104,47],[156,40],[174,53],[202,42],[211,36],[212,44],[219,43],[301,45],[302,49],[366,48],[374,45]];
  mountains.forEach((i) => { tiles[i] = { kind: "mountain" }; });
  cities.forEach(([i, army]) => { tiles[i] = { kind: "city", army }; });
  tiles[64] = { kind: "general", owner: 2, army: 34 };
  tiles[95] = { kind: "general", owner: 1, army: 28 };
  [63,65,84,94,96,115].forEach((i) => { if (tiles[i]?.kind === "empty") tiles[i] = { kind: "owned", owner: i < 90 ? 2 : 1, army: 8 + (i % 13) }; });
  return tiles;
}

export const mathChallenge = { question: "What is 17 × 23?", answer: "391" };
export const codeforcesChallenge = { id: "#4A", name: "Watermelon", url: "https://codeforces.com/problemset/problem/4/A" };
export const chatMessages = [
  { author: "Maverick", colour: "text-player-2", text: "Watch the north cities." },
  { author: "Phoenix", colour: "text-player-3", text: "Taking the middle, cover me." },
  { author: "Goose", colour: "text-player-7", text: "On it — moving half." },
];