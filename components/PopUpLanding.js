"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PopUpLanding = ({ setBtn }) => {

    const [fullName, setfullName] = useState('')
    const [email, setemail] = useState('')
    const [phone, setPhone] = useState('')
    const [type, settype] = useState('Orchid')

    const handleSubmit = async () => {
        try {
            const response = await fetch('api/leads/add', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, phone, type })
            })
            const res = await response.json()
            if (res.message == "Leads Created") {
                toast.success("Quote Sent", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
                setBtn(false)
                return true
            } else {
                toast.success("Something went wrong", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
            }
        } catch (err) {
            setBtn(false)
        }
    }
    return (
        <div className=" fixed  flex items-center justify-center backdrop w-full h-full top-0 m-auto backdrop-blur ml-auto mr-auto left-0 right-0 z-[10000] ">

            <motion.div className="shadow-lg  rounded-md px-8 pt-6 pb-8 bg-white  max-w-md"
                initial={{ opacity: 0, scale: 5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.5
                }}
            >
                <ToastContainer />
                <h2 className="text-[30px] font-bold mb-4 text-center text-black">Heading</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="flex flex-wrap -mx-4 mb-4">

                        <div className="w-1/2 md:w-1/2 px-4 mb-4">
                            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:border-blue-500"
                                value={fullName}
                                onChange={(e) => setfullName(e.target.value)}
                            />
                        </div>


                        <div className="w-1/2 md:w-1/2 px-4 mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 text-black w-full border rounded-md focus:outline-none focus:border-blue-500"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>


                        <div className="w-1/2 md:w-1/2 px-4 mb-4">
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 p-2 text-black w-full border rounded-md focus:outline-none focus:border-blue-500"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>




                        <div className="w-1/2 md:w-1/2 px-4 mb-4">
                            <label htmlFor="type" className="block text-gray-700">Type</label>
                            <select
                                id="type"
                                name="type"
                                className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none "
                                value={type}
                                onChange={(e) => settype(e.target.value)}
                            >
                                <option value="Orchird">Orchird</option>
                                <option value="Tulip">Tulip</option>
                                <option value="Xyz">Xyz</option>

                            </select>
                        </div>
                    </div>


                    <button
                        type="button"
                        className="bg-blue-500 w-[100%] text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </motion.div>
            <img src="/cross.png" className="w-[50px] h-[50px] right-0 cursor-pointer absolute top-0" alt="cross icon" onClick={() => setBtn(false)} />
        </div>


    )
}

export default PopUpLanding