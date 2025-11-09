export default ({ env }) => {
  const publicUrl = env('PUBLIC_URL', 'https://dany-art-production.up.railway.app');

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),

    },
    apiToken: { salt: env('API_TOKEN_SALT') },
    transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true)
    },
    url: `${publicUrl}/admin`,
    serveAdminPanel: true,
    forgotPassword: {
      from: env('ADMIN_EMAIL', 'owner@dany-art.com'),
      replyTo: env('ADMIN_EMAIL', 'owner@dany-art.com'),
    },
  };
};