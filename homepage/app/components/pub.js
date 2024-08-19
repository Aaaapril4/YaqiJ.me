import Block from "@/app/ui/block"

const pubs = ["test test test test tesvdfdfgagasdf raeraega gagaufa adfadgafg", "2", "3", "4", "5", "6", "7", "8", "9","10", "11"];
const Pub = ({ className }) => {

    return (
        <div className={`relative col-span-9 aspect-[3/1] ${className} p-0 m-0`}>
            <div className="absolute -top-3 left-4 text-3xl z-10 bg-transparent text-[#27272A]">
                Publication
            </div>
            <Block className={`justify-center`}>
                <div className="items-start h-[80%] w-full overflow-y-auto scrollbar-hide snap-y mt-5">
                    <ol className="list-decimal pl-16 pr-2" reversed>
                        {pubs.slice().reverse().map((publication, index) => (
                            <li key={index} className="snap-start p-1">{publication}</li>
                        ))}
                    </ol>
                </div>
            </Block>
        </div>
    )
}
export default Pub