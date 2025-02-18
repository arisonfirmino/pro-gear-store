import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/app/providers/auth";
import CartProvider from "@/app/providers/cart";
import Container from "@/app/components/container";
import Header from "@/app/components/header/header";
import { Separator } from "@/app/components/ui/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProGear Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <Container>
              <Header />
              <Separator />
              {children}
            </Container>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
