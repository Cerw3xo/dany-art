# Použijeme oficiálny Node.js 20 image (Alpine pre menšiu veľkosť)
FROM node:20-alpine

# Nastavíme pracovný adresár
WORKDIR /app

# Skopírujeme package.json a package-lock.json
COPY package*.json ./

# Nainštalujeme závislosti
RUN npm ci --only=production

# Skopírujeme zvyšok aplikácie
COPY . .

# Buildneme Strapi admin panel
RUN npm run build

# Exponujeme port (Railway automaticky nastaví PORT env variable)
EXPOSE ${PORT:-1337}

# Spustíme Strapi
CMD ["npm", "start"]

