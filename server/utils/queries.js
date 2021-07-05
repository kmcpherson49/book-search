import gql from 'graphql-tag';

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      savedBooks
    }
  }
`;