
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
        callbackUrl: '/admin'
    })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Username:</span>
          <input
            type="text"
            className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring focus:border-blue-300"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring focus:border-blue-300"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
