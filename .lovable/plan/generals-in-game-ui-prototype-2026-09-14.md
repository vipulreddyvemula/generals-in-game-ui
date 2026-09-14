# GENERALS in-game UI prototype

## Goal
Build a frontend-only `/game` screen that faithfully combines the supplied gameplay composition with the existing GENERALS visual vault. The battlefield remains dominant, with a compact match bar, readable leaderboard, spacious Commander panel, and minimal floating chat.

## Build
- Reuse the vault’s battlefield artwork, typography, semantic color tokens, button language, 12-player color system, and the structures of `GameTopBar`, `PlayerLeaderboard`, `BattlefieldGrid`, `CommanderPanel`, `EnergyBar`, and `AbilityCard`.
- Create a responsive full-screen game layout tuned for 1920×1080, 1440×900, 1366×768, and 1280×720 without page scrolling or overlap.
- Render a simple 20×20 battlefield with neutral square tiles, thin grid lines, mountain/city artwork, troop counts, generals, and a small amount of player territory.
- Keep exactly two Commander tabs. Challenges shows only the Math and Codeforces cards; Abilities replaces them with the six named ability cards and their mock states.
- Add mock-only interactions for math verification, Codeforces verification feedback, ability selection/use/cooldown, energy changes, compact chat, surrender confirmation, and a demo victory/defeat overlay.
- Keep all mock data separate from display components and omit every explicitly excluded panel or metadata field.
- Add route-specific metadata for `/game`, and make `/` redirect to `/game` so the prototype is immediately visible.

## Visual refinement
- Use the supplied screenshot as the composition reference: compact top bar, narrow left list, large central grid, wide right panel, no decorative map frame.
- Preserve the vault’s dark navy surfaces, blue/red battlefield atmosphere, gold branding, blue actions, green status, and restrained borders/shadows.
- Render and compare at all four target desktop sizes, then correct grid scale, panel widths, spacing, background crop, typography, and overflow.

## Technical notes
- React 19, TypeScript, TanStack Start routing, Tailwind CSS v4, and existing UI primitives only.
- No backend, authentication, persistence, external API calls, multiplayer, or real game logic.
- The uploaded screenshot is reference-only and will not be embedded.
