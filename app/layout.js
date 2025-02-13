import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
//import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "sonner";
import { icons } from "lucide-react";
import CanvasCursor from "@/components/CanvasCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrepGenie",
  // icons: {
  //   icon: "/image.svg",
  // },
  description: "AI-Powered Guide to Tech Success",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider className="dark">
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        >
          <Toaster />
          <CanvasCursor id="canvas" className="z-90" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
