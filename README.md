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

## Notes

- Requires map id 434 to be free (the installer refuses otherwise) and the `KNS_*` plugins of the base game (`KNS_EventCall`, `KNS_Gallery`).
- Save the game folder / `kns_global.rpgsave` before testing if you care about your Bonus progress: the gallery starts a separate "new game" in map 434.
- The game's readme forbids redistributing modified game data. This patch only contains new files (a plugin and a new map) and no original assets or text.

---

# Patch Galerie (FR)

Ajoute une commande **Gallery** sur l'écran titre : une salle avec des PNJ numérotés (un par personnage/catégorie) qui rejouent chaque scène H (~480) sur sa vraie map, avec la bonne équipe, position et stats.

**Installation** : télécharger le ZIP, l'extraire, lancer `install.bat` (il trouve le dossier du jeu ou le demande). Sauvegarde des originaux dans `_gallery_patch_backup/`. **Désinstallation** : `uninstall.bat`.
