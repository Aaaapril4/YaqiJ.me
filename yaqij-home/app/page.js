'use client';

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Side from "@/app/components/side";
import Intro from "@/app/components/Intro";
import Education from "@/app/components/education";
import { Publication, PublicationContent } from "@/app/components/publication";
import Catchup from "@/app/components/catchup";
import { Popup } from "@/app/ui/popup";

export default function Home() {
  return (
    <Theme 
      accentColor="[#FFFEFB]" 
      grayColor="slate" 
      className="text-[#27272A]"
    >
      <div className={`flex min-h-screen font-mono`}>
        <div className="w-1/2">
          <Side />
        </div>

        <div className="w-1/2 min-h-screen overflow-y-auto p-8 flex justify-center items-start bg-[#FFFEFB] text-[#27272A] relative">
          <div className='relative grid grid-cols-6 w-full gap-4 p-4 max-w-xl lg:max-w-4xl xl:grid-cols-12'>
            
            <Intro className="col-span-6" />

            <Education className="col-span-3" />

            <Publication className="col-span-3" />

            <Catchup className="col-span-6" />
            
          </div>
        </div>
        <footer className="fixed bottom-0 w-full text-center p-2 text-sm text-gray-500 bg-[#FFFEFB] z-[51]">
          © {new Date().getFullYear()} Yaqi Jie | MIT License | Source code: <a href="https://github.com/Aaaapril4/YaqiJ.me" className="text-blue-500 hover:text-blue-600">https://github.com/Aaaapril4/YaqiJ.me</a>
        </footer>
      </div>
    </Theme>
  );
}
