import USER_QUERY from "../../../data/userQuery";
import apiClient from "../../../data/apollo-client";

export default async function handler(req, res) {
    const signInEmail = req.body
    // console.log(signInEmail)

    const data  = await apiClient().query({
        query: USER_QUERY
    });

    // const { queryUsersContents } = data;
    // const serverEmail = queryUsersContents[0].flatData.email 
    // console.log(data.data)

    
    const filteredMail = data.data.queryUsersContents.filter((x) => x.flatData.email == signInEmail.email);
    console.log(filteredMail)

    // console.log(filteredMail);
    //    emailVerify (emails){
    //     return signInEmail.email == emails
    //   }
    //   const verify = serverEmail.filter(emailVerify)
    res.status(201).json(filteredMail)

}

