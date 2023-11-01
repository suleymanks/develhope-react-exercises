import {useState} from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.initial);

    function CounterDisplay(props) {
        return(
            <h2>
                {props.count}
            </h2>
        )
    }


    return (
        <>
            <CounterDisplay count={count} />
            <button onClick={()=> setCount(count+ props.incrementAmount)}>Increment</button>
        </>
    )
}