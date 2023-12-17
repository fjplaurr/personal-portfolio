import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import LogosList from "./components/logosList";
import Image from "next/image";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fran Plaza",
  description:
    "Transform your business with Fran Plaza's expertise. From ideas to market-ready products, we're your partner for success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className={styles.header}>Fran Plaza</header>
        {children}
        <footer className={styles.footer}>
          Designed and built by Fran Plaza
        </footer>
      </body>
    </html>
  );
}
