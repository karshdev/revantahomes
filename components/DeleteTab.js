"use client"
import React from 'react'

const DeleteTab = ({value,setdel}) => {
    

    const handleDelete =async  (id) => {
   
        try {
            const response = await fetch(`/api/leads?id=${id}`,{
                method:"DELETE",
                headers: {
                  'Content-Type': 'application/json',
                },
            })
            const res= await response.json()
            if (res.message==="Deleted") {
                window.location.reload()
                setdel(false)
             return true
            } else {
               return false
         
            }
          } catch (error) {
            setdel(false)
    
          }
    }
  return (
    <div className=" fixed  flex items-center justify-center backdrop w-full h-full top-0 m-auto backdrop-blur ml-auto mr-auto left-0 right-0 z-[10000] ">

    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    
        <p className="text-gray-600 mb-6">Are you sure you want to delete this item?</p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-6 py-2 bg-red-500 text-white  hover:bg-red-600 focus:outline-none"
            onClick={()=>handleDelete(value._id)}
          >
            Yes
          </button>
          <button
            className="px-6 py-2 bg-gray-300 text-gray-800  hover:bg-gray-400 focus:outline-none"
            onClick={()=>setdel(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
             </div>
            
       
             
         
  )
}

export default DeleteTab