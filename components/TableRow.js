"use client"
import React, { useState } from 'react';
import EditTable from '../components/EditTable'
const TableRow = ({ value ,index}) => {
    const [isEdit, setIsEdit] = useState(false);
  
const handleDelete = () => {
//api call
}

return (
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
          {value.address}
        </td>
        <td className="py-2 px-4 border-b text-center w-12">
       {value.createdAt.substring(0,10)}
            </td>
        {/* Repeat the same pattern for other columns... */}
       
        <td className="py-2 px-4 border-b text-center w-12">
            
            
                <div className='flex gap-2 items-center justify-center '>
                    <button onClick={() => setIsEdit(!isEdit)} className='underline text-blue-400'>
                        Edit
                    </button>
                    <button onClick={handleDelete} className='underline text-blue-400'>
                        Delete
                    </button>
                    </div>
                    {isEdit && <EditTable value={value} />}
        
        </td>
    </tr>
);
};

export default TableRow;
