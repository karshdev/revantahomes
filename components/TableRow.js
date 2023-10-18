"use client"
import React, { useState } from 'react';
import EditTable from '../components/EditTable'
import DeleteTab from './DeleteTab';

const TableRow = ({ value ,index}) => {
    const [isEdit, setIsEdit] = useState(false);
    const[del,setdel] =useState(false)


return (
    <>
    <tr className="hover:bg-gray-100" key={value._id}>
        <td className=" text-[12px] py-2 px-4 border-b text-center  w-12 sm:text-[17px]">{index}</td>
        <td className=" text-[12px] py-2 px-4  w-12 border-b text-center sm:text-[17px] ">
        {value.fullName}
        </td>
        <td className=" text-[12px] py-2 px-4 w-12 border-b text-center sm:text-[17px]">
           {value.email}
        </td>
        <td className="  hidden sm:table-cell sm:py-2 sm:visible sm:px-4 sm:border-b sm:text-center sm:w-12">
            {value.phone}
        </td>
       
        <td className="  hidden sm:table-cell sm:py-2 sm:visible sm:px-4  sm:border-b sm:text-center sm:w-12">
       {value.createdAt.substring(0,10)}
            </td>
      
       
        <td className="py-2 px-4 border-b text-center w-12">
            
            
                <div className=' flex gap-1 items-center justify-center  sm:flex sm:gap-2 sm:items-center sm:justify-center '>
                    <button onClick={() => setIsEdit(!isEdit)} className=' text-[12px] underline sm:underline text-blue-400 sm:text-[17px]'>
                        Edit
                    </button>
                    <button onClick={() => setdel(!del)} className=' text-[12px] underline sm:underline text-blue-400 sm:text-[17px]'>
                        Delete
                    </button>
                    
                    </div>
                    {del && <DeleteTab value={value} setdel={setdel} />}
                    {isEdit && <EditTable value={value} setIsEdit={setIsEdit}/>}
        
        </td>
    </tr>
    </>
);
};

export default TableRow;