import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full bg-white text-gray-800">{children}</body>
    </html>
  );
}
