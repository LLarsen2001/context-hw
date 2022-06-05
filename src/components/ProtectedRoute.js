import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AccountContext } from "../providers/AccountProvider"


const ProtectedRouted = ()=>{
    const {user} = useContext(AccountContext)
    return user ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRouted