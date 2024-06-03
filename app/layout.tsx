import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="flex items-center justify-center bg-zinc-900">
          <a className="font-chomsky text-8xl text-zinc-100">RSS READER</a>
        </div>
        {children}
      </body>
    </html>
  );
}
