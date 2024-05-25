import type { Metadata } from "next";
import localFont from "next/font/local";
// import "@/styles/globals.css";
import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Image from "next/image";

const pretendard = localFont({
  src: "../fonts/Pretendard-Regular.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: {
    default: "Jiu Portfolio",
    template: "송지우 Frontend | %s",
  },

  description: "프론트엔드 개발자 송지우의 포트폴리오입니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} min-h-screen bg-primary font-pretendard flex flex-col max-w-screen-2xl mx-auto overflow-x-hidden scrollbar-hide w-full selection:bg-blueLight_color`}
      >
        <Header />
        <main className="relative grow w-11/12 mx-auto md:w-4/5">
          {children}
          <div id="_modal"></div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
