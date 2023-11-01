import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    /*EXERCISE REACT 29-EVENTS
    Using a function as the parameter is a best practice that helps ensure your state updates are always based on 
    the latest and most accurate state value, making your code more reliable and avoiding potential issues.*/

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </>
    )
}