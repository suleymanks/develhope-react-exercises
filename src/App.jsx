import './App.css'
import Hello from "./components/Hello"
import Message from "./components/Message"
import Welcome from './components/Welcome';

function App() {

  return (
    <h1> 
      <Message />
      <Welcome name={<strong>Suleyman!</strong>} />
    </h1>
  );
}

export default App
