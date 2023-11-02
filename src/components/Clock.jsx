import { useEffect, useState } from "react"

export default function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(()=> {

        setInterval(()=>{ setTime(new Date())

        },1000)

    },[])

    return(
        <h2>
            {time.toLocaleTimeString()}
        </h2>
    )
}