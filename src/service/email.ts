import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

// SMTP 서버 설정
const transporter = nodemailer.createTransport({
  host: "gmail",
  // port: 465,
  // secure: true,
  auth: {
    user: "nsong113@gmail.com",
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[Portfolio] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸 사람: ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
