import { fetchUsers } from "../../axios";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default function LogIn () {

    const { setUser} = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [isErr, setIsErr] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setUser(null)
        fetchUsers().then(({data}) => {
            setIsLoading(false)
            setUsers(data.users)
        }).catch((err) => {
            setIsLoading(false)
            setIsErr(true)
        })

    },[])


    if (isLoading) {
        return <p>Loading users...</p>
    }

    if (isErr) {
        return <p>Oh no! an error...</p>
    }

    return (
        <div className="login" id="login-container">
            <h2 className="login">To continue, pick a user</h2>
            <ul className="login" id="login-list">
                {users.map((user) => {
                    return <li key={user.username} className="login">
                        <div className="login"  id="avatar-container">
                        <p>user: {user.username}</p> 
                        <img className="login" id="login-avatar" src={user.avatar_url}></img>
                        <button className="nav-link" id="login-button" onClick={() => {setUser(user)}}>Sign In</button>
                        </div>
                    </li>   
                })}
            </ul>
        </div>
    )

}