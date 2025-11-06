/**
 * global::health middleware
 * Jednoduchý liveness endpoint na /health
 */

export default () => {
    return async (ctx, next) => {
        if (ctx.path === '/health') {
            ctx.status = 200;
            ctx.body = { status: 'ok' };
            return;
        }
        await next();
    };
};


