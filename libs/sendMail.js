import nodemailer from 'nodemailer'
const sendEmail=async (fullName,email,phone,message,address)=>{
    try {
    // Create a Nodemailer transporter
    console.log(fullName,email,phone,message,address);
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
        to: "virtuarchitects7@gmail.com",
        subject: `New Lead (${fullName}) from Revanta`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        return true
      } catch (error) {
        return false
      }
    
  }
    catch (err) {
        return false
    }
}
export default sendEmail;