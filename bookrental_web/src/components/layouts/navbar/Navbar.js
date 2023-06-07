import React from "react";
import "./navbar.styles.css";

const Navbar = () => {
    return (
        <section className="navbar-container">
            <div className="container flex justify-between align-center">
                <a href="#" className="logo">Book<span className="text-primary">rental</span></a>
                <nav className="nav-links-container">
                    <a href="#" className="nav-links">Home</a>
                    <a href="#" className="nav-links">Books</a>
                </nav>
            </div>
        </section>
    )
}

export default Navbar