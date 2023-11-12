import { useEffect, useState, useRef } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.initial);
  const directionRef = useRef(null);
  

  useEffect(() => {
    // Check if the count increased, decreased, or remained the same
    if (count > directionRef.current) {
      directionRef.current = "up";
    } else if (count < directionRef.current) {
      directionRef.current = "down";
    }

    // Print the value of the ref only when it's different from the previous value
    if (directionRef.current !== null) {
      console.log(directionRef.current);
    }
  }, [count]);

  function CounterDisplay(props) {
    return <p>{props.count}</p>;
  }

  return (
    <>
      <h1>
        <CounterDisplay count={count} />
      </h1>
      <button onClick={() => setCount(count + props.incrementAmount)}>
        Increment
      </button>
      <button onClick={() => setCount(count - props.decrementAmount)}>
        Decrement
      </button>
      <button onClick={() => setCount(props.initial)}>Reset</button>
    </>
  );
}
