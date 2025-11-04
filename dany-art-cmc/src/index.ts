import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Vytvor admin účet ak neexistuje
    try {
      const adminUsers = await strapi.db.query('admin::user').count();
      
      if (adminUsers === 0) {
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@dany-art.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
        const adminFirstname = process.env.ADMIN_FIRSTNAME || 'Admin';
        const adminLastname = process.env.ADMIN_LASTNAME || 'User';
        
        // Vytvor admin účet
        const superAdminRole = await strapi.db.query('admin::role').findOne({
          where: { code: 'strapi-super-admin' },
        });
        
        if (superAdminRole) {
          await strapi.admin.services.user.create({
            email: adminEmail,
            password: adminPassword,
            firstname: adminFirstname,
            lastname: adminLastname,
            isActive: true,
            roles: [superAdminRole.id],
          });
          
          strapi.log.info(`✅ Admin účet vytvorený: ${adminEmail}`);
        } else {
          strapi.log.warn('⚠️ Super admin role nebola nájdená');
        }
      } else {
        strapi.log.info(`ℹ️ Admin účet už existuje (${adminUsers} admin users)`);
      }
    } catch (error) {
      strapi.log.error('❌ Chyba pri vytváraní admin účtu:', error);
    }
  },
};
