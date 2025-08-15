import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Footer from "@/components/FooterPage/Footer";
import Header from "@/components/Header";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  display: "swap",
  weight: ["400", "500", "600", "700"], 
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Cesar Pisa - Engenheiro de Software",
  description: "Potifólio pessoal. Desenvolvedor Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${outfit.variable} font-sans bg-background text-foreground flex-col min-h-screen`}>
        <Header /> 
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
