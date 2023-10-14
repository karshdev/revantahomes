import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import LeadsModel from "../../../../models/leads";
export async function POST(req) {
    await connectMongoDB()
    
    try {
        const { fullName,email,phone,address,type,status,message } = await req.json()
      
        const leads=await LeadsModel.create({
            fullName,
            email,
            phone,
            address,
            type,
            status,
            message
        })

        return NextResponse.json({ message: "Leads Created" }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "SOME ERROR" }, { status: 500 })
    }
}