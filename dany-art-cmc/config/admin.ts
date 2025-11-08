export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      enabled: false,
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_LIFESPAN', 7 * 24 * 60 * 60),
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_LIFESPAN', 24 * 60 * 60),
      cookie: {
        secure: env.bool('ADMIN_SESSION_SECURE', false),
        sameSite: 'lax',
      },
    },
  },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  secrets: { encryptionKey: env('ENCRYPTION_KEY') },
  flags: { nps: env.bool('FLAG_NPS', true), promoteEE: env.bool('FLAG_PROMOTE_EE', true) },
  rateLimit: { enabled: true, cookie: { secure: false, sameSite: 'lax' }, },
});