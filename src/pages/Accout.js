import React, { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";
const Account = () =>{
   const {user}= useContext(AccountContext)
    return(
        <div>
            <h1>Account</h1>
            {user &&<p>Hello: {user.username}</p>}

        </div>

    )
};
export default Account