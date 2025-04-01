import Block from "@/app/ui/block"
import { RiArrowDownWideFill } from "react-icons/ri";

const Intro = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <p className="mb-5 flex flex-row items-end">
                    <span className="group-hover:text-4xl text-3xl mr-4 transition-all"> HI </span>
                    <span className="flex group-hover:text-5xl transform group-hover:rotate-[60deg] text-4xl transition-all"> 👋 </span>
                </p>
                <p className="text-left mb-5">
                   This website is under construction.
                </p>

                <div className="flex justify-center animate-bounce">
                    <RiArrowDownWideFill size={40} className="text-gray-600"/>
                </div>
            </div>
        </Block>
    )
}

const IntroContent = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">About me</h2>
            <p className="my-4">As a final-year PhD candidate in computational science and geophysics, I focus on cutting-edge interdisciplinary research in computational seismology. My research focus on:</p>
                <ul className="list-disc pl-6 space-y-2">
                <li>Machine learning in seismology – advancing AI-driven earthquake detection and analysis</li>
                <li>Optimization & cloud-based automation – streamlining large-scale workflows</li>
                <li>High-performance computing (HPC) modeling – developing scalable solutions for seismic simulations</li>
                </ul>
            <p className="my-4">I am passionate about delivering high-quality results and uncovering stories behind data—translating complex information into meaningful insights.</p>
            <p className="my-4">Beyond research, I have experience in full-stack web development, interning at Dow Chemical and Quantum Photonics Club.</p>
            <p className="my-4">Outside of work, I enjoy snowboarding and stargazing and I love food! I love hearing new stories—so feel free to connect and chat! I’m open to collaborations on exciting projects that spark my interest.</p>
            <p className="my-4">I am actively looking for a full-time <span className="font-bold">software engineer</span>, <span className="font-bold">machine learning engineer</span>, <span className="font-bold">research scientist</span>, or similar role and open to relocation, with a preference for Los Angeles region.</p>
        </div>
    )
}
export { Intro, IntroContent }