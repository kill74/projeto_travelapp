import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import navbar from "@/components/navbar";
import footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Viagens",
  description: "Aplicacao para Viagens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <navbar/>

      <footer/>
        {children}
      </body>
    </html>
  );
}
