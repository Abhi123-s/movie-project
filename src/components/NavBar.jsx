import { Link } from "react-router-dom";
import '../css/Navbar.css'

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movies app</Link>
        </div>
        <div className="navbar-link">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourites" className="nav-link">favourites</Link>
        </div>


    </nav>
}

export default NavBar;