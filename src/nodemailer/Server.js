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
app.listen(5000, () => console.log("Server Running"));
//console.log(process.env.EMAIL_USER);
//console.log(process.env.EMAIL_PASS);

console.log("Entered in the Server.js file");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/send-email", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_USER,
    to: "td.cd.pd@gmail.com",
    cc: "thajucp123@gmail.com",
    subject: "Contact Form Submission - Thajucp.in Portfolio",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0056b3;">New Contact Form Submission from <a href="https://www.thajucp.in/" target="_blank">Thajucp.in</a></h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 25px 10px; border-left: 4px solid #0056b3;">${message}</p>
            <hr style="border: none; border-top: 1px solid #ccc;">
            <p style="font-size: 0.9em; color: #666;">This email was sent from the contact form on Thajucp.in Portfolio.</p>
        </div>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
