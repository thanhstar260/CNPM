import React from "react";

const AuthForm = () => {
    return (
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
    )
}

export default AuthForm;