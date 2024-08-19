import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Contacts from "@/app/ui/contacts";
import Sidebar from "@/app/ui/sidebar";

const Side = ({ className }) => {

    return (
        <Sidebar className={`${className}`}>
            <div className="flex flex-col w-auto">
                <div className="mb-4 ">
                    <Avatar>
                        <AvatarImage src="/me.png" />
                        <AvatarFallback>YJ</AvatarFallback>
                    </Avatar>       
                </div>
            </div>

            <div className="p-2">
                <p className='text-2xl font-bold'>Yaqi Jie</p>
                <p className='mb-3 italic'> This is my life and my sandbox</p>

                <ul className='space-y-1 mb-14'>
                    <li key={1}> 🏫 PhD candidate in EES&CMSE@MSU </li>
                    <li key={2}> 🌋 Researcher in computational seismology </li>
                    <li key={3}> 👩🏻‍💻 Independent developer </li>
                    <li key={4}> 📈 Machine Learning learner </li>
                    <li key={5}> 😴 Dreamer but INFJ </li>
                    <li key={6}> 🥘 🏂 ✨ 🐱 </li>
                </ul>

                <Contacts />
            </div>
        </Sidebar>
    );
};

export default Side;