import { Link } from 'react-router-dom'
import SignOut from "./SignOut";


export default function Header () {

    return (
        <div id="header">
            <h1>NC News</h1>
            <div id="user">
            </div>
            <nav id="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/articles">Articles</Link>
                <Link className="nav-link" to="/topics">Topics</Link>
                <Link className="nav-link" to="/" onClick={SignOut}>Log out</Link>
            </nav>
        </div>
    )
}