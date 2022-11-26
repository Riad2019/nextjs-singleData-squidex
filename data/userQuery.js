import { gql } from "@apollo/client";

const USER_QUERY =  gql`
{
    queryUsersContents{
      id
      flatData{
        userName
        email
        isActive
      }
    } 

  }
`;
export default USER_QUERY;