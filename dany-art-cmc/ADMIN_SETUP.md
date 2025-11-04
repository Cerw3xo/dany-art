# 🔐 Nastavenie Admin účtu v Railway

## Automatické vytvorenie admin účtu

Strapi automaticky vytvorí admin účet pri prvom spustení, ak neexistuje žiadny admin účet v databáze.

## Nastavenie Environment Variables v Railway

1. V Railway projekte → klikni na Strapi službu
2. Choď do **Variables**
3. Pridaj tieto premenné (voliteľné - ak ich nepridáš, použijú sa default hodnoty):

```
ADMIN_EMAIL=tvoj-email@example.com
ADMIN_PASSWORD=tvoje-bezpecne-heslo
ADMIN_FIRSTNAME=Tvoje
ADMIN_LASTNAME=Meno
```

## Default hodnoty (ak nepridáš Variables)

- **Email**: `admin@dany-art.com`
- **Password**: `Admin123!`
- **Firstname**: `Admin`
- **Lastname**: `User`

⚠️ **Dôležité**: Po prvom deploymente zmeň heslo v admin paneli!

## Po deploymente

1. Počkaj na úspešný deployment
2. Otvor: `https://tvoja-url.up.railway.app/admin`
3. Prihlás sa pomocou:
   - Email: hodnota z `ADMIN_EMAIL` alebo `admin@dany-art.com`
   - Password: hodnota z `ADMIN_PASSWORD` alebo `Admin123!`
4. **Okamžite zmeň heslo** v Settings → Profile

## Ak admin účet už existuje

Ak už existuje admin účet v databáze, script ho nevytvorí znovu. V takom prípade:

- Skús sa prihlásiť s existujúcim účtom
- Alebo vymaž všetky admin účty z databázy a redeployni

## Troubleshooting

Ak sa admin účet nevytvorí:

1. Skontroluj Logs v Railway - mali by byť tam správy o vytváraní účtu
2. Over, či máš správne nastavené environment variables
3. Skontroluj, či Strapi úspešne beží (nie je chyba v Logs)
