import Block from "@/app/ui/block"
import { FaGraduationCap } from "react-icons/fa6";

const Education = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <FaGraduationCap size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/>
            </div>
        </Block>
    )
}

const EducationContent = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Education</h2> 
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <h2 className="my-2">Ph.D. Candidate in Geophysics | Ph.D. Candidate in Computational Science, Michigan State University, 2019 - Present</h2>
                    <p className="text-sm">Advisor: <a href="https://sites.google.com/a/msu.edu/swei/" target="_blank" className="hover:text-orange-700">Songqiao Shawn Wei</a> & <a href="https://www.researchgate.net/profile/Min-Chen-32" target="_blank" className="hover:text-orange-700">Min Chen</a></p>
                    <p className="text-sm">Thesis: Seismic Studies of Plate Boundaries - Case Studies at the East African Rift System and the Alaska Peninsula</p>
                </li>
                <li>
                    <h2 className="text-md my-2">B.E. in Computer Science, Huazhong University of Science and Technology, 2019</h2>
                    <p className="text-sm">Advisor: <a href="http://faculty.hust.edu.cn/hulong" target="_blank" className="hover:text-orange-700">Long Hu</a></p>
                    <p className="text-sm">Thesis: CNN-Based Study on Speech Emotion Recognition</p>
                </li>
                <li>
                    <h2 className="text-md my-2">B.E. in Geosciences, China University of Geosciences, 2019</h2>
                    <p className="text-sm">Advisor: Jianwei Li</p>
                    <p className="text-sm">Thesis: Pyrite in Metamorphic and Pegmatite Rocks of the Xiaoqinling–Xiongershan Area: Implications for Gold Source</p>
                </li>
            </ul>
            
        </div>
    )
}

export { Education, EducationContent }
