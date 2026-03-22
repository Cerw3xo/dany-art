export default ({ env }) => {
  let publicUrl = env('PUBLIC_URL');
  if (publicUrl) {
    const normalized = publicUrl.trim();
    const withProtocol =
      normalized.startsWith('http://') || normalized.startsWith('https://')
        ? normalized
        : `https://${normalized}`;

    try {
      const parsed = new URL(withProtocol);
      // Strapi should run on origin URL only (no /admin suffix or extra path segments).
      publicUrl = parsed.origin;
    } catch {
      publicUrl = withProtocol.replace(/\/+$/, '');
    }
  }

  const isProduction = env('NODE_ENV') === 'production';

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: publicUrl,
    app: {
      keys: env.array('APP_KEYS'),
    },
    proxy: isProduction,
    cron: {
      enabled: false,
    },
  };
};
