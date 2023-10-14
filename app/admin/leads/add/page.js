"use client"

import { useState } from 'react';
import AdminNavbar from '../../../../components/AdminNavbar';


const AddLeads = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    status: 'new',
    type: 'Contact',
  });
  const[hide,setIsHide]=useState(true)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

   if(name === 'type' && value !== 'Contact' ){
    setIsHide(false)
   }else{
    setIsHide(true)
   }
   
  }
  console.log(formData);
  const handleSubmit=()=>{
    console.log("submitted");
  }
  return (
    <>
    <AdminNavbar />
 
    <div className="flex items-center justify-center mt-10 ">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add Users</h2>

        <form onSubmit={e=>e.preventDefault()}>
          <div className="flex flex-wrap -mx-4 mb-4">
        
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

           
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

         
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

        
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="type" className="block text-gray-700">Type</label>
              <select
                id="type"
                name="type"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.type}
                onChange={handleInputChange}
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
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="new">New</option>
                <option value="pending">Pending</option>
                <option value="edited">Edited</option>
              </select>
            </div>

     
            
           

{hide && (
  <div className="w-full px-4 mb-4">
  <label htmlFor="message" className="block text-gray-700">Message</label>
  <textarea
    id="message"
    name="message"
    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
    value={formData.message}
    onChange={handleInputChange}
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
