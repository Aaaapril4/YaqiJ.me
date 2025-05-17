import Block from "@/app/ui/block"
import { Popup } from "@/app/ui/popup";
import Image from "next/image";
import Tag from "@/app/components/tag";

const ProjectBlock = ({ className, image, projectName, projectDescription, tags }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="w-full h-full flex flex-col p-0">
                <div className="w-full h-40 overflow-hidden rounded-xl shadow-md">
                    <Image
                        src={image}
                        alt={projectName}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:saturate-100 saturate-60 group-hover:opacity-100 opacity-80"
                    />
                </div>
                
                <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <p className="text-left text-2xl font-semibold my-2 mx-3">
                            {projectName}
                        </p>
                        <p className="text-left text-gray-600 mx-3">
                            {projectDescription}
                        </p>
                    </div>
                    <Tag tags={tags} className="mx-2" />
                </div>
            </div>
        </Block>
    )
}

const Project = ({ className, image, projectName, projectDescription, projectContent, tags }) => {
    return (
        <Popup 
            className={`${className}`}
            trigger={
                <ProjectBlock 
                    image={image} 
                    projectName={projectName} 
                    projectDescription={projectDescription}
                    tags={tags}
                    className="content-fade-in" 
                />}
            content={projectContent}
            title={projectName}
            description={projectDescription}
            image={image}
      />
    )
}

export default Project;