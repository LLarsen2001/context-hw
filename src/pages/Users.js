import axios from "axios"
import { useEffect, useState } from "react"
import ToggleCard from "../components/ToggleCard"

const Users=()=>{
    let [users, setUsers] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        getUsers()
    },[])
    const getUsers =async()=>{
        setLoading(true)
        //api call axios 
        let res = await axios.get('https://reqres.in/api/users?delay=5')
        console.log(res)
        setUsers(res.data.data)
        setLoading(false)
    }
    const renderUsers = ()=>{
        if(loading){
            return <p>Loading please wait</p>
        }
        return users.map(x=>{
            return(
                <div key={x.id}>
                     <h4>Email: {x.email}</h4>
                     <h5>Id: {x.id}</h5>
                </div>
            )
        })
    }
    return(
        <div className='cardone'>
        <ToggleCard title='users'>
            <h1>Users</h1>
            {renderUsers()}
        </ToggleCard>
         </div>
    )
}
export default Users