import React from 'react';
import './login.style.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import Book5Img from '../../assets/images/book5.jpg'
<<<<<<< HEAD
import AuthForm from '../../components/forms/authForm/AuthForm';
=======
>>>>>>> 7f15eaa520d7510d12b9b6af4774a3d38478a826

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
                
<<<<<<< HEAD
                        
=======
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
                                <input type="submit" className="button-primary" value="Login" />
                            </div>


                        </form>
>>>>>>> 7f15eaa520d7510d12b9b6af4774a3d38478a826
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;