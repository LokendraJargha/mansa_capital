import { NextResponse } from "next/server";
import { sendTokenInEmail } from "../controllers/authController";
import tokenSchema from "../../../../models/tokenSchema";
import { createTransport } from "nodemailer";

//this checks the user and calls the function to send reset token
export async function POST(req) {
  const data = await req.json();
  const userData = await sendTokenInEmail(data);
  console.log("user data is ", userData);
  if (userData) {
    console.log("inside change password route");

    //create token
    const resetToken = Math.floor(Math.random() * 1000000 + 1);
    console.log("user email is ", userData.email);
    const user = await tokenSchema.findOne({ email: userData.email });

    if (user) {
      console.log("user matched");
      await tokenSchema.findOneAndUpdate(
        { user: userData._id },
        { token: resetToken }
      );
    } else {
      await tokenSchema.create({
        token: resetToken,
        user: userData._id,
      });
    }
    console.log("token created is ", resetToken);
    sendEmail(userData.email, resetToken);

    return NextResponse.json("Email sent successfully", userData);
  } else {
    return NextResponse.json("Change Password failed", { status: 401 });
  }
}
//this sends email
const sendEmail = async (email, token) => {
  console.log(process.env.MAIL_API_EMAIL, process.env.MAIL_API_PASSWORD);
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_API_EMAIL,
      pass: process.env.MAIL_API_PASSWORD,
    },
  });

  const mailOptions = {
    from: "agilemove@gmail.com",
    to: "thirty545@gmail.com",
    subject: "Reset Password",
    html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset </title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                padding: 20px;
              }
              .container {
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                padding: 20px;
                max-width: 600px;
                margin: 0 auto;
              }
              h1 {
                color: #2c3e50;
                text-align: center;
              }
              p {
                line-height: 1.6;
              }
              .token {
                background-color: #f1c40f;
                color: #2c3e50;
                padding: 10px;
                border-radius: 5px;
                font-weight: bold;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <p>Dear User,</p>
              <div class="token">${token}</div>
              <p>Note: This token is only valid for 5 minutes.</p>
              <p>If you did not request this, please ignore this email.</p>
              <p>Best regards,<br>Instwise Team <br< Agilemove Inc.</p>
    
            </div>
          </body>
          </html>
        `,
  };
  console.log("mailing completed");

  await transporter.sendMail(mailOptions);
};
