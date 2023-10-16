"use client"
import React, { useState } from 'react';
import EditTable from '../components/EditTable'

const TableRow = ({ value ,index}) => {
    const [isEdit, setIsEdit] = useState(false);
  
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
         return true
        } else {
           return false
     
        }
      } catch (error) {

      }
}

return (
    <>
    <tr className="hover:bg-gray-100" key={value._id}>
        <td className="py-2 px-4 border-b text-center  w-12">{index}</td>
        <td className="py-2 px-4  w-12 border-b text-center ">
        {value.fullName}
        </td>
        <td className="py-2 px-4 w-12 border-b text-center">
           {value.email}
        </td>
        <td className="py-2 px-4 border-b text-center w-12">
            {value.phone}
        </td>
       
        <td className="py-2 px-4 border-b text-center w-12">
       {value.createdAt.substring(0,10)}
            </td>
      
       
        <td className="py-2 px-4 border-b text-center w-12">
            
            
                <div className='flex gap-2 items-center justify-center '>
                    <button onClick={() => setIsEdit(!isEdit)} className='underline text-blue-400'>
                        Edit
                    </button>
                    <button onClick={()=>handleDelete(value._id)} className='underline text-blue-400'>
                        Delete
                    </button>
                    </div>
                    {isEdit && <EditTable value={value} setIsEdit={setIsEdit}/>}
        
        </td>
    </tr>
    </>
);
};

export default TableRow;