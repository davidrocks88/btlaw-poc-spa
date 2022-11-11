// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Organization, OrganizationTag } = initSchema(schema);

export {
  Tag,
  Organization,
  OrganizationTag
};