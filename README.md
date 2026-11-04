# NymPri Gallery Patch

A "Gallery" room for **Nymphomania Priestess** (RPG Maker MV), alpha **0.80j**: a new command on the title screen that drops you in a room with numbered NPCs, one per character/category. Each NPC lists every H scene of that character (about 480 scenes) and replays it on its real map with the right party, position, stats and clothing state. Settings NPCs let you change language, hair, stats, relationship level, NTR mode, skill checks (auto-success), log window, and a Dressroom NPC gives all outfits / adds a companion.

Tested on 0.80j with the Combined Patch A to E and Patch 0.80a applied. It touches **no original game data** other than registering itself in two files.

## Install (Windows)

1. Download this repo (Code > Download ZIP) and extract it anywhere (or directly into the game folder).
2. Double-click **`install.bat`**. It finds the game folder (the one with `Game.exe` and `www`), or asks for it.
3. Start the game: a **Gallery** command appears on the title screen.

The installer:
- copies `www/js/plugins/KNS_GalerieRoom.js` and `www/data/Map434.json` into the game;
- adds one line to `www/js/plugins.js` (after `KNS_Gallery`) and one entry (map id 434) to `www/data/MapInfos.json`;
- saves the originals of those two files in `<game>/_gallery_patch_backup/`.

It is safe to run twice. Manual install: copy the two files from `www/` into the game's `www/` and add `{"name":"KNS_GalerieRoom","status":true,"description":"Galerie","parameters":{}},` after the `KNS_Gallery` line of `plugins.js`, plus map 434 in `MapInfos.json`.

## Uninstall

Run **`uninstall.bat`** (removes the line, the map entry and the two files).

## Debug commands

Added by the gallery (work in the Gallery room and in every scene it launches, no special mode needed):

| Key / menu | Effect |
|---|---|
| **F7** (or Settings NPC > *Debug: tile coordinates*) | Draws `x,y` on every visible tile (yellow when x and y are multiples of 5) plus a HUD: map id, player x,y + direction, tile under the mouse, party ids. Use it to read the coordinates to report. Direction: 2 down, 4 left, 6 right, 8 up. |
| **F6** | Lists the pictures on screen (id, file, x/y, scale, opacity) and v40 / v23 / v33 / v90 / switch 5, for diagnosing a broken scene. |

Standard RPG Maker debug tools of the game itself need the **test mode**: start the game with **`Game.exe test`** (run `Game.exe` with the argument `test`, e.g. a shortcut to `Game.exe test`). Then:

| Key | Effect |
|---|---|
| **F9** | Debug menu: Enter toggles a switch; left/right change a variable by 1, PageUp/PageDown by 10. |
| **F8** | Developer console. |
| **Ctrl** (held) | Walk through walls. |

## Review file

`Galerie_equipes_positions.xlsx` is the review workbook (one sheet per NPC: conditions, hero position, team, and blue columns to fill: OK/KO, corrected position, corrected team, comment). The same lists are in the GitHub Issues labelled *review*.

## Notes

- Requires map id 434 to be free (the installer refuses otherwise) and the `KNS_*` plugins of the base game (`KNS_EventCall`, `KNS_Gallery`).
- Save the game folder / `kns_global.rpgsave` before testing if you care about your Bonus progress: the gallery starts a separate "new game" in map 434.
- The game's readme forbids redistributing modified game data. This patch only contains new files (a plugin and a new map) and no original assets or text.

---

# Patch Galerie (FR)

Ajoute une commande **Gallery** sur l'écran titre : une salle avec des PNJ numérotés (un par personnage/catégorie) qui rejouent chaque scène H (~480) sur sa vraie map, avec la bonne équipe, position et stats.

**Installation** : télécharger le ZIP, l'extraire, lancer `install.bat` (il trouve le dossier du jeu ou le demande). Sauvegarde des originaux dans `_gallery_patch_backup/`. **Désinstallation** : `uninstall.bat`.
