import type { Metadata } from "next";
import { Raleway, Dancing_Script, Satisfy } from "next/font/google";
import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Dany Art",
  description: "Minimalistycký umelecky e-shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${raleway.variable} ${dancing.variable}`}
    >
      <body className="body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
