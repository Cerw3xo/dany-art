# Použijeme oficiálny Node.js 20 image (Alpine pre menšiu veľkosť)
FROM node:20-alpine

# Nastavíme pracovný adresár
WORKDIR /app

# Skopírujeme package.json a package-lock.json
COPY package*.json ./

# Nainštalujeme VŠETKY závislosti (vrátane devDependencies pre build)
RUN npm ci

# Skopírujeme zvyšok aplikácie
COPY . .

# Vymažeme staré build súbory
RUN rm -rf .cache build dist

# Build args pre Railway secrets (potrebné pre Strapi build)
ARG APP_KEYS
ARG API_TOKEN_SALT
ARG ADMIN_JWT_SECRET
ARG TRANSFER_TOKEN_SALT
ARG JWT_SECRET
ARG DATABASE_CLIENT
ARG DATABASE_URL

# Nastavíme env variables pre build
ENV APP_KEYS=${APP_KEYS}
ENV API_TOKEN_SALT=${API_TOKEN_SALT}
ENV ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
ENV TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
ENV JWT_SECRET=${JWT_SECRET}
ENV DATABASE_CLIENT=${DATABASE_CLIENT}
ENV DATABASE_URL=${DATABASE_URL}
ENV NODE_ENV=production

# Buildneme Strapi admin panel
RUN npm run build

# Vymažeme devDependencies pre menší image
RUN npm prune --production

# Exponujeme port (Railway automaticky nastaví PORT env variable)
EXPOSE ${PORT:-1337}

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
    CMD node -e "require('http').get('http://localhost:${PORT:-1337}/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Spustíme Strapi
CMD ["npm", "start"]

