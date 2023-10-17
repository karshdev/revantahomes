

import LeadsModel from "../../../../models/leads";
import connectMongoDB from "../../../../libs/mongodb";
import { getAuthSession } from "../../auth/[...nextauth]/route";
import sendEmail from "@/libs/sendMail";
import { NextResponse } from "next/server";
export async function POST(req) {
   const session=await getAuthSession()
        await connectMongoDB()
   try {
       const { fullName,email,phone,address='',type,status,message='' } = await req.json()
       const leads=await LeadsModel.create({
           fullName,
           email,
           phone,
           address:address,
           type:type,
           status,
           message:message,
       })
     if(session?.user?.name!=="admin" && message){
       const res= await sendEmail(leads.fullName,leads.email,leads.phone,leads.message)
       if(res && leads){
        return NextResponse.json({message:"Leads and email Sent"},{status:200})
       }else if(res){
        return NextResponse.json({message:"Email Server down"},{status:200})
       }else{
        return NextResponse.json({message:"DB error"},{status:200})
       }
     }
     if(leads){
      return NextResponse.json({message:"Leads Created"},{status:200})
     }
     return NextResponse.json({message:"error"},{status:401})
    
   } catch (err) {
    return NextResponse.json({message:"error"},{status:500})
   }
}
   
   
