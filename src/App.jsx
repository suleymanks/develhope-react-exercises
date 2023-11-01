import './App.css'
import Hello from "./components/Hello"
import Message from "./components/Message"
import Welcome from './components/Welcome';

function App() {

  return (
    <div> 
      <Message />
      <Welcome name={<strong>John!</strong>} />
    </div>
  );
}

export default App
