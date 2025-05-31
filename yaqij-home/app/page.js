'use client';

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Side from "@/app/pages/side";
import Intro from "@/app/pages/Intro";
import Education from "@/app/pages/education";
import Publication from "@/app/pages/publication";
import Catchup from "@/app/pages/catchup";
import Project from "@/app/components/project";
import adloc from "@/app/images/adloc.jpeg";
import gamma from "@/app/images/gamma.png";
import AdlocContent from "@/app/contents/adloc.mdx";
import GammaContent from "@/app/contents/gamma.mdx";

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
          <div className='relative grid grid-cols-6 grid-auto-rows-fr grid-flow-dense w-full gap-4 p-4 max-w-[400px] lg:max-w-[650px] xl:grid-cols-12'>
            
            <Intro className="col-span-6 row-span-6 aspect-square" />

            <Education className="col-span-3 row-span-3 aspect-square" />

            <Publication className="col-span-3 row-span-3 aspect-square" />

            <Project className="col-span-6 row-span-6 aspect-square" 
              projectName="Adloc"
              projectDescription="Fast and Robust Earthquake Location"
              projectContent={<AdlocContent />}
              image={adloc}
              tags={["Seismology", "Optimization"]}
            />

            <Catchup className="col-span-6 row-span-3 aspect-[2/1]" />

            <Project className="col-span-6 row-span-6.3 aspect-[6/6.3]" 
              projectName="GaMMA-1D"
              projectDescription="A GMM Seismic Associator with Enhanced Earthquake Location"
              projectContent={<GammaContent />}
              image={gamma}
              tags={["Seismology", "Machine Learning"]}
              imagePosition={20}
            />
            


          </div>
        </div>
        <footer className="fixed bottom-0 w-full text-center p-2 text-sm text-gray-500 bg-[#FFFEFB] z-[51]">
          © {new Date().getFullYear()} Yaqi Jie | MIT License | Source code: <a href="https://github.com/Aaaapril4/YaqiJ.me" className="text-blue-500 hover:text-blue-600">https://github.com/Aaaapril4/YaqiJ.me</a>
        </footer>
      </div>
    </Theme>
  );
}
