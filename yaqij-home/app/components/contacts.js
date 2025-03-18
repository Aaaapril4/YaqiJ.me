'use client';

import Link from 'next/link';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGoogleScholar, FaGithub, FaLinkedin } from "react-icons/fa6";

const Contacts = ({ className }) => {

    return (
        <div className={`${className || ''} flex flex-row gap-12 justify-center`}>
            <div key={'email'}>
                <Link href={'mailto:april.jyq@gmail.com'} target="_blank" rel="noopener noreferrer">
                    <MdOutlineAlternateEmail size={40}/>
                </Link>
            </div>
            <div key={'github'}>
                <Link href={'https://github.com/Aaaapril4'} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40}/>
                </Link>
            </div>
            <div key={'googlescholar'}>
                <Link href={'https://scholar.google.com/citations?user=X1SoTQcAAAAJ'} target="_blank" rel="noopener noreferrer">
                    <FaGoogleScholar size={40}/>
                </Link>
            </div>
            <div key={'linkedin'}>
                <Link href={'https://www.linkedin.com/in/yaqi-jie'} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40}/>
                </Link>
            </div>
        </div>
    )
}

export default Contacts;