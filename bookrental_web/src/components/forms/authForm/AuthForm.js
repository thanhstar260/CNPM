import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, push } from 'firebase/database'; // Import the Realtime Database functions

const AuthForm = ({ buttonName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth(app);
  const database = getDatabase(app); // Initialize the Realtime Database

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError(null);

      if (buttonName === 'Login') {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      } else {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        if (userCredentials) {
          // Save additional user information to the Realtime Database
          await saveUserInfoToDatabase(userCredentials.user.uid);
        }

        navigate('/');
      }
    } catch (err) {
      setError('Invalid email or password');
      console.error('Authentication error:', err.message);
    }
  };

  // Function to save user information to the Realtime Database
  const saveUserInfoToDatabase = async (userId) => {
    try {
      const userRef = ref(database, 'users');

      // User data to be saved in the database
      const userData = {
        username,
        phone_num: phoneNum,
        address,
        email,
        // You can add any other desired user information here
      };

      // Push the user data to the Realtime Database with a unique key
      await push(userRef, userData);
      console.log('User information saved to the database.');
    } catch (error) {
      console.error('Error saving user information:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {buttonName === 'Sign up' && (
        <>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              className='form-input'
              placeholder='Enter your username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-input'
            placeholder='Enter your email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
            </div>

          <div className='form-group'>
            <label>Phone Number</label>
            <input
              type='text'
              className='form-input'
              placeholder='Enter your phone number'
              value={phoneNum}
              onChange={(event) => setPhoneNum(event.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label>Address</label>
            <input
              type='text'
              className='form-input'
              placeholder='Enter your address'
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>
        </>
      )}

      {buttonName === 'Login' && (
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-input'
            placeholder='Enter your email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
      )}

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-input'
          placeholder='Enter your password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display the error message */}

      <div className='form-group'>
        <input type='submit' className='button-primary' value={buttonName} />
      </div>
    </form>
  );
};

export default AuthForm;
