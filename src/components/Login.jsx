import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; 
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [action, setAction] = useState(''); // Toggle between login and register forms
  const [userType, setUserType] = useState(''); // State to manage dropdown selection

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setErrorMessage('Sorry, account not found');
    } else {
      setErrorMessage('');
    }
  };

  // Switch to Register form
  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
  };

  // Switch to Login form
  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  // Handle user type selection
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div className={`wrapper ${action}`}>
      <Link to="/" className="login-page-title font-effect-3d">GODFIDENCE</Link>
     
      <div className={`login-container ${action === '' ? '' : 'hidden'}`}>
        <form onSubmit={handleSubmit}>
          <h1>Matthew 18:20</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="login-icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="login-icon" />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Not a member? <a href="#" onClick={registerLink}>Register here</a></p>
          </div>
        </form>
      </div>

 
      <div className={`register-container ${action === 'active' ? '' : 'hidden'}`}>
        <form>
          <h1>Join Us!</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
            />
            <FaUser className="login-icon" />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
            />
            <FaEnvelope className="login-icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
            />
            <FaLock className="login-icon" />
          </div>

        
          <div className="input-box">
            <div className="dropdown-container">
              <select value={userType} onChange={handleUserTypeChange} className="select-box">
                <option value="">Select User Type</option>
                <option value="church">Church</option>
                <option value="bible-study">Bible Study Group</option>
                <option value="speaker-listener">Speaker/Listener</option>
              </select>
            </div>
          </div>

        
          {userType === 'church' && (
            <div className="input-box">
              <input
                type="text"
                placeholder="Church Name?"
                required
              />
            </div>
          )}

          {userType === 'bible-study' && (
            <div className="input-box">
              <input
                type="text"
                placeholder="Study Group Name?"
                required
              />
            </div>
          )}

          {userType === 'speaker-listener' && (
            <>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </>
          )}

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>

          <button type="submit">Create Account</button>

          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
