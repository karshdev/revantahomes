"use client"
import AdminNavbar from '../../../components/AdminNavbar'
import React, { useEffect, useState } from 'react'

import TableRow from '../../../components/TableRow'
import Link from 'next/link'

const Leads = () => {
  const[data,setData]=useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/leads/`, {
        cache: "no-cache",
      })
      const res = await response.json()
      if(res){
        setData(res)
        return true
      }
    } catch (err) {
    }
  }


  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
      <AdminNavbar />
     
      <div className='flex flex-col items-center justify-center gap-20 p-10'>
      <div className='w-[100%] flex items-center justify-between'>
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
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Actions</th>
            
          </tr>
        </thead>
        <tbody>
         
          {data.length>=1 ? data?.map((value, i)=>(
             <TableRow key={i} value={value}  index={i+1}/>
          )):null
         }
         
        </tbody>
      </table>
       </div>
    </>
  )
}

export default Leads
