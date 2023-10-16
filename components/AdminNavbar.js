"use client"
import { signOut } from "next-auth/react";

const AdminNavbar = () => {

  
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/admin/login' });
  };

  return (
    <nav className="p-6 text-white bg-gradient-to-tr from-blue-100 to-blue-100 ">
      <div className=" flex items-center justify-between ">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-[50px] h-[50px]  sm:w-[70px] sm:h-[70px] sm:mr-2" />
        </div>
        <div className="space-x-4">
          <a href="/admin/leads" className="hover:underline text-[14px] text-black font-semibold sm:hover:underline sm:text-[20px] sm:text-black sm:font-semibold">
            Leads
          </a>
          <a href="/admin" className="hover:underline text-[14px] text-black font-semibold sm:hover:underline sm:text-[20px] sm:text-black sm:font-semibold">
            Dashboard
          </a>
        </div>
           
          <button  className="hover:underline w-[max-content] h-7 px-[8px] py-[8px] bg-gray-600 border border-white justify-center items-center gap-[10px] inline-flex sm:hover:underline sm:w-[max-content] sm:h-10 sm:px-[20px] sm:py-[17px] sm:bg-gray-600 sm:border sm:border-white sm:justify-center sm:items-center sm:gap-[10px] sm:inline-flex" onClick={handleSignOut}>
            Logout
          </button>
         
      </div>
    </nav>
  );
};

export default AdminNavbar;