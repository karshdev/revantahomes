
"use client"
import {  useState } from 'react';
import {  signIn,  } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const LoginPage = () => {
  const router=useRouter()
  const[error,showError]=useState(false)
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const loginRes= await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
        
    })
    if (loginRes?.error) {
      showError(true);
      setTimeout(()=>{
        showError(false);
      },2000)
    } else {
      router.push('/admin');
    }
  } catch (err) {
   showError(true)
  }
  };

  return (
    <div className="min-h-screen relative bg-[url('/explore_images/explore_bg.png')] bg-brand w-full bg-blend-multiply py-12 flex items-center justify-center">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
      <h1 className="text-3xl font-bold text-center text-gray-700">LOGIN</h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
            
          >
            Email
          </label>
          <input
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <Link
            href=""
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
        <div className="mt-2">
          <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Login
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href=""
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
      {error &&  <span className=" text-red-500 w-[100%] text-center  px-4 py-2 rounded-md inline-block">Wrong Email/Paswword</span>}

    </div>
  </div>
  );
};

export default LoginPage;
