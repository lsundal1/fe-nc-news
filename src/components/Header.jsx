import { Link } from 'react-router-dom'

export default function Header () {

    return (
        <div className="header">
            <h1 className="header" id="home-heading">NC News</h1>
            <nav className="nav" id="nav-bar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/articles">Articles</Link>
                <Link className="nav-link" to="/topics">Topics</Link>
            </nav>
        </div>
    )
}