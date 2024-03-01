import { gql } from '@apollo/client';

export const GET_ALL_POST = gql`
  query {
    query: allPosts {
      title
    }
  }
`;
