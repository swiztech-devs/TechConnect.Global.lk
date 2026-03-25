import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/Components/layout/Navbar";
import { Footer } from "@/Components/layout/Footer";
import { ScrollToTop } from "@/Components/ScrollToTop";

export const metadata: Metadata = {
  title: "NexusTech",
  description: "Engineering the next generation of software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background font-body text-slate-800 antialiased">
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}