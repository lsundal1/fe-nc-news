import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import LogIn from "./LogIn";

export default function Home () {   

    const {user} = useContext(UserContext)

    console.log(user)
    
    return (
        <div className="main">
            <div id="home">
                <h2>Welcome to NC News!</h2>
                {!user? <LogIn></LogIn>: <h3>Congrats! You are logged in as: {user.username} </h3>}
                {user? <div>
                    <h3>About us:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis magni dolor eaque ipsam? Doloribus quaerat veritatis nulla iste ipsa sequi optio, eum sit ut consectetur ullam voluptates a dignissimos!</p>
                </div>:null}
                <img id="home-img" width="500px"src="http://grin2b.com/wp-content/uploads/2017/01/Grin2B_icon_NEWS.png"/>
            </div>
        </div>
    )
}