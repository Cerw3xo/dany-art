export default () => {
  return async (ctx, next) => {
    if (ctx.method === 'GET' && ctx.path === '/') {
      // Redirect na /admin ak existuje PUBLIC_URL
      const publicUrl = process.env.PUBLIC_URL || '';
      if (publicUrl) {
        ctx.status = 302;
        ctx.redirect(`${publicUrl}/admin`);
        return;
      }
      ctx.status = 200;
      ctx.body = { ok: true };
      return;
    }
    await next();
  };
};


