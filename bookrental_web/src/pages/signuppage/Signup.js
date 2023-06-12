import React from 'react'
import './signup.style.css';
import Book5Img from '../../assets/images/book5.jpg'
import Navbar from '../../components/layouts/navbar/Navbar';

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
                        <form>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type="email" className="form-input" placeholder='Enter your email' />
                            
                            </div>

                            <div className='form-group'>
                                <label>Password</label>
                                <input type="password" className="form-input" placeholder='Enter your password' />
                            </div>

                            <div className='form-group'>
                                <input type="submit" className="button-primary" value="Sign up" />
                            </div>


                        </form>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Signup;