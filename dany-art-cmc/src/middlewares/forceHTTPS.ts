/**
 * `forceHTTPS` middleware
 * 
 * Nastaví správne proxy headers pre Railway HTTPS
 */

export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Ak je NODE_ENV production a PUBLIC_URL obsahuje https://
    // doplň X-Forwarded-Proto header, aby Strapi vedel, že je za HTTPS proxy
    if (process.env.NODE_ENV === 'production') {
      const publicUrl = process.env.PUBLIC_URL || '';
      if (publicUrl.startsWith('https://')) {
        // Simuluj proxy hlavičky na RAW req, aby Koa/Strapi považoval spojenie za HTTPS
        const url = new URL(publicUrl);
        ctx.req.headers['x-forwarded-proto'] = 'https';
        ctx.req.headers['x-forwarded-host'] = url.host;
        ctx.req.headers['x-forwarded-port'] = url.port || '443';
      }
    }

    await next();
  };
};

