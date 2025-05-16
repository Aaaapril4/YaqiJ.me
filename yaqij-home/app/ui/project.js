import Block from "@/app/ui/block"
import { Popup } from "@/app/ui/popup";
import Image from "next/image";


const ProjectBlock = ({ className, image, projectName, projectDescription }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="w-full h-full flex flex-col p-0">
                <div className="w-full h-40 overflow-hidden rounded-xl shadow-md">
                    <Image
                        src={image}
                        alt={projectName}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:saturate-100 saturate-50 group-hover:opacity-100 opacity-70"
                        style={{
                            // maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)'
                        }}
                    />
                </div>
                
                <div className="flex flex-col">
                    <p className="text-left text-2xl font-semibold my-3 mx-3">
                        {projectName}
                    </p>
                    <p className="text-left text-gray-600 mx-3">
                        {projectDescription}
                    </p>
                </div>
            </div>
        </Block>
    )
}

const Project = ({ className, image, projectName, projectDescription, projectContent }) => {
    return (
        <Popup 
            className={`${className}`}
            trigger={
                <ProjectBlock 
                    image={image} 
                    projectName={projectName} 
                    projectDescription={projectDescription} 
                    className="content-fade-in" 
                />}
            content={projectContent}
            title={projectName}
            description={projectDescription}
      />
    )
}

export default Project;