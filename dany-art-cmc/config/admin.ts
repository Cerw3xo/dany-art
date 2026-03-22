export default ({ env }) => {
  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
      cookie: {
        // Keep host-only cookie by default; set domain only if you explicitly need cross-subdomain auth.
        domain: env('ADMIN_AUTH_COOKIE_DOMAIN', undefined),
        path: '/admin',
        sameSite: 'lax',
      },
      sessions: {
        accessTokenLifespan: env.int('ADMIN_ACCESS_TOKEN_LIFESPAN', 30 * 60),
        maxRefreshTokenLifespan: env.int(
          'ADMIN_MAX_REFRESH_TOKEN_LIFESPAN',
          30 * 24 * 60 * 60
        ),
        idleRefreshTokenLifespan: env.int(
          'ADMIN_IDLE_REFRESH_TOKEN_LIFESPAN',
          14 * 24 * 60 * 60
        ),
        maxSessionLifespan: env.int(
          'ADMIN_MAX_SESSION_LIFESPAN',
          24 * 60 * 60
        ),
        idleSessionLifespan: env.int(
          'ADMIN_IDLE_SESSION_LIFESPAN',
          2 * 60 * 60
        ),
      },
    },
    apiToken: { salt: env('API_TOKEN_SALT') },
    transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true)
    },
    preview: {
      // Disable Content Manager preview endpoint unless explicit preview handler is configured.
      enabled: false,
    },
    url: '/admin',
    serveAdminPanel: true,
    forgotPassword: {
      from: env('ADMIN_EMAIL', 'owner@dany-art.com'),
      replyTo: env('ADMIN_EMAIL', 'owner@dany-art.com'),
    },
  };
};
