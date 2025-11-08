# Popis reakcie prvkov pri rôznych rozlíšeniach

## Navigačná lišta

### ≤550px (Malé mobily)
- **Zobrazenie**: Hamburger menu ikona
- **Správanie**: Kliknutím sa zobrazí vertikálne menu
- **Animácia**: Hamburger ikona sa transformuje na X
- **Pozícia**: Sticky header zostáva v hornej časti

### 551px - 850px (Väčšie smartfóny, tablety)
- **Zobrazenie**: Horizontálne menu, všetky položky viditeľné
- **Správanie**: Priamy prístup ku všetkým stránkam
- **Hover efekty**: Zvýraznenie pri prechode myšou
- **Pozícia**: Sticky header

### ≥851px (Notebooky a desktopy)
- **Zobrazenie**: Plné horizontálne menu s väčšími medzerami
- **Správanie**: Všetky položky dostupné, hover efekty
- **Pozícia**: Sticky header

## Hero sekcia

### ≤550px
- **Veľkosť nadpisu**: 1.8rem
- **Veľkosť textu**: 1rem
- **Tlačidlá**: Vertikálne pod sebou, plná šírka
- **Padding**: 2rem 1rem
- **Background**: Gradient s animáciou

### 551px - 850px
- **Veľkosť nadpisu**: 2rem
- **Veľkosť textu**: 1.1rem
- **Tlačidlá**: Vedľa seba, flex wrap
- **Padding**: 3rem 1.5rem
- **Background**: Gradient s plynulejšou animáciou

### 851px - 1250px
- **Veľkosť nadpisu**: 2.5rem
- **Veľkosť textu**: 1.2rem
- **Tlačidlá**: Vedľa seba, stredne zarovnané
- **Padding**: 4rem 2rem
- **Background**: Gradient s komplexnou animáciou

### ≥1251px
- **Veľkosť nadpisu**: 2.5rem
- **Veľkosť textu**: 1.2rem
- **Tlačidlá**: Vedľa seba, optimálne rozloženie
- **Padding**: 4rem 2rem
- **Max šírka**: 1400px, stredne zarovnané
- **Background**: Premium gradient s pokročilou animáciou

## Grid rozloženia

### Features Grid (index.html)

**≤550px**:
- 1 stĺpec
- Karty na plnú šírku
- Vertikálne stohované

**551px - 850px**:
- 2 stĺpce
- Rovnaká šírka kariet
- Gap: 1.5rem

**851px - 1250px**:
- 3 stĺpce
- Rovnaká šírka
- Gap: 2rem

**≥1251px**:
- 3 stĺpce
- Väčšie gapy (2-3rem)
- Maximálna šírka obsahu

### Hobbies Grid (hobbies.html)

**≤550px**:
- 1 stĺpec
- Obrázky: 150px výška
- Kompaktné rozloženie

**551px - 850px**:
- 2 stĺpce
- Obrázky: 180px výška
- Stredné medzery

**851px - 1250px**:
- 2 stĺpce
- Obrázky: 200px výška
- Väčšie medzery

**≥1251px**:
- 3 stĺpce
- Obrázky: 200px výška
- Maximálne medzery

## Flexbox rozloženie (layout.html)

### Flexbox Demo

**≤550px**:
- Flex-direction: column
- Všetky prvky pod sebou
- Plná šírka každého prvku

**551px - 850px**:
- Flex-direction: column
- Stále vertikálne
- Väčšie medzery

**851px - 1250px**:
- Flex-direction: row
- Flex-wrap: wrap
- Hlavný obsah (item-1): flex: 1 1 100%
- Ostatné: flex: 1

**≥1251px**:
- Flex-direction: row
- Flex-wrap: nowrap
- Proporcie: item-1 (flex: 2), item-2 (flex: 1), item-3 (flex: 1)

## CSS Grid rozloženie (layout.html)

### Grid Demo

**≤550px**:
- Grid-template-columns: 1fr
- Grid-template-areas:
  - "header"
  - "main"
  - "sidebar"
  - "footer"
- Vertikálne stohované

**551px - 850px**:
- Grid-template-columns: 1fr
- Grid-template-areas:
  - "header"
  - "sidebar"
  - "main"
  - "footer"
- Sidebar pred hlavným obsahom

**851px - 1250px**:
- Grid-template-columns: 1fr 1.5fr
- Grid-template-areas:
  - "header header"
  - "sidebar main"
  - "footer footer"
- Horizontálne rozloženie

**≥1251px**:
- Grid-template-columns: 250px 1fr
- Grid-template-areas:
  - "header header"
  - "sidebar main"
  - "footer footer"
- Optimalizované proporcie

## Sekcia zmien (changes.html)

### Ovládacie prvky

**Všetky veľkosti**:
- Tlačidlo: Dostupné vždy
- Dropdown: Dostupné vždy
- Klávesové skratky: Fungujú vždy
- Automatická zmena: Podľa šírky okna

### Veľkosť obsahu

**≤550px**:
- Automaticky: small
- Font-size: 0.9rem
- Nadpisy: 2rem, 1.3rem

**551px - 850px**:
- Automaticky: medium
- Font-size: 1rem
- Nadpisy: 2.5rem, 1.5rem

**851px - 1250px**:
- Automaticky: large
- Font-size: 1.15rem
- Nadpisy: 3rem, 1.8rem

**≥1251px**:
- Automaticky: xlarge
- Font-size: 1.3rem
- Nadpisy: 3.5rem, 2rem

## Hover efekty a animácie

### Všetky veľkosti
- **Karty**: translateY(-5px až -15px) podľa veľkosti obrazovky
- **Tlačidlá**: translateY(-3px až -8px) + scale(1.05 až 1.12)
- **Obrázky**: scale(1.1) pri hover
- **Navigačné odkazy**: translateY(-2px) + background change
- **Transitions**: 0.3s až 0.6s podľa veľkosti obrazovky

### Veľké obrazovky (≥1300px)
- **3D efekty**: rotateX, rotateY, rotateZ
- **Perspective**: 1000px - 1500px
- **Pokročilé filtre**: brightness, contrast, saturate, drop-shadow
- **Backdrop filter**: blur efekty

## Dynamické CSS načítanie

### Breakpointy pre responsive-loader.js
- **<700px**: responsive-700.css
- **700px - 900px**: responsive-900.css
- **900px - 1300px**: responsive-1300.css
- **≥1300px**: responsive-1600.css

### Každý CSS súbor obsahuje:
- Moderné CSS3 vlastnosti (box-shadow, transition, filter, transform, grid-template-areas, backdrop-filter, border-radius)
- Špecializované štýly pre dané rozlíšenie
- Optimalizované animácie a efekty

