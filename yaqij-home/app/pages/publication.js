import Block from "@/app/components/block"
import { MdOutlineArticle } from "react-icons/md";
import PublicationContent from "@/app/contents/publication.mdx";
import { Popup } from "@/app/components/popup";

const PublicationBlock = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <MdOutlineArticle size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/>
            </div>
        </Block>
    )
}

const Publication = ({ className }) => {
    return (
        <Popup 
            className={`${className}`}
            trigger={<PublicationBlock className="content-fade-in" />}
            content={
                <PublicationContent />
            }
            title="Publications"
            description="Research papers and publications"
      />
    )
}

export default Publication;