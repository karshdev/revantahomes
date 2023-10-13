import AdminNavbar from '@/components/AdminNavbar'
import React from 'react'
import dummyData from '@/dummy/dummy'
import TableRow from './(components)/TableRow'
const Leads = () => {
  return (
    <>
      <AdminNavbar />
      <div className='flex flex-col items-center justify-center gap-20 p-10'>
      <div className='w-[100%] flex items-center justify-center gap-4'>
      <input type="text" className='p-4 border-gray-300 border-2 focus:outline-none  rounded-lg' placeholder='write'/>
      <input type='date'  className='p-4 border-gray-300 border-2 focus:outline-none  rounded-lg' placeholder='write'/>
      </div>
      
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {/* Sample Row */}
          {dummyData.map((value, i)=>(
             <TableRow key={i} value={value} />
          ))
         }
        

          {/* Add more rows as needed */}
        </tbody>
      </table>
       </div>
    </>
  )
}

export default Leads
