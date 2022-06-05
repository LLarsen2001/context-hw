import React, { useState } from 'react'
// create context
export const AccountContext = React.createContext() 

const dummyUser = {username:'Pinkfued', membershipLevel:'gold', dateJoined:'june 12'} 

const AccountProvider = (props)=>{
    let [user, setUser] = useState(null)
    const login = ()=>{
        setUser(dummyUser)
    }

    const updateUser = (updatedUser)=>{
        setUser(updatedUser)
    }

    const logout = ()=>{
        setUser(null)
    }
    return (
        <AccountContext.Provider value={{user:user, updateUser, login, logout,otherValue:'yo'}}>
         {props.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider


