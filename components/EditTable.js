"use client"
import React, { useState } from 'react'

const EditTable = ({value}) => {
    const [fullName, setfullName] = useState(value.fullName)
    const [email, setemail] = useState(value.email)
    const [phone, setPhone] = useState(value.phone)
    const [address, setaddress] = useState(value.address)
    const [type, settype] = useState(value.type)
    const [status, setstatus] = useState(value.status)
    const [message, setMessage] = useState(value.message)
  return (
    <div className=" fixed backdrop w-full h-full top-0 m-auto backdrop-blur ml-auto mr-auto left-0 right-0 z-[10000] ">
    <div className="bg-[#95bbf4] shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-[100px] ml-[20px] max-w-md sm:ml-[500px]">
             <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
             <form onSubmit={e => e.preventDefault()}>
            <div className="flex flex-wrap -mx-4 mb-4">

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={fullName}
                  onChange={(e)=>setfullName(e.target.value)}
                />
              </div>


              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
              </div>


              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>


              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="address" className="block text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={address}
                  onChange={(e)=>setaddress(e.target.value)}
                />
              </div>


              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="type" className="block text-gray-700">Type</label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={type}
                  onChange={(e)=>settype(e.target.value)}
                >
                  <option value="Orchird">Orchird</option>
                  <option value="Tulip">Tulip</option>
                  <option value="Xyz">Xyz</option>
                  <option value="Contact">Contact</option>
                </select>
              </div>


              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="status" className="block text-gray-700">Status</label>
                <select
                  id="status"
                  name="status"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={status}
                  onChange={(e)=>setstatus(e.target.value)}
                >
                  <option value="new">New</option>
                  <option value="pending">Pending</option>
                  <option value="edited">Edited</option>
                </select>
              </div>


              {type=="Contact" && (
                <div className="w-full px-4 mb-4">
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                </div>
              )
              }

            </div>


            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          
            >
              Submit
            </button>
          </form>
             </div>
             </div>
             
         
  )
}

export default EditTable
