import React from 'react';
import './login.style.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import Book5Img from '../../assets/images/book5.jpg'
import AuthForm from '../../components/forms/authForm/AuthForm';

const Login = () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="login-container">
                <div className='login-img-container'>
                    <img src={Book5Img} alt="signup-background" />
                </div>
                <div className='login-content-container'>
                    <div className="content-wrapper">
                        <h2>Login</h2>
                
                        
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;