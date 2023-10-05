import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outta Touch",
  description:
    "Outta Touch yacht chartering service. Designed and built by Nicholas Teddy Wagner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          id="root"
          className={"font-cinzel font-medium flex flex-col min-h-screen"}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
