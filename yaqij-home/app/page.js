'use client';

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Side from "@/app/components/side";

export default function Home() {
  return (
    <Theme accentColor="[#FFFEFB]" grayColor="slate" className="text-[#27272A]">
      <main className="min-h-screen">
        <Side />
      </main>
      <footer className="fixed bottom-0 w-full text-center p-2 text-sm text-gray-500 bg-[#FFFEFB] z-[51]">
          © {new Date().getFullYear()} Yaqi Jie | MIT License | Source code: <a href="https://github.com/Aaaapril4/YaqiJ.me" className="text-blue-500 hover:text-blue-600">https://github.com/Aaaapril4/YaqiJ.me</a>
      </footer>
    </Theme>
  );
}
