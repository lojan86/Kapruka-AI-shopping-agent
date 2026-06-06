import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sivakumar Sivalojan — AI/ML Engineer & Software Developer",
  description:
    "Personal portfolio of Sivakumar Sivalojan — AI/ML Engineer Intern candidate specializing in machine learning, deep learning, computer vision, and NLP. Explore projects, skills, and vision.",
  keywords: [
    "AI/ML Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Portfolio",
    "Sri Lanka",
    "Sivakumar Sivalojan",
  ],
  authors: [{ name: "Sivakumar Sivalojan", url: "https://github.com/lojan86" }],
  openGraph: {
    title: "Sivakumar Sivalojan — AI/ML Engineer",
    description:
      "Building intelligent solutions with AI. Explore my projects, skills, and 5-year vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#040813] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
