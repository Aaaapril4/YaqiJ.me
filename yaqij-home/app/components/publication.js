import Block from "@/app/ui/block"
import { MdOutlineArticle } from "react-icons/md";
import PublicationContent from "@/app/content/publication.mdx";

const Publication = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <MdOutlineArticle size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/>
            </div>
        </Block>
    )
}

export { Publication, PublicationContent }