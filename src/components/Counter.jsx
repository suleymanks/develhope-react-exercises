import {useState} from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.initial);


    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+ props.incrementAmount)}>Increment</button>
        </>
    )
}