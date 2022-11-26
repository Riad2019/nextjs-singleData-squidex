import { gql } from "@apollo/client";

const SEARCH_QUERY = gql`
query{
    queryUsersContents{
      id
      flatData {
        email
        userName
        password
        isActive
      }
    }
  }

`;
export default SEARCH_QUERY;
