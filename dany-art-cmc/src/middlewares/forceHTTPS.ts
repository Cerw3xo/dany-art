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
        // NENASTAVUJ ctx.secure/ctx.request.secure – sú to gettre
        // Stačí pridať X-Forwarded-Proto pre správnu detekciu HTTPS
        ctx.headers['x-forwarded-proto'] = 'https';
        ctx.request.headers['x-forwarded-proto'] = 'https';
        ctx.set('X-Forwarded-Proto', 'https');
      }
    }

    await next();
  };
};

