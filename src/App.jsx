import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useCounter from './hooks/useCounter';


function App() {
  const {count, reset, increment, decrement} = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App
