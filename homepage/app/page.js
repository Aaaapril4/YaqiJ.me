import Side from "@/app/components/side";
import Intro from "@/app/components/intro";
import Pub from "@/app/components/pub";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
 } from "@/app/ui/popover";

export default function Home() {
  return (
    <main className=" flex flex-col items-start lg:flex-row">

      <Side className='border w-full h-auto xl:max-w-xl lg:h-screen'/>

      <div className="flex justify-center items-start w-full overflow-y-auto min-h-screen border bg-[#FFFEFB] text-[#27272A]">
        <div className='grid grid-cols-6 border w-full gap-4 max-w-xl lg:max-w-4xl p-4 xl:grid-cols-12 xl:grid-cols-12'>

          <Popover>
            <PopoverTrigger asChild>
              <Intro />
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <p>test</p>
              </div>
            </PopoverContent>
          </Popover>
          
          <Pub />

        </div>
      </div>
    </main>
  );
}
