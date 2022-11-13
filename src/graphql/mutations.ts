/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      organizations {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      organizations {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      organizations {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      description
      btContactName
      volunteerContactName
      volunteerContactEmail
      volunteerContactPhone
      volunteerUrl
      trainingInformation
      areasServed
      orgUrl
      Tags {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      description
      btContactName
      volunteerContactName
      volunteerContactEmail
      volunteerContactPhone
      volunteerUrl
      trainingInformation
      areasServed
      orgUrl
      Tags {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      description
      btContactName
      volunteerContactName
      volunteerContactEmail
      volunteerContactPhone
      volunteerUrl
      trainingInformation
      areasServed
      orgUrl
      Tags {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSomethingA = /* GraphQL */ `
  mutation CreateSomethingA(
    $input: CreateSomethingAInput!
    $condition: ModelSomethingAConditionInput
  ) {
    createSomethingA(input: $input, condition: $condition) {
      id
      name
      somethingBs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSomethingA = /* GraphQL */ `
  mutation UpdateSomethingA(
    $input: UpdateSomethingAInput!
    $condition: ModelSomethingAConditionInput
  ) {
    updateSomethingA(input: $input, condition: $condition) {
      id
      name
      somethingBs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSomethingA = /* GraphQL */ `
  mutation DeleteSomethingA(
    $input: DeleteSomethingAInput!
    $condition: ModelSomethingAConditionInput
  ) {
    deleteSomethingA(input: $input, condition: $condition) {
      id
      name
      somethingBs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSomethingB = /* GraphQL */ `
  mutation CreateSomethingB(
    $input: CreateSomethingBInput!
    $condition: ModelSomethingBConditionInput
  ) {
    createSomethingB(input: $input, condition: $condition) {
      id
      name
      description
      somethingAs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSomethingB = /* GraphQL */ `
  mutation UpdateSomethingB(
    $input: UpdateSomethingBInput!
    $condition: ModelSomethingBConditionInput
  ) {
    updateSomethingB(input: $input, condition: $condition) {
      id
      name
      description
      somethingAs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSomethingB = /* GraphQL */ `
  mutation DeleteSomethingB(
    $input: DeleteSomethingBInput!
    $condition: ModelSomethingBConditionInput
  ) {
    deleteSomethingB(input: $input, condition: $condition) {
      id
      name
      description
      somethingAs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrganizationTag = /* GraphQL */ `
  mutation CreateOrganizationTag(
    $input: CreateOrganizationTagInput!
    $condition: ModelOrganizationTagConditionInput
  ) {
    createOrganizationTag(input: $input, condition: $condition) {
      id
      tagID
      organizationID
      tag {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      organization {
        id
        name
        description
        btContactName
        volunteerContactName
        volunteerContactEmail
        volunteerContactPhone
        volunteerUrl
        trainingInformation
        areasServed
        orgUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrganizationTag = /* GraphQL */ `
  mutation UpdateOrganizationTag(
    $input: UpdateOrganizationTagInput!
    $condition: ModelOrganizationTagConditionInput
  ) {
    updateOrganizationTag(input: $input, condition: $condition) {
      id
      tagID
      organizationID
      tag {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      organization {
        id
        name
        description
        btContactName
        volunteerContactName
        volunteerContactEmail
        volunteerContactPhone
        volunteerUrl
        trainingInformation
        areasServed
        orgUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrganizationTag = /* GraphQL */ `
  mutation DeleteOrganizationTag(
    $input: DeleteOrganizationTagInput!
    $condition: ModelOrganizationTagConditionInput
  ) {
    deleteOrganizationTag(input: $input, condition: $condition) {
      id
      tagID
      organizationID
      tag {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      organization {
        id
        name
        description
        btContactName
        volunteerContactName
        volunteerContactEmail
        volunteerContactPhone
        volunteerUrl
        trainingInformation
        areasServed
        orgUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSomethingASomethingB = /* GraphQL */ `
  mutation CreateSomethingASomethingB(
    $input: CreateSomethingASomethingBInput!
    $condition: ModelSomethingASomethingBConditionInput
  ) {
    createSomethingASomethingB(input: $input, condition: $condition) {
      id
      somethingAID
      somethingBID
      somethingA {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      somethingB {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSomethingASomethingB = /* GraphQL */ `
  mutation UpdateSomethingASomethingB(
    $input: UpdateSomethingASomethingBInput!
    $condition: ModelSomethingASomethingBConditionInput
  ) {
    updateSomethingASomethingB(input: $input, condition: $condition) {
      id
      somethingAID
      somethingBID
      somethingA {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      somethingB {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSomethingASomethingB = /* GraphQL */ `
  mutation DeleteSomethingASomethingB(
    $input: DeleteSomethingASomethingBInput!
    $condition: ModelSomethingASomethingBConditionInput
  ) {
    deleteSomethingASomethingB(input: $input, condition: $condition) {
      id
      somethingAID
      somethingBID
      somethingA {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      somethingB {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
