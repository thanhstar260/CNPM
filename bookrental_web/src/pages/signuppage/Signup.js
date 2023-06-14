import React from 'react'
import './signup.style.css';
import Book5Img from '../../assets/images/book5.jpg'
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';


const Signup = () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={Book5Img} alt="signup-background" />
                </div>
                <div className='signup-content-container'>
                    <div className="content-wrapper">
                        <h2>Signup</h2>
                        <p>Create a new account with email and password</p>
                        
                        <AuthForm />
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Signup;