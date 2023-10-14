import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import LeadsModel from "../../../models/leads";

export async function GET(req) {
    await connectMongoDB()
    
    try {
      
      
        const leads=await LeadsModel.find({})
        if(leads.length>=1){
            return NextResponse.json(leads, { status: 200 })
        }
        return NextResponse.json({message:"NO LEADS"}, { status: 401 })
    } catch (err) {
        return NextResponse.json({ message: "SOME ERROR" }, { status: 500 })
    }
}
export async function PUT(req) {
    await connectMongoDB()
    
    try {
        const {id,fullName,email,phone,address,type,status,message}=await req.json()

        console.log(id,fullName,email,phone,address,type,status,message);
      
      
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
}