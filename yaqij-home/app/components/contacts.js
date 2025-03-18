'use client';

import Link from 'next/link';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

const Contacts = ({ className }) => {

    return (
        <div className={`${className || ''} flex flex-row justify-evenly`}>
            <div key={'email'}>
                <Link href={''}>
                    <TfiEmail size={40}/>
                </Link>
            </div>
            <div key={'github'}>
                <Link href={''}>
                    <SiGithub size={40}/>
                </Link>
            </div>
            <div key={'linkedin'}>
                <Link href={''}>
                    <SiLinkedin size={40}/>
                </Link>
            </div>
        </div>
    )
}

export default Contacts;