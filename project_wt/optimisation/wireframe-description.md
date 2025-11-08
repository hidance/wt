# Návrhy rozloženia a Wireframe popis

## 1. Hlavná stránka (index.html)

### Mobilné zariadenia (≤550px)
- **Navigácia**: Hamburger menu v pravom hornom rohu, rozbaliteľné vertikálne menu
- **Hero sekcia**: Plná šírka, vertikálne stohované prvky, tlačidlá pod sebou
- **Features grid**: Jeden stĺpec, karty pod sebou
- **Footer**: Jednoduchý text, stredne zarovnaný

### Tablety (551px - 850px)
- **Navigácia**: Horizontálne menu, všetky položky viditeľné
- **Hero sekcia**: Stredne zarovnaný obsah, tlačidlá vedľa seba
- **Features grid**: Dva stĺpce
- **Footer**: Plná šírka

### Notebooky (851px - 1250px)
- **Navigácia**: Horizontálne menu s väčšími medzerami
- **Hero sekcia**: Širší obsah, tlačidlá vedľa seba
- **Features grid**: Tri stĺpce
- **Footer**: Plná šírka s viac priestoru

### Veľké obrazovky (≥1251px)
- **Navigácia**: Horizontálne menu s maximálnym priestorom
- **Hero sekcia**: Maximálna šírka obsahu (1400px)
- **Features grid**: Tri stĺpce s väčšími medzerami
- **Footer**: Plná šírka

## 2. Stránka záľub (hobbies.html)

### Mobilné zariadenia (≤550px)
- **Grid**: Jeden stĺpec, karty na plnú šírku
- **Obrázky**: Výška 150px
- **Text**: Menšie písmo, kompaktné rozloženie
- **Tagy**: Pod sebou alebo v jednom riadku s wrapom

### Tablety (551px - 850px)
- **Grid**: Dva stĺpce
- **Obrázky**: Výška 180px
- **Text**: Stredná veľkosť písma
- **Tagy**: Flex wrap

### Notebooky (851px - 1250px)
- **Grid**: Dva stĺpce s väčšími medzerami
- **Obrázky**: Výška 200px
- **Text**: Štandardná veľkosť
- **Tagy**: V jednom riadku

### Veľké obrazovky (≥1251px)
- **Grid**: Tri stĺpce
- **Obrázky**: Výška 200px
- **Text**: Štandardná veľkosť
- **Tagy**: V jednom riadku

## 3. Stránka rozloženia (layout.html)

### Mobilné zariadenia (≤550px)
- **Flexbox demo**: Vertikálne stohované prvky
- **Grid demo**: Jeden stĺpec, poradie: header → main → sidebar → footer
- **Kombinované demo**: Vertikálne rozloženie, sidebar nad hlavným obsahom
- **Nested grid**: Jeden stĺpec

### Tablety (551px - 850px)
- **Flexbox demo**: Stále vertikálne, ale s väčšími medzerami
- **Grid demo**: Jeden stĺpec, sidebar pod hlavným obsahom
- **Kombinované demo**: Stále vertikálne
- **Nested grid**: Dva stĺpce

### Notebooky (851px - 1250px)
- **Flexbox demo**: Flex wrap, hlavný obsah na plnú šírku
- **Grid demo**: Dva stĺpce (sidebar + main)
- **Kombinované demo**: Horizontálne rozloženie (sidebar + main)
- **Nested grid**: Dva stĺpce

### Veľké obrazovky (≥1251px)
- **Flexbox demo**: Plné flex rozloženie s proporciami
- **Grid demo**: Dva stĺpce s optimálnymi proporciami
- **Kombinované demo**: Horizontálne rozloženie s širším sidebarom
- **Nested grid**: Dva až štyri stĺpce

## 4. Stránka zmien (changes.html)

### Mobilné zariadenia (≤550px)
- **Ovládacie prvky**: Vertikálne stohované (tlačidlo, dropdown)
- **Sekcia zmien**: Kompaktné rozloženie, menšie písmo
- **Change items**: Plná šírka, menšie paddingy

### Tablety (551px - 850px)
- **Ovládacie prvky**: Horizontálne vedľa seba
- **Sekcia zmien**: Stredná veľkosť písma
- **Change items**: Plná šírka, stredné paddingy

### Notebooky (851px - 1250px)
- **Ovládacie prvky**: Horizontálne s väčšími medzerami
- **Sekcia zmien**: Štandardná veľkosť písma
- **Change items**: Maximálna šírka s optimálnymi paddingmi

### Veľké obrazovky (≥1251px)
- **Ovládacie prvky**: Horizontálne s maximálnym priestorom
- **Sekcia zmien**: Väčšia veľkosť písma
- **Change items**: Maximálna šírka s veľkými paddingmi

## Vizuálne prvky

### Farba
- Primárna: #667eea (modrá)
- Sekundárna: #764ba2 (fialová)
- Gradienty: Použité na hlavičku a hero sekciu

### Typografia
- Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Hlavné nadpisy: 2-2.5rem
- Podnadpisy: 1.5-1.8rem
- Text: 1rem s line-height 1.6-1.8

### Medzery
- Mobilné: 1rem padding
- Tablety: 1.5rem padding
- Desktop: 2rem padding
- Veľké obrazovky: 2-3rem padding

