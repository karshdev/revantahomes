import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import LeadsModel from "../../../models/leads";
import { getAuthSession } from "../auth/[...nextauth]/route";

export async function GET(req) {
    const session=await getAuthSession()
    await connectMongoDB()
    if(session){

        try {
      
      
            const leads=await LeadsModel.find({})
            if(leads.length>=1){
                return NextResponse.json(leads, { status: 200 })
            }
            return NextResponse.json({message:"NO LEADS"}, { status: 401 })
        } catch (err) {
            return NextResponse.json({ message: "SOME ERROR" }, { status: 500 })
        }
    }else{
        return NextResponse.json({ message: "YOU ARE NOT AUTHENTICATED" }, { status: 500 })
    }
    
}
export async function PUT(req) {
    const session=await getAuthSession()
    await connectMongoDB()
    if(session){
        try {
            const {id,fullName,email,phone,address,type,status,message}=await req.json()
    
           
          
          
            const updatedLead = await LeadsModel.findOneAndUpdate(
                { _id: id },
                {
                    fullName,
                    email,
                    phone,
                    address,
                    type,
                    status,
                    message,
                },
                { new: true, runValidators: true } 
            );
    
            if(updatedLead){
                return NextResponse.json({message:"Updated"}, { status: 200 })
            }
            return NextResponse.json({message:"NO LEADS"}, { status: 401 })
        } catch (err) {
            return NextResponse.json({ message: "SOME ERROR" }, { status: 500 })
        }
    }else{
        return NextResponse.json({ message: "YOU ARE NOT AUTHENTICATED" }, { status: 500 })
    }
   
}export async function DELETE(req) {
    const session=await getAuthSession()
    await connectMongoDB()
    const{searchParams}=new URL(req.url)

    const id=searchParams.get("id")
    if(session){
        try {
            const handleDelete=await LeadsModel.findByIdAndDelete({_id:id})
              return NextResponse.json({ message: "Deleted" }, { status: 200 })
          } catch (err) {
              return NextResponse.json({ message: "SOME ERROR" }, { status: 500 })
          }
    }else{
        return NextResponse.json({ message: "YOU ARE NOT AUTHENTICATED" }, { status: 500 })
    }
  
    

}