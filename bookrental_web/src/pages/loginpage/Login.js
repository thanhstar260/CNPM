import React from 'react';
import Book5Img from '../../assets/images/book5.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Login= () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={Book5Img} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Login</h2>
                            <p>Login with email and password</p>

                            <AuthForm buttonName="Login" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;