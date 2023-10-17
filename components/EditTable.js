"use client"
import React, { useState } from 'react'

const EditTable = ({value,setIsEdit}) => {
    const id=useState(value._id)
    const [fullName, setfullName] = useState(value.fullName)
    const [email, setemail] = useState(value.email)
    const [phone, setPhone] = useState(value.phone)
    const [address, setaddress] = useState(value.address)
    const [type, settype] = useState(value.type)
    const [status, setstatus] = useState(value.status)
    const [message, setMessage] = useState(value.message)

   const handleSubmit=async ()=>{
    try {
        const response = await fetch(`/api/leads/`,{
          method:"PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id,fullName,email,phone,address,type,status,message}),
        });
        const res = await response.json()
        if (res.message==="Updated") {
          
          setIsEdit(false)
          window.location.reload()
         return true
        } else{
          
          setIsEdit(false)
          return false
        }
      } catch (error) {
       
      }
   }
  return (
    <div className=" fixed  flex items-center justify-center backdrop w-full h-full top-0 m-auto backdrop-blur ml-auto mr-auto left-0 right-0 z-[10000] ">
    <div className="shadow-lg  rounded-md px-8 pt-6 pb-8 bg-white  max-w-md">
             <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
             <form onSubmit={e => e.preventDefault()} className='position relative'>
            <div className="flex flex-wrap -mx-4 mb-4">

              <div className="w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className=" flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={fullName}
                  onChange={(e)=>setfullName(e.target.value)}
                />
              </div>


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
              </div>


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className=" flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="address" className="block text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className=" flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={address}
                  onChange={(e)=>setaddress(e.target.value)}
                />
              </div>


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="type" className="block text-gray-700">Type</label>
                <select
                  id="type"
                  name="type"
                  className=" flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={type}
                  onChange={(e)=>settype(e.target.value)}
                >
                  <option value="Orchird">Orchird</option>
                  <option value="Tulip">Tulip</option>
                  <option value="Xyz">Xyz</option>
                  <option value="Contact">Contact</option>
                </select>
              </div>


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="status" className="block text-gray-700">Status</label>
                <select
                  id="status"
                  name="status"
                  className=" flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                    className=" h-20 flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                </div>
              )
              }

            </div>


            <button
              type="button"
              className="hover:underline w-[100%] h-7 px-[8px] py-[8px] bg-gray-600 border border-white justify-center text-white items-center gap-[10px] inline-flex sm:hover:underline sm:w-[max-content] sm:h-10 sm:px-[20px] sm:py-[17px] sm:bg-gray-600 sm:border sm:border-white sm:justify-center sm:items-center sm:gap-[10px] sm:inline-flex" 
          onClick={handleSubmit}
            >
              Submit
            </button>
            <div className='position absolute cursor-pointer h-[40px] w-[40px] rounded-[50%] bg-white hover:bg-gray-100 flex items-center justify-center top-[-75px] right-[-30px]'>
              <img src='/assets/cross.png' alt='exit'  className='w-[35px] h-[35px]' onClick={()=>setIsEdit(false)}/>
             </div>
          </form>

             </div>
            
             </div>
             
         
  )
}

export default EditTable