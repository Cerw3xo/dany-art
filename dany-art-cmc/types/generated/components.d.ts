import type { Schema, Struct } from '@strapi/strapi';

export interface ProductDescriptionBlock extends Struct.ComponentSchema {
  collectionName: 'components_product_description_blocks';
  info: {
    description: 'A structured description block with title and rich text content';
    displayName: 'Description Block';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.description-block': ProductDescriptionBlock;
    }
  }
}
