// pages/login.js
"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
        redirect: true,
        email: credentials.email,
        password: credentials.password,
        callbackUrl: '/'
    })
    if (!result.error) {
      window.location.href = '/';
    } else {
      console.error('Sign-in error:', result.error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
