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
};
const handleDelete = () => {
//api call
}

return (
    <tr className="hover:bg-gray-100" key={editedValue.id}>
        <td className="py-2 px-4 border-b text-center">{editedValue.id}</td>
        <td className="py-2 px-4 border-b text-center">
            {isEdit ? (
                <input
                    type="text"
                    name="fullName"
                    className='border-[1px] border-gray-500 max-w-max'
                    value={editedValue.fullName}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.fullName
            )}
        </td>
        <td className="py-2 px-4 border-b text-center">
            {isEdit ? (
                <input
                    type="text"
                    name="email"
                    
                    value={editedValue.email}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.email
            )}
        </td>
        <td className="py-2 px-4 border-b text-center">
            {isEdit ? (
                <input
                    type="text"
                    name="phone"
                    value={editedValue.phone}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.phone
            )}
        </td>
        <td className="py-2 px-4 border-b text-center">
            {isEdit ? (
                <input
                    type="text"
                    name="address"
                    value={editedValue.address}
                    onChange={handleInputChange}
                />
            ) : (
                editedValue.address
            )}
        </td>
        {/* Repeat the same pattern for other columns... */}
        <td className="py-2 px-4 border-b text-center">Edited</td>
        <td className="py-2 px-4 border-b text-center">
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
