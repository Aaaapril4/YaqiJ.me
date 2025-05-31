import Link from 'next/link';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGoogleScholar, FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";


const Contact = ({ className, links }) => {
    const iconMap = {
        'email': MdOutlineAlternateEmail,
        'github': FaGithub,
        'googlescholar': FaGoogleScholar,
        'linkedin': FaLinkedin,
        'paper': RiArticleLine,
    }
    return (
        <div className={`${className || ''} flex flex-row gap-12 justify-center`}>
            {Object.entries(links).map(([key, url]) => {
                const Icon = iconMap[key.toLowerCase()]
                if (!Icon) return null
                
                return (
                    <div key={key}>
                        <Link href={url} target="_blank" rel="noopener noreferrer">
                            <Icon size={40} className="hover:scale-103 hover:drop-shadow-lg" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Contact;