export default () => {
  return async (ctx, next) => {
    if (ctx.method === 'GET' && ctx.path === '/') {
      // Normalize PUBLIC_URL to a clean origin so redirects never duplicate host/path.
      const rawPublicUrl = (process.env.PUBLIC_URL || '').trim();
      const publicUrl = rawPublicUrl
        ? (
            rawPublicUrl.startsWith('http://') ||
            rawPublicUrl.startsWith('https://')
              ? rawPublicUrl
              : `https://${rawPublicUrl}`
          )
        : '';
      let targetOrigin = publicUrl;
      if (publicUrl) {
        try {
          targetOrigin = new URL(publicUrl).origin;
        } catch {
          targetOrigin = publicUrl.replace(/\/+$/, '');
        }
      }

      if (targetOrigin) {
        ctx.status = 302;
        ctx.redirect(`${targetOrigin}/admin`);
        return;
      }
      ctx.status = 200;
      ctx.body = { ok: true };
      return;
    }
    await next();
  };
};
