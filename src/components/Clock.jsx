import { useEffect, useState } from "react"
import './Clock.css'

export default function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(()=> {

        setInterval(()=>{ setTime(new Date())

        },1000)

    },[])

    return(
        <div className="clock">
            <h1 className="time">Clock</h1>
            {time.toLocaleTimeString()}
            <hr />
        </div>
    )
}