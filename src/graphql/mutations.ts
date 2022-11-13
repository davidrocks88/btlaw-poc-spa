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
      _deleted
      organizations {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      organizations {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      organizations {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      tags {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      tags {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      tags {
        nextToken
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
        _deleted
        createdAt
        updatedAt
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
        _deleted
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        _deleted
        createdAt
        updatedAt
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
        _deleted
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        _deleted
        createdAt
        updatedAt
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
        _deleted
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      }
      somethingB {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      }
      somethingB {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      }
      somethingB {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
