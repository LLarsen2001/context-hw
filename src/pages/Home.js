import React, { useContext } from "react";
import ToggleCard from "../components/ToggleCard";
import { AccountContext } from "../providers/AccountProvider";

const Home =()=>{
    const {user} = useContext(AccountContext)
    return(
        <div>
            <h1>Home</h1>
            {user &&<p>Hello: {user.username}</p>}
           <ToggleCard title='card 1'>
               <p>hello {user.username} how are you today</p>
            
           </ToggleCard>

        </div>
    )
}

export default Home