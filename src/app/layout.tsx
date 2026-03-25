import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/Components/layout/Navbar";
import { Footer } from "@/Components/layout/Footer";
import { ScrollToTop } from "@/Components/ScrollToTop";
import { PageLoader } from "@/Components/ui/PageLoader";

export const metadata: Metadata = {
  title: "TechConnect Global",
  description: "Engineering the next generation of software.",
  icons: {
    icon: "/img/Logo-1.jpeg",
    shortcut: "/img/Logo-1.jpeg",
    apple: "/img/Logo-1.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background font-body text-slate-800 antialiased">
        <PageLoader />
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