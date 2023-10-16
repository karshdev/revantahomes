"use client"
import { useState } from 'react';
import AdminNavbar from '../../../../../components/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddLeads = () => {
  const [fullName, setfullName] = useState('')
  const [email, setemail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setaddress] = useState('')
  const [type, settype] = useState('Orchird')
  const [status, setstatus] = useState('New')
  const [message, setMessage] = useState('')
 


  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/leads/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullName,email,phone,address,type,status,message}),
      })
      const res = await response.json()
      if(res.message==="Leads Created"){
        toast.success("Successfully added",{
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }else{
        toast.error("Something went Wrong",{
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }
    } catch (err) {
      
    }

  }
  return (
    <>
      <AdminNavbar />
      <ToastContainer />

      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md ">
          <h2 className="text-2xl font-semibold mb-4 text-center">Add Users</h2>

          <form onSubmit={e => e.preventDefault()}>
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


              <div className=" position relative w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="type" className="block text-gray-700">Type</label>
                <select
                  id="type"
                  name="type"
                  className="flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="h-20 flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
          </form>
        </div>
      </div>
    </>
  );
};


export default AddLeads
