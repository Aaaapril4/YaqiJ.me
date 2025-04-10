import Block from "@/app/ui/block"
import { RiArrowDownWideFill } from "react-icons/ri";
import IntroContent from "@/app/content/intro.mdx";

const Intro = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <p className="mb-5 flex flex-row items-end">
                    <span className="group-hover:text-4xl text-3xl mr-4 transition-all"> HI </span>
                    <span className="flex group-hover:text-5xl transform group-hover:rotate-[60deg] text-4xl transition-all"> 👋 </span>
                </p>
                <p className="text-left mb-5">
                   This website is under construction.
                </p>

                <div className="flex justify-center animate-bounce">
                    <RiArrowDownWideFill size={40} className="text-gray-600"/>
                </div>
            </div>
        </Block>
    )
}

export { Intro, IntroContent }