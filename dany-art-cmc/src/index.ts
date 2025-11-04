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

    try {
      // Počkaj kým sú admin services úplne pripravené
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Skontroluj počet admin účtov
      const adminUsers = await strapi.db.query('admin::user').count();
      strapi.log.info(`📊 Počet admin účtov v databáze: ${adminUsers}`);

      if (adminUsers === 0) {
        strapi.log.info('🔧 Vytváram nový admin účet...');

        const adminEmail = process.env.ADMIN_EMAIL || 'admin@dany-art.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
        const adminFirstname = process.env.ADMIN_FIRSTNAME || 'Admin';
        const adminLastname = process.env.ADMIN_LASTNAME || 'User';

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

        // Vytvor admin účet pomocou Strapi admin service
        // Toto je bezpečný spôsob - Strapi automaticky hashuje heslo
        const adminUser = await strapi.admin.services.user.create({
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
      } else {
        strapi.log.info(`ℹ️ Admin účet už existuje (${adminUsers} admin users)`);

        // Zobraz existujúce admin účty (bez hesiel)
        const existingAdmins = await strapi.db.query('admin::user').findMany({
          select: ['id', 'email', 'firstname', 'lastname', 'isActive'],
        });

        existingAdmins.forEach(admin => {
          strapi.log.info(`   - ${admin.email} (${admin.firstname} ${admin.lastname}) - Active: ${admin.isActive}`);
        });
      }
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
