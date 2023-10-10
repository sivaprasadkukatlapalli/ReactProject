import React, { useState } from 'react';
import login from "../asset/atsimage.jpg";
import logo from '../asset/logo.png'; 
import email from '../asset/email.png'
import './atslogin.css';
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { TextField } from '@fluentui/react/lib/TextField';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import Dashboardpage from'./DashboardPage'



const AtsLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
 const navigate = useNavigate();
console.log(username,password)

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://65110d5d3ce5d181df5da78b.mockapi.io/LOGIN'); // Replace with the actual API endpoint
      const userData = response.data;
   console.log(userData)
      // Find the user in the API data
      console.log(username,password)
      const user = userData.find(u => u.username === username && u.password === password);
      console.log(user)

      if (user) {
        // Authentication successful
        // You can perform further actions here, like storing a token in local storage and navigating to a new page.
  
        navigate('/dashboard')
       

      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while trying to log in');
    }
  }

  const onChangeHandler = (e, newValue) => {
    // Update the state based on the input field name
    if (e.target.name === 'userName') {
      setUsername(newValue);
    } else if (e.target.name === 'password') {
      setPassword(newValue);
    }
  }

  return (
    <div className='container-bg'>
      <div className='container-left'>
        <img src={login} alt='login' className='image-left' />
      </div>
      <center>
        <div className='container-right'>
          <img src={logo} alt='logo' className='img-right' />
          <h4>Sign In</h4>
       
          <TextField
            className='textfield'
            type='text'
            name='userName'
            value={username}
            placeholder="User id"
            onChange={onChangeHandler}
          /><br></br>
          <TextField
            className='textfield'
            type="password"
            name='password'
            placeholder='Password'
            value={password}
            onChange={onChangeHandler}
            canRevealPassword
            revealPasswordAriaLabel="Show password"
          /><br></br>
          <a href="#" className='forget'>Forgot password</a>
          {error && <p className='error-message'>{error}</p>}
          <br /><br />
          <PrimaryButton className='button' text="LOGIN" onClick={handleLogin} />
        </div>
      </center>
    </div>
  );
};

export default AtsLogin;
