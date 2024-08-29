import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(1504px_1068px_at_100%_0%,_var(--tw-gradient-stops))] from-[#14a2d5] from-0% via-[#043b65] via-0%  to-[#14a2d5] to-100%">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
