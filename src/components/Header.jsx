import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import UserIcon from './UserIcon'

export default function Header () {

    const { user, setUser } = useContext(UserContext)

    return (
        <div className="header">
            <div className="header" id="header-and-avatar">
                <h1 className="header" id="home-heading">NC News</h1>
                {user? <UserIcon></UserIcon>: null}
            </div>
            {user? <nav className="nav" id="nav-bar">
                <Link className="nav-link rounded" to="/">Home</Link>
                <Link className="nav-link rounded" to="/articles">Articles</Link>
                {user?<Link onClick={() => {setUser(null)}} to="/" className="nav-link rounded">Sign out</Link>:null}
            </nav> : null}
        </div>
    )
}