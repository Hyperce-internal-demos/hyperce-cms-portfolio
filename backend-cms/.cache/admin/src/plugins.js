
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import graphql from '../../../node_modules/@strapi/plugin-graphql/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import heroiconsField from '../../../node_modules/strapi-plugin-heroicons-field/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'graphql': graphql,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'heroicons-field': heroiconsField,
};

export default plugins;
