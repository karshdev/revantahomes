import AdminNavbar from '@/components/AdminNavbar'
import React from 'react'


const Leads = () => {
  return (
    <>
      <AdminNavbar />
      <div className='flex flex-col items-center justify-center gap-20 p-10'>
      <div className='w-[100%] flex items-center justify-center gap-4'>
      <input type="text" className='p-4 border-gray-300 border-2 focus:outline-none  rounded-lg' placeholder='write'/>
      <input type='date'  className='p-4 border-gray-300 border-2 focus:outline-none  rounded-lg' placeholder='write'/>
      </div>
      
       <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">sadsad</td>
            <td className="py-6 px-1">asdas</td>
            <td className="py-6 px-1">sad</td>
            <td className="hidden md:block py-6 px-1">asdas</td>
          
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                 
                  >
                    <input
                      placeholder=''
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className="bg-red-400 p-2 rounded-full">
                     
                    </button>
                  </form>
                </td>
          
                <td className="py-6 px-1">asdas</td>
             
          </tr>
  
      
          
        </tbody>
      </table>
       </div>
    </>
  )
}

export default Leads
