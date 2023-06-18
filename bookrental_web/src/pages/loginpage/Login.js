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
                            <h2>Đăng nhập</h2>
                            <p>Đăng nhập bằng email và mật khẩu</p>

                            <AuthForm buttonName="Đăng nhập" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;