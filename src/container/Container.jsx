
export default function Container({children,title}) {
    return (
        <div className="bg-white border-2 border-red-500">
            {children}
            <h1>{title}</h1>
        </div>
    )
}