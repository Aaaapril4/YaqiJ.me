import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "YaqiJ.me",
  description: "My little world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${mono.className} content-fade-in`}>{children}</body>
    </html>
  );
}
