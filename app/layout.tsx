import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaryK Blog",
  description: "Created by Mary Kasparian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-zinc-900`}>
        <Navbar />
        {/* <ProfilePic /> */}
        {children}
      </body>
    </html>
  );
}
