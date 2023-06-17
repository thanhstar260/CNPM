import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthForm = ({ buttonName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth(app);

        if(buttonName === 'Login') {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/')
            })
            .catch((err) => console.log(err));

        } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials)=>{
               userCredentials.user.displayName = username;

               navigate('/');
            })
            .catch((err)=>{
                console.log(err);
            })

        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
           {buttonName === "Sign Up" && (
                <div className='form-group'>
                    <label>Username</label>
                    <input 
                        type="text" 
                        className='form-input' 
                        placeholder='Enter your username' 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
           )}

            <div className='form-group'>
                <label>Email</label>
                <input 
                    type="email" 
                    className='form-input' 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Password</label>
                <input 
                    type="password" 
                    className='form-input' 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                    required
                />
            </div>

            <div className='form-group'>
                <input 
                    type="submit" 
                    className='button-primary' 
                    value={buttonName} 
                />
            </div>
        </form>
    )
}

export default AuthForm;
