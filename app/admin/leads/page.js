import AdminNavbar from '../../../components/AdminNavbar'
import React from 'react'
import dummyData from '../../../dummy/dummy'

import TableRow from '../../../components/TableRow'
import Link from 'next/link'
const Leads = () => {
  return (
    <>
      <AdminNavbar />
      <div className='flex flex-col items-center justify-center gap-20 p-10'>
      <div className='w-[100%] flex items-center justify-evenly'>
      <Link href='/admin/leads/add'  className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Add Users
          </Link>
        <div className='flex gap-4 items-center justify-center'>
      <input type="text" className='p-4 border-gray-300 border-2 focus:outline-none  rounded-lg' placeholder='write'/>
      <input type='date'  className='p-4 border-gray-300 border-2 focus:outline-none  rounded-lg' placeholder='write'/>
      </div>
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
         
          {dummyData.map((value, i)=>(
             <TableRow key={i} value={value} />
          ))
         }
         
        </tbody>
      </table>
       </div>
    </>
  )
}

export default Leads
