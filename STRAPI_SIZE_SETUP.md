# Strapi Setup - Veľkosti produktov

## Konfigurácia Content-Type "produkts"

Pre správne fungovanie výberu veľkostí je potrebné pridať nasledujúce polia do Strapi Content-Type Builder pre **produkts**:

### 1. Pole "sizes" (Veľkosti)

**Typ:** JSON  
**Názov:** `sizes`  
**Popis:** Pole dostupných veľkostí pre produkt  
**Príklad hodnoty:**

```json
["S", "M", "L", "XL"]
```

**Alternatíva:** Text (ak Strapi nepodporuje JSON)

- Oddeľovač: čiarka
- Príklad: `S,M,L,XL`

### 2. Pole "sizeChart" (Tabuľka veľkostí)

**Typ:** Media (Single)  
**Názov:** `sizeChart`  
**Popis:** Obrázok alebo PDF s tabuľkou rozmerov  
**Povolené typy:** Images, PDF

---

## Postup pridania polí v Strapi

1. **Prihláste sa do Strapi administrácie**
2. **Content-Type Builder** → **produkts**
3. **Kliknite na "Add another field"**

### Pridanie "sizes":

- Vyberte **JSON**
- Názov: `sizes`
- Uložte

### Pridanie "sizeChart":

- Vyberte **Media**
- Názov: `sizeChart`
- Type: **Single media**
- Allowed types: **Images, Files (PDF)**
- Uložte

4. **Uložte celý Content Type**
5. **Reštartujte Strapi server**

---

## Príklad vytvorenia produktu s veľkosťami

### V Strapi Admin:

1. **Content Manager** → **produkts** → **Create new entry**
2. Vyplňte základné údaje (name, slug, price, atď.)
3. **Subcategory:** `tricko` alebo `mikina`
4. **Sizes (JSON):**
   ```json
   ["S", "M", "L", "XL"]
   ```
5. **Size Chart:** Nahrajte PDF súbor `rozmery produktu tricko.pdf` z `public/size-spec/`
6. **Publikujte produkt**

---

## Testovanie

1. Otvorte produkt s `subcategory: "tricko"` alebo `"mikina"` na frontendte
2. Mal by sa zobraziť dropdown "Zvoliť variantu"
3. Odkaz "Tabulka velikostí" otvorí modal s PDF

---

## Poznámky

- **Výber veľkosti sa zobrazí LEN** pre produkty s:

  - `subcategory === "tricko"` ALEBO `subcategory === "mikina"`
  - `sizes` pole obsahuje aspoň 1 veľkosť

- Pri pridávaní do košíka sa validuje výber veľkosti
- Rovnaký produkt v rôznych veľkostiach = samostatné položky v košíku
