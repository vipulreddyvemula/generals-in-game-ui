# Generals In-Game UI

https://github.com/vipulreddyvemula/generals-visual-vault


# GENERALS — IN-GAME UI PROTOTYPE

# USE EXISTING VISUAL VAULT + SUPPLIED SCREENSHOT

I am building the frontend UI for a game called GENERALS.

I am providing:

1. A gameplay screenshot showing the desired in-game layout.

2. Four earlier GENERALS screenshots representing the Home,

   Player Details, Play, and Waiting Room visual language.

3. A GitHub repository containing an existing GENERALS visual

   prototype:

https://github.com/vipulreddyvemula/generals-visual-vault

IMPORTANT:

Before generating the new UI, INSPECT THIS GITHUB REPOSITORY.

Do not blindly recreate the screenshot from scratch.

Study the existing repository's gameplay UI implementation,

components, styling, assets, and structure.

The repository already contains gameplay-oriented components,

including:

- game top bar

- player leaderboard

- battlefield grid

- Commander panel

- ability cards

- energy bar

- shared GENERALS UI

- battlefield artwork

Use that repository as a starting point and reference for the

implementation.

============================================================

PRIMARY GOAL

============================================================

Create a polished frontend-only prototype of the ACTUAL IN-GAME

GENERALS SCREEN.

This is UI/UX only.

Do NOT implement:

- real backend

- Socket.IO

- database

- authentication

- real multiplayer

- real combat

- real map generation

- Codeforces API

- actual solution verification

- real Math judging

Use mock data/state.

============================================================

DESIGN SOURCES

============================================================

SOURCE 1:

The supplied gameplay screenshot defines the desired IN-GAME

COMPOSITION.

SOURCE 2:

The four previous GENERALS screenshots define the overall

GENERALS VISUAL IDENTITY.

SOURCE 3:

The GitHub repository provides an existing GENERALS VISUAL

IMPLEMENTATION and assets.

Use all three together.

The goal is:

EXISTING VISUAL VAULT

+

GAMEPLAY SCREEN REFERENCE

+

FOUR GENERALS UI REFERENCES

=

FINAL IN-GAME UI PROTOTYPE

============================================================

DO NOT DESIGN FROM TEXT ALONE

============================================================

Open and inspect the actual screenshot.

Open and inspect the GitHub repository.

Do not just read the descriptions below and invent your own UI.

============================================================

OVERALL COMPOSITION

============================================================

Desktop-first full-screen game.

TOP:

compact match header

LEFT:

player leaderboard

CENTER:

large battlefield grid

RIGHT:

large Commander panel

BOTTOM-LEFT:

minimal chat button

The battlefield must remain the visual focus.

Do NOT add a Battle Log.

Do NOT add a "Select a Tile" panel.

Do NOT add unnecessary dashboards.

============================================================

TOP BAR

============================================================

Match the supplied gameplay screenshot.

Left side:

GENERALS branding

Room:

Warzone Alpha

Map:

20 × 20

Speed:

Normal

Center:

Turn 37

00:42

Right:

Server Online

latency

Settings

Surrender

Keep the top bar compact.

============================================================

PLAYER LEADERBOARD

============================================================

Left panel:

PLAYERS

Columns:

#

Player

Army

Land

Use mock players:

Goose (You)

Maverick

Phoenix

Shadow

Reaper

Titan

Nova

Vortex

Each player has a distinct colour.

Support the existing 12-colour player system.

Highlight the current player.

Use the same visual language as the reference screenshot and

existing visual-vault implementation.

============================================================

BATTLEFIELD GRID

============================================================

The center battlefield must be LARGE.

The grid itself must remain visually SIMPLE.

IMPORTANT:

DO NOT put a large decorative frame around the grid.

The battlefield should look like the supplied grid screenshot.

Use:

- square tiles

- thin grid lines

- light neutral tiles

- mountains

- castles/cities

- troop numbers

- crown/general tiles

- player territories

Do not replace the grid with a card-like dashboard.

The map should dominate the center of the screen.

============================================================

COMMANDER PANEL

============================================================

The Commander panel should be LARGE enough to provide proper

space for challenge content.

Do not squeeze it into a narrow column.

Header:

COMMANDER

Status:

ONLINE

Subtitle:

TACTICAL UPLINK

============================================================

ENERGY

============================================================

At the top:

COMMANDER ENERGY

0 / 100

large readable energy bar

============================================================

CHALLENGES / ABILITIES TABS

============================================================

There are exactly TWO tabs:

CHALLENGES

ABILITIES

They must behave as mutually exclusive views.

When CHALLENGES is selected:

show only challenges.

When ABILITIES is selected:

show only abilities.

Never display both simultaneously.

The active tab must have a clear active-state treatment.

============================================================

CHALLENGES TAB

============================================================

The challenge layout should provide enough space for useful content.

There are two challenge types:

MATH

CODEFORCES

--------------------------------

MATH

--------------------------------

Math is intentionally SIMPLE.

Show:

MATH CHALLENGE

[the actual math question]

[ Enter your answer ]

[ Verify Answer ]

Do NOT display:

- Codeforces link

- difficulty

- type

- reward

- unnecessary metadata

The Math card should focus on:

question

answer

verification

--------------------------------

CODEFORCES

--------------------------------

Show ONLY:

CODEFORCES CHALLENGE

Question ID / number

Question name

Example:

#4A

Watermelon

[ Open in Codeforces ]

Then:

Solve on Codeforces using your handle.

Get Accepted, then verify.

[ Verify Solution ]

Do NOT display:

- type

- difficulty

- problem description

- reward

- unnecessary metadata

The Codeforces card should remain clean and spacious.

============================================================

ABILITIES TAB

============================================================

When ABILITIES is selected, replace the challenge content.

Show the available Commander abilities.

Use the existing real ability names from the Generals design:

- Scout

- Blitz

- Reinforce

- Fortify

- Airstrike

- Supply Surge

Each ability card should have enough room to show:

- icon

- name

- short description

- energy cost

- Use button

- state

States:

AVAILABLE

LOCKED

COOLDOWN

Do not implement the actual ability logic.

Use mock state only.

============================================================

CHAT

============================================================

Chat should be MINIMAL.

Do not create a large permanent chat panel.

Use a small floating chat button in the bottom-left.

Show a small unread count when appropriate.

Clicking it can open a compact chat panel.

Do not allow chat to dominate the battlefield.

============================================================

NO UNNECESSARY UI

============================================================

Do NOT add:

Battle Log

Event Log

Activity Feed

Select a Tile panel

Knowledge wins battles

Large permanent chat

Extra statistics dashboards

Unnecessary metadata

Marketing content

The screen should remain focused on:

BATTLEFIELD

LEADERBOARD

COMMANDER

TIME

============================================================

VISUAL LANGUAGE

============================================================

Use the visual system established by the four earlier GENERALS

screenshots and the existing visual-vault repository.

Use:

- dark navy / black

- blue faction atmosphere

- red faction atmosphere

- gold GENERALS branding

- gold accents

- blue primary actions

- green status indicators

- red destructive states

- dark translucent surfaces

- subtle borders

- restrained shadows

- polished typography

- cinematic battlefield atmosphere

The gameplay page should look like it belongs to the same product

as the Home, Player Details, Play, and Waiting Room.

============================================================

ASSETS

============================================================

Inspect the GitHub visual-vault repository for reusable assets.

Especially look for:

- generals battlefield background

- logo

- crown

- branding

- icons

- fonts

- gameplay assets

Reuse existing visual-vault assets where appropriate.

Do not replace distinctive visual assets with:

- emoji

- generic icons

- random stock images

- generic gradients

============================================================

GAMEPLAY SCREEN

============================================================

This is NOT a literal copy of the lobby pages.

The layout is different because the player is now playing.

However, it must feel like:

"The GENERALS lobby has transitioned into the battlefield."

The battlefield is the center.

The leaderboard is on the left.

Commander is on the right.

The match timer is at the top.

Chat is minimal.

============================================================

TECH STACK

============================================================

Use:

React

TypeScript

Tailwind CSS

Use reusable components.

Prefer adapting/reusing the visual-vault component structure where

appropriate rather than rebuilding every element from scratch.

Suggested structure:

GameLayout

GameTopBar

PlayerLeaderboard

BattlefieldGrid

CommanderPanel

CommanderTabs

EnergyBar

ChallengesPanel

MathChallenge

CodeforcesChallenge

AbilitiesPanel

AbilityCard

ChatButton

ChatPanel

============================================================

MOCK DATA

============================================================

Use mock data for:

- room

- players

- army counts

- land

- turn

- timer

- energy

- challenge

- abilities

- chat

Keep mock data separate from UI components.

============================================================

INTERACTIONS

============================================================

Implement UI-only interactions:

- Challenges / Abilities tab switching

- Math answer input

- Verify Answer visual state

- Open in Codeforces button

- Verify Solution visual state

- Ability selection

- Ability cooldown state

- Energy changes for demonstration

- Chat open/close

- Unread badge

- Surrender confirmation

- Victory/Defeat overlay

Do not implement actual backend behavior.

============================================================

DESKTOP TARGET

============================================================

Primary:

1920 × 1080

Also support:

1440 × 900

1366 × 768

1280 × 720

Prioritize the 1920 × 1080 composition.

Make sure:

- battlefield is large

- Commander panel has enough width

- leaderboard is readable

- no unnecessary scrolling

- nothing overlaps

- top bar remains compact

============================================================

VISUAL QA

============================================================

After implementation:

1. Render the page.

2. Compare it directly against the supplied gameplay screenshot.

3. Compare its visual language against the four earlier GENERALS

   screenshots.

4. Inspect the visual-vault repository again where necessary.

5. Fix obvious differences.

Pay special attention to:

- grid size

- Commander width

- leaderboard width

- top-bar height

- spacing

- background crop

- panel proportions

- typography

- gold accents

- button sizing

- challenge card spacing

- tab sizing

- overall visual density

Do not stop after a rough first pass.

============================================================

FINAL OUTPUT

============================================================

Return a complete frontend prototype.

Routes:

/game

Use mock data.

At the end explain:

1. Which visual-vault components/assets were reused.

2. Which components were recreated.

3. Which new components were created.

4. How Challenges and Abilities are separated.

5. How the Math UI works.

6. How the Codeforces UI works.

7. Any visual differences from the supplied screenshot.

8. How to run the prototype.

IMPORTANT:

This is a UI prototype, not the real Generals game.

Do not build backend infrastructure.

Do not build multiplayer.

Do not replace the real game's logic.

The goal is a high-quality visual prototype that can later be

ported into the real Generals application.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7a37bc2a-4cb1-4a8f-aee0-5f0430f1f45c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
