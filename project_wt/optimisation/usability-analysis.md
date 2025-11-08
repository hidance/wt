# Analýza použiteľnosti

## Úvod
Táto analýza popisuje UX/UI rozhodnutia a úpravy, ktoré boli implementované pre lepší používateľský zážitok na responzívnej webovej stránke.

## 1. Navigácia a prístupnosť

### Implementované vylepšenia:
- **Hamburger menu pre mobily**: Na obrazovkách ≤550px sa navigačné menu zmení na hamburger ikonu, čo šetrí priestor a zlepšuje používateľskú skúsenosť
- **Sticky header**: Navigačná lišta zostáva viditeľná pri scrollovaní, čo umožňuje rýchly prístup k navigácii
- **Aktívna stránka indikácia**: Aktuálna stránka je vizuálne zvýraznená v navigácii
- **Smooth transitions**: Plynulé prechody pri hover a aktivácii prvkov

### Prínosy:
- Rýchlejšia navigácia medzi stránkami
- Lepšia orientácia používateľa
- Intuitívne ovládanie na všetkých zariadeniach

## 2. Typografia a čitateľnosť

### Implementované vylepšenia:
- **Responzívna typografia**: Veľkosť písma sa prispôsobuje veľkosti obrazovky
- **Optimalizovaný line-height**: 1.6-1.8 pre lepšiu čitateľnosť
- **Kontrastné farby**: Text má dostatočný kontrast s pozadím (WCAG AA štandard)
- **Hierarchia informácií**: Použitie rôznych veľkostí písma pre nadpisy a podnadpisy

### Prínosy:
- Lepšia čitateľnosť na všetkých zariadeniach
- Znížená únava očí
- Jasná hierarchia informácií

## 3. Interaktívne prvky

### Implementované vylepšenia:
- **Hover efekty**: Vizuálna spätná väzba pri prechode myšou
- **Focus stavy**: Jasné indikátory pre navigáciu klávesnicou
- **Tlačidlá s gradientmi**: Atraktívne a moderné tlačidlá
- **Animované prechody**: Plynulé animácie pri interakciách

### Prínosy:
- Lepšia používateľská skúsenosť
- Jasná spätná väzba pri interakciách
- Moderný a profesionálny vzhľad

## 4. Responzívne rozloženie

### Implementované vylepšenia:
- **Flexbox a Grid**: Moderné CSS technológie pre flexibilné rozloženie
- **Adaptívne gridy**: Počet stĺpcov sa mení podľa veľkosti obrazovky
- **Optimalizované medzery**: Padding a margin sa prispôsobujú veľkosti obrazovky
- **Breakpointy**: Presne definované breakpointy pre rôzne zariadenia

### Prínosy:
- Optimálne využitie priestoru na každom zariadení
- Konzistentný vzhľad naprieč zariadeniami
- Lepšia používateľská skúsenosť

## 5. Prístupnosť (Accessibility)

### Implementované vylepšenia:
- **ARIA atribúty**: aria-label pre navigačné tlačidlá
- **Semantické HTML**: Použitie správnych HTML5 tagov (header, nav, main, section, article, footer)
- **Kontrast farieb**: Minimálny kontrast 4.5:1 pre text (WCAG AA)
- **Klávesová navigácia**: Všetky interaktívne prvky sú dostupné cez klávesnicu
- **Focus indikátory**: Jasné vizuálne indikátory pre focus stavy
- **Alternatívne texty**: Placeholder texty pre obrázky (emoji ikony)

### Prínosy:
- Dostupnosť pre používateľov so zrakovými postihnutiami
- Kompatibilita so screen readermi
- Navigácia len pomocou klávesnice
- Splnenie WCAG štandardov

## 6. Funkcionalita zmeny veľkosti obsahu

### Implementované vylepšenia:
- **Viacero spôsobov aktivácie**:
  1. Kliknutie na tlačidlo
  2. Výber z dropdown menu
  3. Klávesové skratky (Ctrl + Plus/Minus)
  4. Automatická zmena pri zmene šírky okna
- **Plynulé prechody**: CSS transitions pre zmenu veľkosti
- **Uloženie stavu**: Aktuálna veľkosť sa zobrazuje v dropdown menu

### Prínosy:
- Flexibilita pre rôzne preferencie používateľov
- Zlepšená prístupnosť
- Automatická adaptácia na veľkosť obrazovky

## 7. Výkon a optimalizácia

### Implementované vylepšenia:
- **Dynamické načítanie CSS**: Načítanie len potrebných štýlov pre dané rozlíšenie
- **Debounce pre resize**: Optimalizované spracovanie udalostí resize
- **CSS Grid namiesto float**: Moderné a efektívnejšie rozloženie
- **Organizovaný kód**: Oddelené CSS súbory pre rôzne stránky

### Prínosy:
- Rýchlejšie načítanie stránky
- Lepšia optimalizácia pre mobilné zariadenia
- Znížená spotreba dát

## 8. Vizuálny dizajn

### Implementované vylepšenia:
- **Gradient pozadia**: Moderné gradienty pre hlavičku a hero sekciu
- **Box shadows**: Viacvrstvové tieňovanie pre hĺbku
- **Border radius**: Zaoblené rohy pre moderný vzhľad
- **Farby**: Konzistentná farebná schéma naprieč stránkami
- **Animácie**: Plynulé animácie pre gradient pozadia

### Prínosy:
- Moderný a profesionálny vzhľad
- Lepšia estetická hodnota
- Konzistentný dizajn

## 9. Mobilná optimalizácia

### Implementované vylepšenia:
- **Touch-friendly prvky**: Dostatočne veľké tlačidlá a odkazy pre dotykové zariadenia
- **Optimalizované rozloženie**: Vertikálne rozloženie na malých obrazovkách
- **Kompaktné menu**: Hamburger menu šetrí priestor
- **Optimalizované obrázky**: Menšie obrázky na mobilných zariadeniach

### Prínosy:
- Lepšia používateľská skúsenosť na mobilných zariadeniach
- Rýchlejšie načítanie
- Intuitívne ovládanie

## 10. Desktop optimalizácia

### Implementované vylepšenia:
- **Maximálna šírka obsahu**: 1400px pre optimálnu čitateľnosť
- **Viac stĺpcov**: Využitie priestoru na veľkých obrazovkách
- **3D efekty**: Pokročilé transformácie a perspektívy
- **Backdrop filter**: Moderné blur efekty

### Prínosy:
- Optimálne využitie veľkých obrazoviek
- Moderné vizuálne efekty
- Lepšia estetická hodnota

## Záver

Všetky implementované vylepšenia majú za cieľ poskytnúť používateľom:
- **Intuitívnu navigáciu** na všetkých zariadeniach
- **Dostupný obsah** pre všetkých používateľov
- **Moderný a profesionálny vzhľad**
- **Optimalizovaný výkon** na rôznych zariadeniach
- **Flexibilné ovládanie** s viacerými možnosťami interakcie

Tieto úpravy výrazne zlepšujú používateľskú skúsenosť a prístupnosť webovej stránky.

