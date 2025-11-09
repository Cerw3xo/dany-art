export default ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return [
    'strapi::logger',
    'strapi::errors',
    {
      name: 'global::trustProxy',
      config: {},
    },
    {
      name: 'global::health',
      config: {},
    },
    {
      name: 'global::rootOk',
      config: {},
    },
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'https:'],
            'media-src': ["'self'", 'data:', 'blob:', 'https:'],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    {
      name: 'strapi::session',
      config: {
        rolling: true,
        renew: true,
      },
    },
    'strapi::favicon',
    'strapi::public',
  ];
};
