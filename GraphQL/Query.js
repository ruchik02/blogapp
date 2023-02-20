import {gql} from '@apollo/client';

export const GET_USER=gql`
  query Login($email: String!) {
    UserInfo(where: { email: { _eq: $email } }) {
      id
      email
      password
      name
    }
  }
`;
