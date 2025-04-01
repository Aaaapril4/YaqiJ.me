import Block from "@/app/ui/block"
import { MdOutlineArticle } from "react-icons/md";

const Publication = ({ className }) => {
    return (
        <Block className={`group ${className}`}>
            <div className="justify-center items-center p-12">
                <MdOutlineArticle size={40} className="group-hover:scale-103 group-hover:drop-shadow-lg"/>
            </div>
        </Block>
    )
}

const PublicationContent = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <h2 className="text-xl my-4">Peer-Reviewed Publications</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Xi, Z.*, Wei, S. S.*, Zhu, W., Beroza, G. C., Jie, Y., & Saloor, N. (2024). Deep learning for deep earthquakes: Insights from OBS observations of the Tonga subduction zone. Geophysical Journal International, 238(2), 1073–1088. https://doi.org/10.1093/gji/ggae200</li>
                    <li>Zhao, S., Li, Z.*, Li, J., Zhao, X., Jiang, S., Lin, H., Jie, Y., Tao, H., & Du, S. (2022). Trace element and S-Pb isotopic compositions of pyrite from the Precambrian metamorphic rocks and their derivative pegmatites in the Xiaoqinling district, southern North China Craton: Implications for possible gold source of the Early Cretaceous gold deposits. Precambrian Research, 377, 106739. https://doi.org/10.1016/j.precamres.2022.106739</li>
                </ul>
            <hr className="my-4 border-gray-300" />
            <h2 className="text-xl my-4">Preprints</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Jie, Y., Wei, S. S., Zhu, W., Freymueller, J. T., & Elliott, J. (2025). Background Seismicity and Aftershocks of the 2020-2021 Large Earthquakes at the Alaska Peninsula Revealed by a Deep-learning-based Catalog. Authorea Preprints.</li>
                    <li>Zhu, W., Rong, B., Jie, Y., & Wei, S. S. (2025). Robust Earthquake Location using Random Sample Consensus (RANSAC). arXiv preprint arXiv:2502.10933.</li>      
                </ul>
            <hr className="my-4 border-gray-300" />
            <h2 className="text-xl my-4">Publications under Preparation</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Jie, Y. & Wei, S. S.. Temporal and Spatial Earthquake Distributions Along the Alaska Peninsula from 1997 to 2023: New Insights from a Deep-Learning Catalog.</li>
                    <li>Jie, Y., Li G., Chen, M. & Wei, S. S.. Lithospheric Modification and Rift Dynamics in the East African Rift System revealed by surface-wave and body-wave joint tomography.</li>    
                </ul>
            <hr className="my-4 border-gray-300" />
            <h2 className="text-xl my-4">Conference Abstracts</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Jie Y., Wei S. S., Zhu W. Freymueller, J. T., & Elliott, J.(2024), Background seismicity and aftershocks of the 2020–2021 large earthquakes at the Alaska Peninsula revealed by a deep-learning-based catalog. Presented at 2024 Fall Meeting, AGU, 9-13 Dec, Washington,D.C., USA.</li>
                    <li>Jie Y., Wei S. S. & Zhu W. (2024), Seismic Activity in Akutan Volcano, Alaska Detected With Deep Learning and Its Relationship to Magma Supply. S13B-3471 presented at 2024 Fall Meeting, AGU, 9-13 Dec, Washington,D.C., USA.</li>
                    <li>Jie Y., Wei S. S. & Zhu W. (2024), Earthquake clustering and statistics at the Alaska Peninsula. Presented at 4th Cargèse School on Earthquakes, 14-18 October, Cargèse, France.</li>
                    <li>Jie Y., Wei S. S. & Zhu W. (2023), Earthquake clustering and statistics at the Alaska Peninsula. T41C-0232 presented at 2023 Fall Meeting, AGU, 11-15 Dec, San Francisco, USA.</li>
                    <li>Jie Y., Wei S. S. & Zhu W. (2023), Earthquake clustering and statistics at the Alaska Peninsula. Presented at 2023 SSA Annual Meeting, 17-20 April, San Juan, USA.</li>
                    <li>Jie Y., Wei S. S. & Zhu W. (2022), Earthquake clustering and statistics at the Alaska Peninsula. T25E-0172 presented at 2022 Fall Meeting, AGU, 12-16 Dec, Chicago, USA.</li>
                    <li>Jie Y., Li G., Chen M. & Wei S. (2021), Shear wave speed imaging of the East African Rift System - implication to magma-poor rift process. T43D-10 presented at 2021 Fall Meeting, AGU, 13-17 Dec, New Orleans, USA.</li>
                    <li>Jie Y., Li G. & Chen M. (2020), Shear wave speed imaging of the magma-poor western branch of the East African Rift. T041-0010 presented at 2020 Fall Meeting, AGU, 1-17 Dec., Virtual.</li>
                    <li>Jie Y., Li G. & Chen M. (2020), The magma plumbing systems beneath the magma-poor rifts of the East Africa. Presented at 2020 Eastern Session Annual Meeting, SSA, 12-16 Oct., Virtual.</li>
                </ul>
        </div>
    )
}
export { Publication, PublicationContent }