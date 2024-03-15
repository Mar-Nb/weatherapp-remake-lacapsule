import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { css } from "@frontend/styled-system/css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeatherApp - Remake",
  description:
    "Projet de La Capsule visant à refaire le projet Weather App avec NestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} ${css({ color: "white" })}`}>
        {children}
        <ToastContainer bodyClassName={montserrat.className} theme="dark" transition={Zoom} />
      </body>
    </html>
  );
}
