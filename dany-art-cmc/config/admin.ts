export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Session cookies nastavenia pre Railway (HTTPS proxy)
    sessions: {
      cookieOptions: {
        secure: env('NODE_ENV', 'production') === 'production',
        sameSite: 'lax',
      },
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  // Povolí secure cookies cez HTTPS proxy (Railway)
  rateLimit: {
    enabled: true,
  },
});
