import {useEffect, useRef, useState} from "react";

export default function Counter(props) {
    const count = useRef("initialValue")
    const [currCount, setCurrCount] = useState(props.initial);

    useEffect(()=> {
        const direction = currCount > count.current ? "up" : "down";
        if(direction !== count.current) {
            console.log(direction);
            count.current=currCount;
        }
    },[currCount])

    function CounterDisplay(props) {
        const displayStyle = {
            fontSize: "39px",
            fontWeight: "bold",
            color: count >= 0 ? "green" : "red",
          };
        return(
            <p style={displayStyle}>
                {props.count}
            </p>
        )
    }


    return (
        <div>
            <h2>COUNTER COMPONENT</h2>
            <h1><CounterDisplay count={currCount} /></h1>
            <button onClick={()=> setCurrCount(currCount+ props.incrementAmount)}>Increment</button>
            <button onClick={()=> setCurrCount(currCount- props.decrementAmount)}>Decrement</button>
            <button onClick={()=> setCurrCount(props.initial)}>Reset</button>
        </div>
    )
}