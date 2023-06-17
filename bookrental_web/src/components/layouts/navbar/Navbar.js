import React, {useContext} from "react";
import "./navbar.styles.css";
import {Link, useNavigate} from 'react-router-dom';
import { UserContext } from "../../../App";
import {ReactComponent as Cart} from '../../../assets/images/cart.svg'
import {getAuth, signOut} from "firebase/auth";
import app from "../../../firebase/Firebase";

const Navbar = ({darkTheme, darkText}) => {

    const user=useContext(UserContext);
    const auth=getAuth(app);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    const showLoginAndSignUp = (
        <nav className="nav-links-container">
            <Link to="/" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Trang chủ </Link>
            <Link to="/books" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Sách</Link>
            <Link to="/login" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Đăng nhập</Link>
            <Link to="/signup" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Đăng kí</Link>
        </nav>
    )

    const showLogoutAndCart = (
        <nav className="nav-links-container">
            <Link to="/" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Trang chủ </Link>
            <Link to="/books" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Sách</Link>
            <a onClick={handleLogout} to="/logout" className={`${darkText ? 'nav-links-dark':'nav-links'}`}>Đăng xuất</a>
            <Link to="/cart" className="cart-link"><Cart /></Link>
        </nav>
    )

    return (
        <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent' }`}>
            <div className="container flex justify-between align-center">
                <a href="#" className="logo">Book<span className="text-primary">rental</span></a>

                {user ? showLogoutAndCart : showLoginAndSignUp}
                
            </div>
        </section>
    )
}

export default Navbar;