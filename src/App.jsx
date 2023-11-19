import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useCounter from './hooks/useCounter';


function App() {
  const {increment, count, decrement, reset} = useCounter();

  return (
    <div>
      <h2>Custom Hook -useCounter-</h2>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App
