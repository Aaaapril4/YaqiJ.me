const Block = ({ className, children }) => {
    return (
        <div className={`flex w-full h-full shadow-md cursor-pointer items-center justify-center rounded-xl overflow-hidden hover:shadow-lg transition-all ${className}`}>
            {children}
        </div>
    )
}

export default Block;