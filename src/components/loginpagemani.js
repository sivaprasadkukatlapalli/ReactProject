import React, { useState } from 'react';
//import loginpagemani from './loginpagemaini.css';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Send a POST request to your authentication endpoint
      const response = await axios.post('http://localhost:8080/api/login', {
        username: username,
        password: password,
      });

      // Handle the response here
      console.log(response.data);

      // If authentication is successful, you can redirect or set a token in your app's state
    } catch (error) {
      // Handle errors here, e.g., display an error message to the user
      console.error(error);
      setError('Authentication failed. Please check your username and password.');
    }
  };

  return (
    <div className='bg-container'>
      <div className='form'>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
