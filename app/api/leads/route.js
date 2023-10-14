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