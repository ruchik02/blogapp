import {gql} from '@apollo/client';

export const GET_USER=gql`
query MyQuery2($_eq: uuid ) {
  UserInfo(where: {id: {_eq: $_eq}}) {
    email
    password
  }
}

`;
