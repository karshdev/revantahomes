"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
const PopUpLanding = ({ setBtn,val }) => {

    const [fullName, setfullName] = useState('')
    const [email, setemail] = useState('')
    const [phone, setPhone] = useState('')
    const[type,setType]=useState(val)

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
                setBtn(false)
            }
        } catch (err) {
            setBtn(false)
        }
    }
    return (
        <div className=" fixed  flex items-center justify-center backdrop w-full h-full top-0 m-auto backdrop-blur ml-auto mr-auto left-0 right-0 z-[10000] ">

            <motion.div className=" bg-[url('/explore_images/explore_bg.png')] bg-brand flex max-w-max items-center justify-center bg-blend-multiply  object-cover rounded-md px-8 pt-6 pb-8 sm:w-[50%] sm:h-[60%]"
                initial={{ opacity: 0, scale: 5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.5
                }}
            >
                <ToastContainer />
               
                <form onSubmit={e => e.preventDefault()} className='position relative'>
                <h2 className="text-[50px] font-bold mb-4 text-center text-white">SEND A QUOTE</h2>
                    <div className="flex flex-wrap -mx-4 mb-4">

                        <div className="w-1/2 md:w-1/2 px-4 mb-4">
                            <label htmlFor="fullName" className="block text-white">Full Name</label>
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
                            <label htmlFor="email" className="block text-white">Email</label>
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
                            <label htmlFor="phone" className="block text-white">Phone</label>
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
                            <label htmlFor="type" className="block text-white">Type</label>
                            <input
                                id="type"
                                name="type"
                                className="mt-1 cursor-not-allowed p-2 w-full text-black border rounded-md focus:outline-none "
                                value={val}
                                readOnly
                                onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                    </div>


                    <Button  variant={"brand"} size={"lg"}  className="w-[100%] mt-[10px] bg-[#C1D6C3] rounded-none px-6 lg:px-10 text-primary hover:bg-green-100" onClick={handleSubmit} >
                Submit
              </Button>
             <div className='position absolute cursor-pointer h-[40px] w-[40px] rounded-[50%] bg-[#C1D6C3] hover:bg-green-100 flex items-center justify-center top-[-75px] right-[-30px]'>
              <img src='/cross.png' alt='exit'  className='w-[35px] h-[35px]' onClick={()=>setBtn(false)}/>
             </div>
                </form>
            </motion.div>
            
        </div>


    )
}

export default PopUpLanding