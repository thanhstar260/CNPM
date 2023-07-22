import React, { useContext } from "react";
import "./navbar.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext, CartContext, NotificationContext } from "../../../App";
import { ReactComponent as CartIcon } from "../../../assets/images/cart.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/images/notification.svg";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/Firebase";

const Navbar = ({ darkTheme, darkText }) => {
    const user = useContext(UserContext);
    const auth = getAuth(app);
    const cartItems = useContext(CartContext).cartItems || []; // Initialize with an empty array if undefined
    const notifications = useContext(NotificationContext).notifications || []; // Initialize with an empty array if undefined
    const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cartItemCount = cartItems.length;
  const notificationCount = notifications.length;

  const showLoginAndSignUp = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link to="/books" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Books
      </Link>
      <Link to="/login" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Login
      </Link>
      <Link to="/signup" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Sign Up
      </Link>
    </nav>
  );

  const showLogoutAndCart = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link to="/books" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Books
      </Link>
      <a onClick={handleLogout} className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Logout
      </a>
      <Link to="/cart" className="cart-link">
        <CartIcon />
        {cartItemCount > 0 && <span className="icon-count">{cartItemCount}</span>}
      </Link>
      <Link to="/notification" className="noti-link">
        <NotificationIcon />
        {notificationCount > 0 && <span className="icon-count">{notificationCount}</span>}
      </Link>
    </nav>
  );

  return (
    <section
      className={`navbar-container ${
        darkTheme ? "background-dark relative" : "background-transparent"
      }`}
    >
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">
          Book<span className="text-primary">rental</span>
        </a>

        {user ? showLogoutAndCart : showLoginAndSignUp}
      </div>
    </section>
  );
};

export default Navbar;
