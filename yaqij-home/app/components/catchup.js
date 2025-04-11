import Block from "@/app/ui/block"
import { MdTipsAndUpdates } from "react-icons/md";
import CatchupContent from "@/app/content/catchup.mdx";
import { Popup } from "@/app/ui/popup";

const CatchupBlock = ({ className }) => {
    return (
        <Block className={`group aspect-[2/1] ${className}`}>
            <div className="flex flex-col justify-center items-center p-12">
                <div className="mt-4 transition-colors duration-300">
                    <span className="inline-block group-hover:hidden"><MdTipsAndUpdates size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/></span>
                    <span className="hidden group-hover:inline-block text-sm group-hover:text-[#27272A]">I finished my defense and I&apos;m looking for a full-time engineer role.</span>
                </div>
            </div>
        </Block>
    )
}

const Catchup = ({ className }) => {
    return (
        <Popup 
            className={`${className}`}
            trigger={<CatchupBlock className="content-fade-in" />}
            content={
                <CatchupContent />
            }
            title="What I'm Working On"
            description="Current projects and activities"
        />
    )
}
export default Catchup;
