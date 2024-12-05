import { fetchUsers } from "../../axios";
import { useState, useContext, useEffect, Button } from "react";
import { Link } from 'react-router-dom'
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
            <h2 className="login">Pick a user to sign in</h2>
        <div className="carousel carousel-center bg-inherit rounded-box max-w-screen-xl space-x-4 p-4">
        {users.map((user) => {
            return <div className="carousel-item">
                <div className="card bg-base-100 w-40 shadow-md m-0">
                <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img id="avatar-img" src={user.avatar_url}/>
                </div>
                </div>
                    <p>user: {user.username}</p> 
                    <button className="btn" id="login-button" onClick={() => {setUser(user)}}>Sign In</button>
                </div>
            </div>
        })}
        </div>
        </div>
        
    )
}