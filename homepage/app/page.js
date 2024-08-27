import Side from "@/app/components/side";
import Intro from "@/app/components/intro";
import Pub from "@/app/components/pub";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor
 } from "@/app/ui/popover";

export default function Home() {
  return (
    <main className=" flex flex-col items-start lg:flex-row">

      <Side className='border w-full h-auto lg:h-screen'/>

      <div className="flex justify-center items-start w-full overflow-y-auto min-h-screen border bg-[#FFFEFB] text-[#27272A] relative">
        <div className='relative grid grid-cols-6 border w-full gap-4 max-w-xl lg:max-w-4xl p-4 xl:grid-cols-12 xl:grid-cols-12'>
          <Popover>
            <PopoverAnchor asChild>
              <div className="absolute w-full top-0 left-0 invisible" />
            </PopoverAnchor>
            <PopoverTrigger asChild>
                  <Intro className={"z-0"}/>
            </PopoverTrigger>
            <PopoverContent>
              <div>
                test
              </div>
            </PopoverContent>
          </Popover>
          
          <Pub className={"z-0"}/>

        </div>
      </div>
    </main>
  );
}
