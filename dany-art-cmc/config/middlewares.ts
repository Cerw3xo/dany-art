export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'global::health',
    config: {},
  },
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: env.array('FRONTEND_URL', ['http://localhost:3000']),
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: env('NODE_ENV') === 'production',
        sameSite: 'lax',
      },
    },
  },
  'strapi::favicon',
  'strapi::public',
];
