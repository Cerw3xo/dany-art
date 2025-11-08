export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'global::health',
    config: {},
  },
  {
    name: 'global::rootOk',
    config: {},
  },
  {
    name: 'global::forceHTTPS',
    config: {},
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: env.bool('ADMIN_SESSION_SECURE', false),
        sameSite: 'lax',
      },
    },
  },
  'strapi::favicon',
  'strapi::public',
];
