import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function SignOut () {

    const { setUser } = useContext(UserContext)

    setUser({})
}