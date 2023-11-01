import { useState } from "react";

export default function AlertClock() {
    const [date, setDate] = useState("");

    function alert(){
        const currentDate = new Date;
        setDate(currentDate);
    }

    return (
        <>
            <button onClick={alert}>Click to see the time</button>
            <p>{date.toString()}</p>
        </>
    )
}