import React, { useState, useEffect } from 'react';
import './login.css';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    document.body.className = 'login';
    return () => {
      document.body.className = '';
    };
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    try {
      
      const response = await axios.post('https://afstylehub-backend-production.up.railway.app/login', { email, password });

      
      if (response.data.success) {
        
        navigate('/home');
      } else {
        
        alert(response.data.message || 'Incorrect email or password. Please try again.');
      }
    } catch (error) {
      
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('An error occurred. Please try again later.');
      }
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-body">
      <div className="wrapper">
        <div className="head">
          <h1>Login</h1>
          <div className="login">Get the fashion at your tips</div>
        </div>
        <div className="ed">
          <p>Email address</p>
          <div className="box">
            <input
              type="text"
              required
              className="txt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
        </div>
        <div className="ed">
          <p>Password</p>
          <div className="box">
            <input
              type="password"
              required
              className="txt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <RiLockPasswordFill className="icon" />
          </div>
        </div>
        <div className="Signin">
          <div className="but">
            <a className="tt" onClick={handleSignIn}>Sign in</a>
          </div>
          <div className="fp">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <p className="su">
            Don't have an account? <a className="reg" onClick={() => navigate('/register')}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
