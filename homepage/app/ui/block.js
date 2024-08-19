const Block = ({ className, children }) => {

    return (
        <div className={`flex shadow-md border w-full h-full block-bottom ${className}`}>
            <div className={`flex w-full h-auto block-top ${className}`}>
                {children} 
            </div>
        </div>
    )
}
export default Block;