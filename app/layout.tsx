import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Outta Touch",
  description:
    "Outta Touch yacht chartering company. Built by Nicholas Wagner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={cinzel.style}>
        <div id="root" className={"font-medium flex flex-col min-h-screen"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
