import { useState } from "react"

export default function Container({children,title}) {
    const [collapse, setCollapse] = useState(false)

    return (
        <div className="bg-white border-2 border-red-500">
            <h1 onClick={()=> setCollapse(!collapse)} className="cursor-pointer">
                {title}
            </h1>
            {collapse && children}
        </div>
    )
}