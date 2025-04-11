import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { IoClose } from "react-icons/io5";
import DynamicTitle from "@/app/components/DynamicTitle";

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverAnchor = PopoverPrimitive.Anchor
const PopoverContent = React.forwardRef(({ className, ...props }, ref) => (
  <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
        ref={ref}
        className={`
            relative inset-0 z-50 h-screen w-screen blur-filter ${className}`}
        {...props} />
    </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverClose = PopoverPrimitive.Close

const Popup = ({ trigger, content, className, title, description }) => {
  return (
    <Popover>
        <PopoverAnchor asChild>
            <div className="fixed w-full top-0 left-0 invisible" />
        </PopoverAnchor>
        <PopoverTrigger asChild>
            <div className={`cursor-pointer ${className}`}>
                {trigger}
            </div>
        </PopoverTrigger>
        <PopoverContent>
            <DynamicTitle title={title} description={description} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-xl bg-[#FFFFFD] max-w-[900px] h-auto max-h-[90%] w-[90%] animate-in fade-in-0 zoom-in-90 duration-300 ease-out">
                <PopoverClose className="absolute right-2 top-2 opacity-70 hover:opacity-100 transition-all duration-300 ease-out hover:scale-110">
                    <IoClose size={40} className="hover:scale-103 hover:drop-shadow-lg" />
                </PopoverClose>
                <div className="overflow-y-auto max-h-[80vh] my-10 mx-4 scrollbar-hide">
                {content}
                </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverClose, Popup }
