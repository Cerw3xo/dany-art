#!/usr/bin/env node

/**
 * Generuje náhodné secrets pre Strapi
 * Použitie: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

console.log('\n🔐 Generated Strapi Secrets:\n');
console.log('APP_KEYS=' + [
  generateSecret(),
  generateSecret(),
  generateSecret(),
  generateSecret()
].join(','));
console.log('API_TOKEN_SALT=' + generateSecret());
console.log('ADMIN_JWT_SECRET=' + generateSecret());
console.log('TRANSFER_TOKEN_SALT=' + generateSecret());
console.log('JWT_SECRET=' + generateSecret());
console.log('\n✅ Skopíruj tieto hodnoty do Railway environment variables!\n');



