import Block from "@/app/ui/block"
import { RiArrowDownWideFill } from "react-icons/ri";

const Intro = ({ className }) => {

    return (
        <Block className={`group col-span-6 h-auto aspect-square ${className}`}>
            <div className="justify-center items-center p-12">
                <p className="mb-5 flex flex-row items-end">
                    <span className="group-hover:text-4xl text-3xl mr-4"> HI </span>
                    <span className="flex group-hover:text-5xl transform group-hover:rotate-[60deg] text-4xl "> 👋 </span>
                </p>
                <p className="text-left mb-5">
                    I'm seeking a position as a machine learning engineer or research scientist.
                </p>

                <div className="flex justify-center">
                    <RiArrowDownWideFill size={50}/>
                </div>
            </div>

        </Block>
    )
}
export default Intro

//  I'm a sixth year PhD student focus on high-performance computational seismology under supervisition of Dr. Shawn Wei and Dr. Min Chen in Earth and Environmental Sciences and Computational, Mathmatical, Science and Engineering @MSU. 