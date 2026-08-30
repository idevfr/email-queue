import "dotenv/config";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SMTP_PASS,
  },
});

async function sendMail({ to, subject, body }) {
  try {
    const info = await transporter.sendMail({
      from: `"Example Team" ${process.env.SENDER_EMAIL}`,
      to: to, // list of recipients
      subject: subject,
      text: body,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export { sendMail };
