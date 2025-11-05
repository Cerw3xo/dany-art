export default ({ env }) => {
  // Zabezpeč, že URL má https:// prefix
  let publicUrl = env('PUBLIC_URL', 'https://dany-art-production.up.railway.app');
  if (publicUrl && !publicUrl.startsWith('http://') && !publicUrl.startsWith('https://')) {
    publicUrl = `https://${publicUrl}`;
  }

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: publicUrl,
    app: {
      keys: env.array('APP_KEYS'),
    },
    // Dôveruj proxy headers (pre Railway HTTPS)
    proxy: true,
  };
};
