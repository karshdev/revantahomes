"use client"
import React, { useState } from 'react';
import EditTable from '../components/EditTable'
import DeleteTab from './DeleteTab';

const TableRow = ({ value ,index}) => {
    const [isEdit, setIsEdit] = useState(false);
    const[del,setdel] =useState(false)


return (
    <>
     <tr key={value._id}>
                <td className=" border-b text-center text-[13px] sm:text-[17px]">{index}</td>
                <td className=" border-b text-center text-[13px] sm:text-[17px] ">{value.fullName}</td>
                <td className=" border-b text-center text-[13px] sm:text-[17px]">{value.email}</td>
                <td className="hidden  sm:table-cell px-4 py-2 border-b text-center sm:text-[17px] ">{value.phone}</td>
                <td className=" hidden sm:table-cell px-4 py-2 border-b text-center sm:text-[17px] ">{value.createdAt.substring(0,10)}</td>
                <td className=" border-b text-center text-[13px] sm:text-[17px]">
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
