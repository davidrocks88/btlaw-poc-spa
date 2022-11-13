// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Organization, SomethingA, SomethingB, OrganizationTag, SomethingASomethingB } = initSchema(schema);

export {
  Tag,
  Organization,
  SomethingA,
  SomethingB,
  OrganizationTag,
  SomethingASomethingB
};