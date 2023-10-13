"use client"
import React, { useState } from 'react';

const TableRow = ({ value }) => {
    const [editedValue, setEditedValue] = useState(value);
    const [isEdit, setIsEdit] = useState(false);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValue({ ...editedValue, [name]: value });
};

const handleSave = () => {
   //api call
   setIsEdit(!isEdit)
};
const handleDelete = () => {
//api call
}

return (
    <tr className="hover:bg-gray-100" key={editedValue.id}>
        <td className="py-2 px-4 border-b text-center  w-12">{editedValue.id}</td>
        <td className="py-2 px-4  w-12 border-b text-center ">
            {isEdit ? (
                <input
                    type="text"
                    name="fullName"
                    className=' border-gray-500 w-[96px]'
                    value={editedValue.fullName}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.fullName
            )}
        </td>
        <td className="py-2 px-4 w-12 border-b text-center">
            {isEdit ? (
                <input
                    type="text"
                    name="email"
                    className=' border-gray-500 w-[96px]'
                    value={editedValue.email}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.email
            )}
        </td>
        <td className="py-2 px-4 border-b text-center w-12">
            {isEdit ? (
                <input
                    type="text"
                    name="phone"
                    className=' border-gray-500  w-[96px]'
                    value={editedValue.phone}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.phone
            )}
        </td>
        <td className="py-2 px-4 border-b text-center w-12">
            {isEdit ? (
                <input
                    type="text"
                    name="address"
                    className=' border-gray-500 w-[96px]'
                    value={editedValue.address}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.address
            )}
        </td>
        {/* Repeat the same pattern for other columns... */}
        <td className="py-2 px-4 border-b text-center w-12">Edited</td>
        <td className="py-2 px-4 border-b text-center w-12">
            {isEdit ? (
                <div className='flex gap-2 items-center justify-center'>
                <button className='underline text-blue-400' onClick={handleSave}>
                    Save
                </button>
                <button className='underline text-blue-400' onClick={() => setIsEdit(!isEdit)}>
                    Cancel
                </button>
                </div>
            ) : (
            
                <div className='flex gap-2 items-center justify-center '>
                    <button onClick={() => setIsEdit(!isEdit)} className='underline text-blue-400'>
                        Edit
                    </button>
                    <button onClick={handleDelete} className='underline text-blue-400'>
                        Delete
                    </button>
                    </div>

            )}
        </td>
    </tr>
);
};

export default TableRow;
