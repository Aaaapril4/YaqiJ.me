const Sidebar = ({ className, children }) => {

    return (
        <aside className={`bg-[#FFFEFB] text-[#27272A] flex flex-col justify-center items-center ${className}`}>
            {children}
        </aside>
    )
}
export default Sidebar;