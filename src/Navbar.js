import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-md bg-dark">
                <span className="navbar-brand">REACT CLASS</span>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/effect-class" className="nav-link">Effect Class</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar;