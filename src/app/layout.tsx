import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
variable:"--font-inter",
weight: ["400", "500", "600", "700"]
})



export const metadata: Metadata = {
  title: "Game club",
  description: "game club - crm dashboard system",
  icons:"file.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
