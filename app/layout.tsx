import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classes from "../styles/heading.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Reader",
  description: "A news reading website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center bg-base-100">
          <a className={classes.heading}>RSS READER</a>
        </div>
        {children}
      </body>
    </html>
  );
}
