import './App.css'
import Hello from "./components/Hello"
import Message from "./components/Message"
import Welcome from './components/Welcome';
import AlertClock from './components/AlertClock';
import Counter from './components/Counter';
import { useState } from "react";


function App() {
  const [date, setDate] = useState("");

  function alert(){
      const currentDate = new Date;
      setDate(currentDate.toString());
  }

  return (
    <div> 
      <Message />
      <Welcome name={<strong>Suleyman!</strong>} />
      <AlertClock date={date} alert={alert} />
      {/* <h1>
        <Counter></Counter>
      </h1> */}
    </div>
  );
}

export default App
