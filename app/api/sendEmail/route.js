import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
export async function POST(req) { 
    try {
        const { fullName,email,phone,message} = await req.json()
       
    // Create a Nodemailer transporter
    console.log(fullName,email,phone,message);
    const transporter = nodemailer.createTransport({
        // Specify your email service and credentials
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
      });
  
      // Create the email content
      const mailOptions = {
        from: process.env.GMAIL_FROM,
        to: email,
        subject: 'New Contact Form Submission',
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
      } catch (error) {
       
        return NextResponse.json({ message: "Error" }, { status: 200 })
      }
    
  }
    catch (err) {
        return NextResponse.json({ message: "SOME ERROR" }, { status: 500 })
    }
}