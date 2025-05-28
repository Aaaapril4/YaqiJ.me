const Tag = ({ tags, className }) => {
    const colorMap = {
        "Python": "bg-blue-50",
        "PyTorch": "bg-purple-50",
        "Seismology": "bg-orange-50",
        "Machine Learning": "bg-red-50",
        "Optimization": "bg-yellow-50",
    }
    return (
        <div className={`flex flex-wrap gap-2 mb-2 ${className}`}>
            {tags?.map((tag, index) => (
                <span 
                    key={index}
                    className={`px-2 py-1 text-xs ${colorMap[tag] || "bg-gray-100"} text-gray-600 rounded-full`}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default Tag;