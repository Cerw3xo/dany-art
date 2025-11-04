# 🚀 Railway Setup - Presné hodnoty pre Environment Variables

## Tieto hodnoty skopíruj do Railway Variables

**Postup:**
1. Prihlás sa na Railway: https://railway.app
2. Otvor svoj projekt
3. Choď do **Settings** → **Shared Variables** (alebo klikni na službu → **Variables**)
4. Pre každú premennú klikni **"+ New Variable"** a pridaj:

---

## 🔐 Environment Variables

### 1. Server Settings
```
HOST=0.0.0.0
PORT=1337
NODE_ENV=production
```

### 2. Database Settings
```
DATABASE_CLIENT=postgres
DATABASE_SSL=true
```
**Poznámka:** `DATABASE_URL` by už mala byť automaticky pridaná z PostgreSQL databázy.

### 3. App Secrets (vygenerované)
```
APP_KEYS=WL5ZZf8oUGHUXEaaPNTj40ofQK2zJeJU8k6MnHDZS/0=,ptFmmjNhIdwn0L7SnqT0cHUiURBk5ypvOs2m5cyrwTU=,UAuZlUiy4c941Xyd4cih5iGEtdyb1Ry+Dlvk744sP+0=,qyfg7EYMbopQrVFU1lInU2kkbmR4MeH0SXGDZ3DPsP4=
API_TOKEN_SALT=42F6RcpbdwgPEHqKwdp1utSVAUb5VH6nk3hpKYxs5o0=
ADMIN_JWT_SECRET=aC1g71RaI+MhD2U2w9zi7PQkas7r2EEdAeou9A6HpOQ=
TRANSFER_TOKEN_SALT=jIR4hbv3YxfMAWsE6p0NgG9pEabG3uV9SIRChYK93gA=
JWT_SECRET=Z72BvmwPXgySWtaKsG4RbUL3NxilrgzfKBKcsMQaJ20=
```

### 4. Frontend & Public URLs
```
FRONTEND_URL=https://tvoj-frontend.vercel.app
PUBLIC_URL=https://tvoj-strapi.up.railway.app
```

**⚠️ Dôležité:** 
- `FRONTEND_URL` zmeň na skutočnú URL tvojho Vercel frontendu
- `PUBLIC_URL` zmeň na URL, ktorú ti Railway pridá po deploymente (nájdeš ju v Settings → Networking)

---

## 📋 Checklist

- [ ] Prihlásený na Railway
- [ ] Projekt otvorený
- [ ] PostgreSQL databáza pridaná
- [ ] Všetky environment variables pridané
- [ ] Railway automaticky redeploylo projekt
- [ ] Strapi beží (skontroluj Logs)
- [ ] Získal si PUBLIC_URL z Railway
- [ ] Aktualizoval si FRONTEND_URL a PUBLIC_URL
- [ ] Vytvoril si admin účet v Strapi admin paneli

---

## 🎯 Po deploymente

1. **Získaj URL Strapi:**
   - V Railway projekte → klikni na službu → **Settings** → **Networking**
   - Alebo v **Settings** → **Generate Domain**
   - URL bude napr.: `https://dany-art-cmc-production.up.railway.app`

2. **Aktualizuj Variables:**
   - Zmeň `PUBLIC_URL` na skutočnú URL
   - Zmeň `FRONTEND_URL` na tvoju Vercel URL

3. **Vytvor admin účet:**
   - Otvor: `https://tvoja-url.up.railway.app/admin`
   - Vytvor admin účet
   - Pridaj produkty v Content Manager

4. **Prepoj frontend:**
   - V Vercel projekte → **Settings** → **Environment Variables**
   - Pridaj: `NEXT_PUBLIC_API_URL=https://tvoja-railway-url.up.railway.app`

---

## ✅ Hotovo!

Strapi teraz beží na Railway a frontend na Verceli sa môže pripojiť k API! 🎉


