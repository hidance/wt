# Responzívna Webová Stránka

Trojstránkový responzívny web vytvorený pomocou HTML5, CSS3 a JavaScriptu, optimalizovaný pre rôzne typy mobilných a prenosných zariadení.

## Štruktúra projektu

```
project_wt/
├── index.html              # Hlavná stránka
├── hobbies.html            # Stránka záľub členov tímu
├── layout.html             # Stránka s ukážkou Flexbox a Grid rozloženia
├── changes.html            # Stránka so sekciou zmien (sekcia_zmena)
├── styles/
│   ├── main.css            # Hlavné štýly
│   ├── hobbies.css        # Štýly pre stránku záľub
│   ├── layout.css         # Štýly pre stránku rozloženia
│   ├── changes.css        # Štýly pre stránku zmien
│   └── responsive/
│       ├── responsive-700.css   # Štýly pre šírky < 700px
│       ├── responsive-900.css   # Štýly pre šírky 700-900px
│       ├── responsive-1300.css  # Štýly pre šírky 900-1300px
│       └── responsive-1600.css # Štýly pre šírky ≥ 1300px
├── scripts/
│   ├── navigation.js       # Skript pre navigačné menu
│   ├── ui.js              # Funkcia na zmenu veľkosti obsahu
│   └── responsive-loader.js # Dynamické načítanie CSS podľa šírky okna
└── optimisation/
    ├── wireframe-description.md    # Návrhy rozloženia
    ├── responsive-behavior.md       # Popis reakcie prvkov
    └── usability-analysis.md        # Analýza použiteľnosti
```

## Breakpointy

Stránka je optimalizovaná pre nasledovné šírky zobrazovacích jednotiek:

- **550px** – malé mobilné zariadenia
- **850px** – väčšie smartfóny a menšie tablety
- **1250px** – notebooky a menšie desktopy
- **1400px a viac** – veľké obrazovky a monitory

## Funkcie

### 1. Responzívny dizajn
- Media queries pre rôzne veľkosti obrazoviek
- Flexbox a CSS Grid pre flexibilné rozloženie
- Dynamické načítanie CSS štýlov cez JavaScript

### 2. Navigácia
- Responzívne navigačné menu
- Hamburger menu pre mobilné zariadenia
- Sticky header

### 3. Stránka záľub (hobbies.html)
- Responzívna mriežka s kartami záľub
- Adaptívny počet stĺpcov podľa veľkosti obrazovky
- Hover efekty a animácie

### 4. Stránka rozloženia (layout.html)
- Ukážka Flexbox rozloženia
- Ukážka CSS Grid rozloženia
- Kombinované rozloženie (Flexbox + Grid)
- Adaptívne rozloženie pre rôzne veľkosti obrazoviek

### 5. Stránka zmien (changes.html)
- Sekcia `sekcia_zmena` s prehľadom zmien
- Funkcia na zmenu veľkosti obsahu aktivovateľná:
  - Kliknutím na tlačidlo
  - Výberom z dropdown menu
  - Klávesovou skratkou (Ctrl + Plus/Minus)
  - Automaticky pri zmene šírky okna

### 6. Dynamické načítanie CSS
- Automatické načítanie CSS súborov podľa šírky okna
- Špecializované štýly pre rôzne rozlíšenia
- Moderné CSS3 vlastnosti v každom súbore

## Spustenie

Jednoducho otvorte `index.html` v webovom prehliadači. Všetky súbory sú navzájom prepojené a stránka funguje bez potreby servera.

## Technológie

- **HTML5** – semantická štruktúra
- **CSS3** – moderné štýly, flexbox, grid, media queries
- **JavaScript** – interaktívne funkcie a dynamické načítanie

## Prístupnosť

- ARIA atribúty pre screen readery
- Klávesová navigácia
- WCAG AA kontrast farieb
- Semantické HTML tagy
- Focus indikátory

## Dokumentácia

Podrobnejšia dokumentácia sa nachádza v priečinku `optimisation/`:
- `wireframe-description.md` – návrhy rozloženia
- `responsive-behavior.md` – popis reakcie prvkov
- `usability-analysis.md` – analýza použiteľnosti

## Autor

Vytvorené v rámci projektu responzívnej webovej stránky.

