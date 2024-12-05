import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserIcon () {

    const { user } = useContext(UserContext)

    return (
    
    <div className="avatar">
        <div className="w-24 rounded-full m-3">
            <img src={user.avatar_url}/>
        </div>
    </div>
    
    )
}