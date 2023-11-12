import { useEffect, useRef, useState } from "react";

export default function Counter(props) {
  const count = useRef("initialValue");
  const [currentCount, setCurrentCount] = useState(props.initial);

  useEffect(() => {
    const direction = currentCount > count.current ? "up" : "down";
    if (direction !== count.current) {
      console.log(`Count : ${direction}`);
      count.current = currentCount;
    }
  }, [currentCount]);

  function CounterDisplay(props) {
    return (
      <p>
        {props.count}
      </p>
    );
  }

  return (
    <>
      <h1><CounterDisplay count={currentCount} /></h1>
      <button onClick={() => setCurrentCount(currentCount + props.incrementAmount)}>
        Increment
      </button>
      <button onClick={() => setCurrentCount(currentCount - props.decrementAmount)}>
        Decrement
      </button>
      <button onClick={() => setCurrentCount(props.initial)}>Reset</button>
    </>
  );
}
