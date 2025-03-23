import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "YaqiJ.me",
  description: "My little world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body style={{ fontFamily: "'Roboto Mono', monospace" }} className={`${robotoMono.className} content-fade-in`}>
        {children}
      </body>
    </html>
  );
}
