/**
 * `forceHTTPS` middleware
 * 
 * Nastaví správne proxy headers pre Railway HTTPS
 */

export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Ak je NODE_ENV production a PUBLIC_URL obsahuje https://
    // nastav ctx.secure na true aby Strapi vedel, že je za HTTPS proxy
    if (process.env.NODE_ENV === 'production') {
      const publicUrl = process.env.PUBLIC_URL || '';
      if (publicUrl.startsWith('https://')) {
        ctx.request.secure = true;
        ctx.secure = true;
        // Nastav aj protocol
        ctx.protocol = 'https';
        ctx.request.protocol = 'https';
      }
    }
    
    await next();
  };
};

