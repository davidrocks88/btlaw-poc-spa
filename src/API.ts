/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTagInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  organizations?: ModelOrganizationTagConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelOrganizationTagConnection = {
  __typename: "ModelOrganizationTagConnection",
  items:  Array<OrganizationTag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type OrganizationTag = {
  __typename: "OrganizationTag",
  id: string,
  tagID: string,
  organizationID: string,
  tag: Tag,
  organization: Organization,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  description?: string | null,
  btContactName?: string | null,
  volunteerContactName?: string | null,
  volunteerContactEmail?: string | null,
  volunteerContactPhone?: string | null,
  volunteerUrl?: string | null,
  trainingInformation?: string | null,
  areasServed?: string | null,
  orgUrl?: string | null,
  Tags?: ModelOrganizationTagConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteTagInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  btContactName?: string | null,
  volunteerContactName?: string | null,
  volunteerContactEmail?: string | null,
  volunteerContactPhone?: string | null,
  volunteerUrl?: string | null,
  trainingInformation?: string | null,
  areasServed?: string | null,
  orgUrl?: string | null,
  _version?: number | null,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  btContactName?: ModelStringInput | null,
  volunteerContactName?: ModelStringInput | null,
  volunteerContactEmail?: ModelStringInput | null,
  volunteerContactPhone?: ModelStringInput | null,
  volunteerUrl?: ModelStringInput | null,
  trainingInformation?: ModelStringInput | null,
  areasServed?: ModelStringInput | null,
  orgUrl?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  btContactName?: string | null,
  volunteerContactName?: string | null,
  volunteerContactEmail?: string | null,
  volunteerContactPhone?: string | null,
  volunteerUrl?: string | null,
  trainingInformation?: string | null,
  areasServed?: string | null,
  orgUrl?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationInput = {
  id: string,
  _version?: number | null,
};

export type CreateSomethingAInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelSomethingAConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSomethingAConditionInput | null > | null,
  or?: Array< ModelSomethingAConditionInput | null > | null,
  not?: ModelSomethingAConditionInput | null,
};

export type SomethingA = {
  __typename: "SomethingA",
  id: string,
  name: string,
  somethingBs?: ModelSomethingASomethingBConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSomethingASomethingBConnection = {
  __typename: "ModelSomethingASomethingBConnection",
  items:  Array<SomethingASomethingB | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SomethingASomethingB = {
  __typename: "SomethingASomethingB",
  id: string,
  somethingAID: string,
  somethingBID: string,
  somethingA: SomethingA,
  somethingB: SomethingB,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type SomethingB = {
  __typename: "SomethingB",
  id: string,
  name: string,
  description?: string | null,
  somethingAs?: ModelSomethingASomethingBConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSomethingAInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSomethingAInput = {
  id: string,
  _version?: number | null,
};

export type CreateSomethingBInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelSomethingBConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSomethingBConditionInput | null > | null,
  or?: Array< ModelSomethingBConditionInput | null > | null,
  not?: ModelSomethingBConditionInput | null,
};

export type UpdateSomethingBInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteSomethingBInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationTagInput = {
  id?: string | null,
  tagID: string,
  organizationID: string,
  _version?: number | null,
};

export type ModelOrganizationTagConditionInput = {
  tagID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  and?: Array< ModelOrganizationTagConditionInput | null > | null,
  or?: Array< ModelOrganizationTagConditionInput | null > | null,
  not?: ModelOrganizationTagConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateOrganizationTagInput = {
  id: string,
  tagID?: string | null,
  organizationID?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationTagInput = {
  id: string,
  _version?: number | null,
};

export type CreateSomethingASomethingBInput = {
  id?: string | null,
  somethingAID: string,
  somethingBID: string,
  _version?: number | null,
};

export type ModelSomethingASomethingBConditionInput = {
  somethingAID?: ModelIDInput | null,
  somethingBID?: ModelIDInput | null,
  and?: Array< ModelSomethingASomethingBConditionInput | null > | null,
  or?: Array< ModelSomethingASomethingBConditionInput | null > | null,
  not?: ModelSomethingASomethingBConditionInput | null,
};

export type UpdateSomethingASomethingBInput = {
  id: string,
  somethingAID?: string | null,
  somethingBID?: string | null,
  _version?: number | null,
};

export type DeleteSomethingASomethingBInput = {
  id: string,
  _version?: number | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  btContactName?: ModelStringInput | null,
  volunteerContactName?: ModelStringInput | null,
  volunteerContactEmail?: ModelStringInput | null,
  volunteerContactPhone?: ModelStringInput | null,
  volunteerUrl?: ModelStringInput | null,
  trainingInformation?: ModelStringInput | null,
  areasServed?: ModelStringInput | null,
  orgUrl?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSomethingAFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSomethingAFilterInput | null > | null,
  or?: Array< ModelSomethingAFilterInput | null > | null,
  not?: ModelSomethingAFilterInput | null,
};

export type ModelSomethingAConnection = {
  __typename: "ModelSomethingAConnection",
  items:  Array<SomethingA | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSomethingBFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSomethingBFilterInput | null > | null,
  or?: Array< ModelSomethingBFilterInput | null > | null,
  not?: ModelSomethingBFilterInput | null,
};

export type ModelSomethingBConnection = {
  __typename: "ModelSomethingBConnection",
  items:  Array<SomethingB | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrganizationTagFilterInput = {
  id?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  and?: Array< ModelOrganizationTagFilterInput | null > | null,
  or?: Array< ModelOrganizationTagFilterInput | null > | null,
  not?: ModelOrganizationTagFilterInput | null,
};

export type ModelSomethingASomethingBFilterInput = {
  id?: ModelIDInput | null,
  somethingAID?: ModelIDInput | null,
  somethingBID?: ModelIDInput | null,
  and?: Array< ModelSomethingASomethingBFilterInput | null > | null,
  or?: Array< ModelSomethingASomethingBFilterInput | null > | null,
  not?: ModelSomethingASomethingBFilterInput | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSomethingAMutationVariables = {
  input: CreateSomethingAInput,
  condition?: ModelSomethingAConditionInput | null,
};

export type CreateSomethingAMutation = {
  createSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSomethingAMutationVariables = {
  input: UpdateSomethingAInput,
  condition?: ModelSomethingAConditionInput | null,
};

export type UpdateSomethingAMutation = {
  updateSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSomethingAMutationVariables = {
  input: DeleteSomethingAInput,
  condition?: ModelSomethingAConditionInput | null,
};

export type DeleteSomethingAMutation = {
  deleteSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSomethingBMutationVariables = {
  input: CreateSomethingBInput,
  condition?: ModelSomethingBConditionInput | null,
};

export type CreateSomethingBMutation = {
  createSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSomethingBMutationVariables = {
  input: UpdateSomethingBInput,
  condition?: ModelSomethingBConditionInput | null,
};

export type UpdateSomethingBMutation = {
  updateSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSomethingBMutationVariables = {
  input: DeleteSomethingBInput,
  condition?: ModelSomethingBConditionInput | null,
};

export type DeleteSomethingBMutation = {
  deleteSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationTagMutationVariables = {
  input: CreateOrganizationTagInput,
  condition?: ModelOrganizationTagConditionInput | null,
};

export type CreateOrganizationTagMutation = {
  createOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationTagMutationVariables = {
  input: UpdateOrganizationTagInput,
  condition?: ModelOrganizationTagConditionInput | null,
};

export type UpdateOrganizationTagMutation = {
  updateOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationTagMutationVariables = {
  input: DeleteOrganizationTagInput,
  condition?: ModelOrganizationTagConditionInput | null,
};

export type DeleteOrganizationTagMutation = {
  deleteOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSomethingASomethingBMutationVariables = {
  input: CreateSomethingASomethingBInput,
  condition?: ModelSomethingASomethingBConditionInput | null,
};

export type CreateSomethingASomethingBMutation = {
  createSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSomethingASomethingBMutationVariables = {
  input: UpdateSomethingASomethingBInput,
  condition?: ModelSomethingASomethingBConditionInput | null,
};

export type UpdateSomethingASomethingBMutation = {
  updateSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSomethingASomethingBMutationVariables = {
  input: DeleteSomethingASomethingBInput,
  condition?: ModelSomethingASomethingBConditionInput | null,
};

export type DeleteSomethingASomethingBMutation = {
  deleteSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationsQuery = {
  syncOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSomethingAQueryVariables = {
  id: string,
};

export type GetSomethingAQuery = {
  getSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSomethingASQueryVariables = {
  filter?: ModelSomethingAFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSomethingASQuery = {
  listSomethingAS?:  {
    __typename: "ModelSomethingAConnection",
    items:  Array< {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSomethingASQueryVariables = {
  filter?: ModelSomethingAFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSomethingASQuery = {
  syncSomethingAS?:  {
    __typename: "ModelSomethingAConnection",
    items:  Array< {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSomethingBQueryVariables = {
  id: string,
};

export type GetSomethingBQuery = {
  getSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSomethingBSQueryVariables = {
  filter?: ModelSomethingBFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSomethingBSQuery = {
  listSomethingBS?:  {
    __typename: "ModelSomethingBConnection",
    items:  Array< {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSomethingBSQueryVariables = {
  filter?: ModelSomethingBFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSomethingBSQuery = {
  syncSomethingBS?:  {
    __typename: "ModelSomethingBConnection",
    items:  Array< {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationTagQueryVariables = {
  id: string,
};

export type GetOrganizationTagQuery = {
  getOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationTagsQueryVariables = {
  filter?: ModelOrganizationTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationTagsQuery = {
  listOrganizationTags?:  {
    __typename: "ModelOrganizationTagConnection",
    items:  Array< {
      __typename: "OrganizationTag",
      id: string,
      tagID: string,
      organizationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationTagsQueryVariables = {
  filter?: ModelOrganizationTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationTagsQuery = {
  syncOrganizationTags?:  {
    __typename: "ModelOrganizationTagConnection",
    items:  Array< {
      __typename: "OrganizationTag",
      id: string,
      tagID: string,
      organizationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSomethingASomethingBQueryVariables = {
  id: string,
};

export type GetSomethingASomethingBQuery = {
  getSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSomethingASomethingBSQueryVariables = {
  filter?: ModelSomethingASomethingBFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSomethingASomethingBSQuery = {
  listSomethingASomethingBS?:  {
    __typename: "ModelSomethingASomethingBConnection",
    items:  Array< {
      __typename: "SomethingASomethingB",
      id: string,
      somethingAID: string,
      somethingBID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSomethingASomethingBSQueryVariables = {
  filter?: ModelSomethingASomethingBFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSomethingASomethingBSQuery = {
  syncSomethingASomethingBS?:  {
    __typename: "ModelSomethingASomethingBConnection",
    items:  Array< {
      __typename: "SomethingASomethingB",
      id: string,
      somethingAID: string,
      somethingBID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    organizations?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    btContactName?: string | null,
    volunteerContactName?: string | null,
    volunteerContactEmail?: string | null,
    volunteerContactPhone?: string | null,
    volunteerUrl?: string | null,
    trainingInformation?: string | null,
    areasServed?: string | null,
    orgUrl?: string | null,
    Tags?:  {
      __typename: "ModelOrganizationTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSomethingASubscription = {
  onCreateSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSomethingASubscription = {
  onUpdateSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSomethingASubscription = {
  onDeleteSomethingA?:  {
    __typename: "SomethingA",
    id: string,
    name: string,
    somethingBs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSomethingBSubscription = {
  onCreateSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSomethingBSubscription = {
  onUpdateSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSomethingBSubscription = {
  onDeleteSomethingB?:  {
    __typename: "SomethingB",
    id: string,
    name: string,
    description?: string | null,
    somethingAs?:  {
      __typename: "ModelSomethingASomethingBConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationTagSubscription = {
  onCreateOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationTagSubscription = {
  onUpdateOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationTagSubscription = {
  onDeleteOrganizationTag?:  {
    __typename: "OrganizationTag",
    id: string,
    tagID: string,
    organizationID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      btContactName?: string | null,
      volunteerContactName?: string | null,
      volunteerContactEmail?: string | null,
      volunteerContactPhone?: string | null,
      volunteerUrl?: string | null,
      trainingInformation?: string | null,
      areasServed?: string | null,
      orgUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSomethingASomethingBSubscription = {
  onCreateSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSomethingASomethingBSubscription = {
  onUpdateSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSomethingASomethingBSubscription = {
  onDeleteSomethingASomethingB?:  {
    __typename: "SomethingASomethingB",
    id: string,
    somethingAID: string,
    somethingBID: string,
    somethingA:  {
      __typename: "SomethingA",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    somethingB:  {
      __typename: "SomethingB",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
