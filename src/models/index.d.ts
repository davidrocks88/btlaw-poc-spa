import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganizationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganizationTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly organizations?: (OrganizationTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Organization {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly btContactName?: string | null;
  readonly volunteerContactName?: string | null;
  readonly volunteerContactEmail?: string | null;
  readonly volunteerContactPhone?: string | null;
  readonly volunteerUrl?: string | null;
  readonly trainingInformation?: string | null;
  readonly areasServed?: string | null;
  readonly orgUrl?: string | null;
  readonly Tags?: (OrganizationTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Organization, OrganizationMetaData>);
  static copyOf(source: Organization, mutator: (draft: MutableModel<Organization, OrganizationMetaData>) => MutableModel<Organization, OrganizationMetaData> | void): Organization;
}

export declare class OrganizationTag {
  readonly id: string;
  readonly tag: Tag;
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrganizationTag, OrganizationTagMetaData>);
  static copyOf(source: OrganizationTag, mutator: (draft: MutableModel<OrganizationTag, OrganizationTagMetaData>) => MutableModel<OrganizationTag, OrganizationTagMetaData> | void): OrganizationTag;
}