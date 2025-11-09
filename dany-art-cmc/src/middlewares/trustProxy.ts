/**
 * Trust proxy middleware
 * Nastaví Koa app.proxy = true pre správne fungovanie za Railway reverse proxy
 */

export default (config, { strapi }) => {
    return async (ctx, next) => {
        // Nastav trust proxy pre Koa
        if (process.env.NODE_ENV === 'production') {
            ctx.app.proxy = true;
        }

        await next();
    };
};

