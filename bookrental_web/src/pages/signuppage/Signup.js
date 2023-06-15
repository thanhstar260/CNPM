import React from 'react'
import './signup.style.css';
import Book5Img from '../../assets/images/book5.jpg'
import Navbar from '../../components/layouts/navbar/Navbar';
import SignUpForm from '../../components/forms/authForm/SignupForm';

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
                        <SignUpForm />
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Signup;