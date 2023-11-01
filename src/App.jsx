import './App.css'
import Hello from "./components/Hello"
import Message from "./components/Message"
import Welcome from './components/Welcome';
import AlertClock from './components/AlertClock';

function App() {



  return (
    <h1> 
      <Message />
      <Welcome name={<strong>Suleyman!</strong>} />
      <AlertClock />
    </h1>
  );
}

export default App
