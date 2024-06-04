import { Inter } from "next/font/google";
import "./globals.css";
import ClientRootLayout from "@/components/ui/clinetRootLayout";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mansa Capital",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
