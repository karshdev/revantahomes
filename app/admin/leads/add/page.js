"use client"
import { useState } from 'react';
import AdminNavbar from '../../../../components/AdminNavbar';
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

      <div className="flex items-center justify-center mt-10  ">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md h-[100vh]">
          <h2 className="text-2xl font-semibold mb-4 text-center">Add Users</h2>

          <form onSubmit={e => e.preventDefault()}>
            <div className="flex flex-wrap -mx-4 mb-4">

              <div className="w-1/2 md:w-1/2 px-4 mb-4">
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


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
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


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
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


              <div className="w-1/2 md:w-1/2 px-4 mb-4">
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


              <div className=" position relative w-1/2 md:w-1/2 px-4 mb-4">
                <label htmlFor="type" className="block text-gray-700">Type</label>
                <select
                  id="type"
                  name="type"
                  className=" position absolute  appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
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
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
