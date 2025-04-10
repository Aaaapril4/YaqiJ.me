import Block from "@/app/ui/block"
import { MdTipsAndUpdates } from "react-icons/md";
import CatchupContent from "@/app/content/catchup.mdx";
const Catchup = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="flex flex-col justify-center items-center p-12">
                <div className="mt-4 transition-colors duration-300">
                    <span className="inline-block group-hover:hidden"><MdTipsAndUpdates size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/></span>
                    <span className="hidden group-hover:inline-block text-sm group-hover:text-[#27272A]">I&apos;m looking for a full-time engineer role.</span>
                </div>
            </div>
        </Block>
    )
}

export { Catchup, CatchupContent }
