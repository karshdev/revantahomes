"use client"
import { signOut } from "next-auth/react";

const AdminNavbar = () => {
  
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/admin/login' });
  };

  return (
    <nav className="p-6 text-white bg-gradient-to-tr from-blue-100 to-blue-100 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
        </div>
        <div className="space-x-4">
          <a href="/admin/leads" className="hover:underline text-black font-semibold">
            Leads
          </a>
          <a href="/admin" className="hover:underline text-black font-semibold">
            Dashboard
          </a>
        </div>
           
          <button  className="hover:underline w-[max-content] h-10 px-[15px] py-[13px] bg-gray-600 border border-white justify-center items-center gap-[10px] inline-flex" onClick={handleSignOut}>
            Logout
          </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;

