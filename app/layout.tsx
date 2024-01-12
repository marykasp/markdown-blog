import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Navigation from "./components/Navigation";

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
      <body className={`${inter.className} bg-white dark:bg-zinc-900`}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 mt-10">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
