import Block from "@/app/ui/block"
import { FaGraduationCap } from "react-icons/fa6";
import EducationContent from "@/app/content/education.mdx";
import { Popup } from "@/app/ui/popup";

const EducationBlock = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <FaGraduationCap size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/>
            </div>
        </Block>
    )
}

const Education = ({ className }) => {
    return (
        <Popup 
            className={`${className}`}
            trigger={<EducationBlock className="content-fade-in" />}
            content={
            <EducationContent />
            }
            title="Education"
            description="Academic background and experiences"
      />
    )
}

export default Education;
