// import type { NextApiRequest, NextApiResponse } from "next";
// import { sendEmail, EmailData } from "@/service/email";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const emailData: EmailData = req.body;

//     try {
//       await sendEmail(emailData);
//       res.status(200).json({ message: "이메일이 성공적으로 전송되었습니다!" });
//     } catch (error) {
//       console.error("이메일 전송 중 오류 발생:", error);
//       res.status(500).json({ message: "이메일 전송 중 오류가 발생했습니다." });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
