import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/FooterPage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cesar Pisa - Engenheiro de Software",
  description: "Potifólio pessoal. Desenvolvedor Full Stack, focado em Next.js e React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lora.className} bg-[#3b352e]`}>
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
