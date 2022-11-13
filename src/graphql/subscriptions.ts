/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
      _deleted
      tags {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      tags {
        nextToken
      }
      createdAt
      updatedAt
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
      _deleted
      tags {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSomethingA = /* GraphQL */ `
  subscription OnCreateSomethingA {
    onCreateSomethingA {
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
export const onUpdateSomethingA = /* GraphQL */ `
  subscription OnUpdateSomethingA {
    onUpdateSomethingA {
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
export const onDeleteSomethingA = /* GraphQL */ `
  subscription OnDeleteSomethingA {
    onDeleteSomethingA {
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
export const onCreateSomethingB = /* GraphQL */ `
  subscription OnCreateSomethingB {
    onCreateSomethingB {
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
export const onUpdateSomethingB = /* GraphQL */ `
  subscription OnUpdateSomethingB {
    onUpdateSomethingB {
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
export const onDeleteSomethingB = /* GraphQL */ `
  subscription OnDeleteSomethingB {
    onDeleteSomethingB {
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
export const onCreateOrganizationTag = /* GraphQL */ `
  subscription OnCreateOrganizationTag {
    onCreateOrganizationTag {
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
export const onUpdateOrganizationTag = /* GraphQL */ `
  subscription OnUpdateOrganizationTag {
    onUpdateOrganizationTag {
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
export const onDeleteOrganizationTag = /* GraphQL */ `
  subscription OnDeleteOrganizationTag {
    onDeleteOrganizationTag {
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
export const onCreateSomethingASomethingB = /* GraphQL */ `
  subscription OnCreateSomethingASomethingB {
    onCreateSomethingASomethingB {
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
export const onUpdateSomethingASomethingB = /* GraphQL */ `
  subscription OnUpdateSomethingASomethingB {
    onUpdateSomethingASomethingB {
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
export const onDeleteSomethingASomethingB = /* GraphQL */ `
  subscription OnDeleteSomethingASomethingB {
    onDeleteSomethingASomethingB {
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
