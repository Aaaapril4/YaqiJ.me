const Block = ({ className, children }) => {
    return (
        <div className={`flex w-full h-full block-bottom shadow-md hover:shadow-none hover:drop-shadow-lg transition-all ${className}`}>
            <div className={`flex w-full h-auto block-top ${className}`}>
                {children} 
            </div>
        </div>
    )
}

export default Block;