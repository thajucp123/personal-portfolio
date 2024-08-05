import express from 'express';
import cors from 'cors';
const router = express.Router();
import nodemailer from "nodemailer";
import process from 'process';
import dotenv from 'dotenv';
dotenv.config(); //for environment variables

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

router.get('/', (req, res) => {
  res.send('<center><br/><br/><h3>The app is at the <code>/send-email</code> route</h3></center>');
});

//app.listen(5000, () => console.log("Server Running"));
//console.log(process.env.EMAIL_USER);
//console.log(process.env.EMAIL_PASS);

console.log("Entered in the Server.js file");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, //environment variable
    pass: process.env.EMAIL_PASS //environment variable
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/send-email", (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.send('<center><br/><br/><h3>Unauthorized entry to <code>/send-email</code> route</h3></center>');
  }
}
)

router.post("/send-email", (req, res) => {

  const formData = req.body;
  Object.keys(formData).forEach((key) => {
    formData[key] = formData[key].replace(/\\n/g, '<br/>');
  });

  const { name, email, phone, message } = formData;
  
 
  const mail = {
    from: process.env.EMAIL_USER,
    to: "td.cd.pd@gmail.com",
    cc: "thajucp123@gmail.com",
    subject: "Contact Form Submission - Thajucp.in Portfolio",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f2f2f2; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0056b3;">New Contact Form Submission from <a href="https://www.thajucp.in/" target="_blank" style="color: #0056b3; text-decoration: none;">Thajucp.in</a></h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0056b3; text-decoration: none;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px 10px; border-left: 4px solid #0056b3; margin-bottom: 20px;">
            ${message}
          </div>
          <hr style="border: none; border-top: 1px solid #ccc;">
          <p style="font-size: 0.9em; color: #666;">This email was sent from the contact form on Thajucp.in Portfolio.</p>
        </div>
        </div>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent"});
    }
  });
});

// Export the express app as a Vercel serverless function
export default app;