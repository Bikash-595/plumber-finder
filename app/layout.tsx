import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import PlumberFinderFooter from "@/components/PlumberFinderFooter";

export const metadata: Metadata = {
  title: "Plumber Finder - Find Trusted Plumbers Near You",
  description: "Compare verified local plumbers, read reviews, and book with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <PlumberFinderFooter />
      </body>
    </html>
  );
}
