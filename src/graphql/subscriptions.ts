/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
export const onCreateOrganizationTag = /* GraphQL */ `
  subscription OnCreateOrganizationTag {
    onCreateOrganizationTag {
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
export const onUpdateOrganizationTag = /* GraphQL */ `
  subscription OnUpdateOrganizationTag {
    onUpdateOrganizationTag {
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
export const onDeleteOrganizationTag = /* GraphQL */ `
  subscription OnDeleteOrganizationTag {
    onDeleteOrganizationTag {
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
