import nodemailer from 'nodemailer'
const sendEmail=async (fullName,email,phone,message)=>{
    try {
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