import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

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
      <body>
        <div className={"flex flex-col min-h-screen"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
