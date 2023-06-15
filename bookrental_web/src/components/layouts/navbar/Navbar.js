import React from "react";
import "./navbar.styles.css";
import {Link} from 'react-router-dom';

const Navbar = ({darkTheme, darkText}) => {

    return (
        <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent' }`}>
            <div className="container flex justify-between align-center">
                <a href="#" className="logo">Book<span className="text-primary">rental</span></a>
                <nav className="nav-links-container">
                    <Link to="/" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Home </Link>
                    <Link to="/books" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Books</Link>
                    <Link to="/login" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Login</Link>
                    <Link to="/signup" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Sign up</Link>
                    <Link to="/cart" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Cart</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar