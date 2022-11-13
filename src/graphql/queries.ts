/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSomethingAS = /* GraphQL */ `
  query SyncSomethingAS(
    $filter: ModelSomethingAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSomethingAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSomethingBS = /* GraphQL */ `
  query SyncSomethingBS(
    $filter: ModelSomethingBFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSomethingBS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationTags = /* GraphQL */ `
  query SyncOrganizationTags(
    $filter: ModelOrganizationTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagID
        organizationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSomethingASomethingBS = /* GraphQL */ `
  query SyncSomethingASomethingBS(
    $filter: ModelSomethingASomethingBFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSomethingASomethingBS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        somethingAID
        somethingBID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
