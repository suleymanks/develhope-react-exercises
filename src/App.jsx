import './App.css'
import Hello from "./components/Hello"
import Message from "./components/Message"
import Welcome from './components/Welcome';
import AlertClock from './components/AlertClock';
import Counter from './components/Counter';

function App() {


  //27-EVENTS EXERCISE
  return (
    <div> 
      <Message />
      <Welcome name={<strong>Suleyman!</strong>} />
      <AlertClock />
      <h1>
        <Counter />
      </h1>
    </div>
  );
}

export default App
