import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.log.info('🚀 Bootstrap script sa spustil...');
    strapi.log.info(`ℹ️ ENV PORT=${process.env.PORT} HOST=${process.env.HOST} PUBLIC_URL=${process.env.PUBLIC_URL}`);

    try {
      // Počkaj kým sú admin services úplne pripravené
      await new Promise(resolve => setTimeout(resolve, 2000));

      const adminEmail = process.env.ADMIN_EMAIL || 'admin@dany-art.com';
      const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
      const adminFirstname = process.env.ADMIN_FIRSTNAME || 'Admin';
      const adminLastname = process.env.ADMIN_LASTNAME || 'User';

      // Ak už existuje aspoň jeden admin účet, buď nerob nič alebo vykonaj reset podľa env
      const adminsCount = await strapi.db.query('admin::user').count();
      const shouldForceReset = (process.env.ADMIN_RESET || '').toLowerCase() === 'true';
      if (adminsCount > 0 && !shouldForceReset) {
        strapi.log.info(`ℹ️ Admin účty už existujú (počet: ${adminsCount}) – nevytváram nový.`);
        return;
      }

      if (adminsCount > 0 && shouldForceReset) {
        strapi.log.warn('🛠 ADMIN_RESET=true – resetujem existujúci admin účet');

        const superAdminRole = await strapi.db.query('admin::role').findOne({
          where: { code: 'strapi-super-admin' },
        });
        if (!superAdminRole) {
          strapi.log.error('❌ Super admin role nebola nájdená počas resetu!');
          return;
        }

        const existing = await strapi.db.query('admin::user').findOne({ where: { email: adminEmail } });
        if (!existing) {
          strapi.log.warn(`⚠️ Admin s emailom ${adminEmail} neexistuje – vytváram nový namiesto resetu`);
        } else {
          await strapi.service('admin::user').update(existing.id, {
            password: adminPassword,
            firstname: adminFirstname,
            lastname: adminLastname,
            isActive: true,
            roles: [superAdminRole.id],
          });

          strapi.log.info(`✅ Admin účet resetnutý (email: ${adminEmail})`);
          return;
        }
      }

      strapi.log.info('🔧 Nenašli sa žiadne admin účty – vytváram prvý admin účet...');

      // Nájdi super admin role - musí existovať v Strapi
      const superAdminRole = await strapi.db.query('admin::role').findOne({
        where: { code: 'strapi-super-admin' },
      });

      if (!superAdminRole) {
        strapi.log.error('❌ Super admin role nebola nájdená!');
        strapi.log.error('   Strapi možno ešte nie je úplne inicializovaný.');
        return;
      }

      strapi.log.info(`✅ Super admin role nájdená (ID: ${superAdminRole.id})`);

      // Vytvor admin účet pomocou admin service
      const adminUser = await strapi.service('admin::user').create({
        email: adminEmail,
        password: adminPassword,
        firstname: adminFirstname,
        lastname: adminLastname,
        isActive: true,
        roles: [superAdminRole.id],
      });

      strapi.log.info(`✅ Admin účet úspešne vytvorený!`);
      strapi.log.info(`   Email: ${adminEmail}`);
      strapi.log.info(`   ID: ${adminUser.id}`);
      strapi.log.info(`   Firstname: ${adminFirstname}`);
      strapi.log.info(`   Lastname: ${adminLastname}`);
      strapi.log.info(`   🔐 Môžeš sa teraz prihlásiť pomocou týchto údajov!`);

      // Zobraz všetky existujúce admin účty
      const allAdmins = await strapi.db.query('admin::user').findMany({
        select: ['id', 'email', 'firstname', 'lastname', 'isActive'],
      });

      strapi.log.info(`📋 Všetky admin účty v databáze (${allAdmins.length}):`);
      allAdmins.forEach(admin => {
        strapi.log.info(`   - ${admin.email} (${admin.firstname} ${admin.lastname}) - Active: ${admin.isActive}`);
      });
    } catch (error: any) {
      strapi.log.error('❌ Chyba pri vytváraní admin účtu:');
      strapi.log.error(`   Message: ${error.message}`);

      if (error.stack) {
        strapi.log.error(`   Stack: ${error.stack}`);
      }

      // Ak je chyba s services, možno sú ešte nie pripravené
      if (error.message?.includes('admin') || error.message?.includes('service')) {
        strapi.log.warn('⚠️ Admin services možno ešte nie sú pripravené.');
        strapi.log.warn('   Skús restartovať Strapi alebo vytvoriť admin účet manuálne.');
      }
    }
  },
};
