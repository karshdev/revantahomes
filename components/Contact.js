"use client"
import { Tenor_Sans } from "next/font/google";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Contact= ({lang}) => {
 
 const[fullName,setName]=useState('')
 const[email,setEmail]=useState('')
 const[phone,setPhone]=useState('')
 const[message,setMessage]=useState('')
 
const type="Contact"
 const handleSubmit=async ()=>{
  
try{
  const response=await fetch('api/leads/add',{
  method:"POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({fullName,email,phone,message,type})
})
const res=await response.json()
if(res.message=="Leads and email Sent"){
  toast.success("Thank You!",{
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  })
  return true
}else if(res.message==="Email Server down"){
  toast.error(res.message,{
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  })
  return false
}else{
  toast.error("Something went wrong!",{
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  })
  return false
}
}catch(err){

}
 }
  return (
    <div className="py-14 relative w-full bg-[url('/spesification/element_bg.png')] bg-right bg-contain bg-no-repeat flex items-center overflow-hidden">
      <ToastContainer />
      <div className="w-full p-2 max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-6">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
        >
         {lang.Contact.title}
        </h1>
        <p className="text-center lg:text-left">
        {lang.Contact.address}
        </p>
        <div className=" flex gap-6 max-w-xl">
          <Input type="text" name="name" placeholder={lang.Contact.placeholders.name} className=" rounded-none" onChange={(e)=>setName(e.target.value)}/>
          <Input type="email" name="email" placeholder={lang.Contact.placeholders.email} className=" rounded-none" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="max-w-xl flex flex-col gap-3">
          <Input type="number" name="phone" placeholder={lang.Contact.placeholders.phone} className=" rounded-none" onChange={(e)=>setPhone(e.target.value)}/>
          <textarea type="text" name="message" placeholder={lang.Contact.placeholders.message} className="h-20 flex  w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"  onChange={(e)=>setMessage(e.target.value)}/>
        </div>
       
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
          {lang.Contact.checkbox}
          </label>
        </div>
        <Button
          variant="default"
          size={"lg"}
          className="lg:max-w-sm rounded-none bg-gray-500"
          onClick={handleSubmit}
        >
         {lang.Contact.button}
        </Button>
      </div>
    </div>
  );
};

export default Contact;
