import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserIcon () {

    const { user } = useContext(UserContext)

    return <img id="user-img"src={user.avatar_url}></img>
    
}