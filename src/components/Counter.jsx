import {useEffect, useState} from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.initial);

    useEffect(()=> {
        console.log(count);
    },[count])

    function CounterDisplay(props) {
        return(
            <p>
                {props.count}
            </p>
        )
    }


    return (
        <>
            <h1><CounterDisplay count={count} /></h1>
            <button onClick={()=> setCount(count+ props.incrementAmount)}>Increment</button>
            <button onClick={()=> setCount(count- props.decrementAmount)}>Decrement</button>
            <button onClick={()=> setCount(props.initial)}>Reset</button>
        </>
    )
}