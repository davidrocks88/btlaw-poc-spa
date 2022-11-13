/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _deleted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSomethingA = /* GraphQL */ `
  query GetSomethingA($id: ID!) {
    getSomethingA(id: $id) {
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
export const listSomethingAS = /* GraphQL */ `
  query ListSomethingAS(
    $filter: ModelSomethingAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSomethingAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSomethingB = /* GraphQL */ `
  query GetSomethingB($id: ID!) {
    getSomethingB(id: $id) {
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
export const listSomethingBS = /* GraphQL */ `
  query ListSomethingBS(
    $filter: ModelSomethingBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSomethingBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganizationTag = /* GraphQL */ `
  query GetOrganizationTag($id: ID!) {
    getOrganizationTag(id: $id) {
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
export const listOrganizationTags = /* GraphQL */ `
  query ListOrganizationTags(
    $filter: ModelOrganizationTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagID
        organizationID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSomethingASomethingB = /* GraphQL */ `
  query GetSomethingASomethingB($id: ID!) {
    getSomethingASomethingB(id: $id) {
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
export const listSomethingASomethingBS = /* GraphQL */ `
  query ListSomethingASomethingBS(
    $filter: ModelSomethingASomethingBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSomethingASomethingBS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        somethingAID
        somethingBID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
