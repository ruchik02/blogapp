import {gql} from '@apollo/client';
export const ADD_USER=gql`
 mutation MyMutation($email: String, $name: String , $password: String ) {
  insert_UserInfo_one(object: {email: $email, name: $name, password: $password}) {
    email
    name
    password
  }
}
`;
export const ADD_BLOG=gql`
mutation MyMutation($description: String , $title: String ) {
  insert_blog_one(object: {description: $description, title: $title}) {
    description
    title
  }
}
`
