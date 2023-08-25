import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}