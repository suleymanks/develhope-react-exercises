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
            <h2><CounterDisplay count={count} /></h2>
            <button onClick={()=> setCount(count+ props.incrementAmount)}>Increment</button>
            <button onClick={()=> setCount(count- props.decrementAmount)}>Decrement</button>
            <button onClick={()=> setCount(props.initial)}>Reset</button>
        </>
    )
}