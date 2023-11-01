import './App.css'
import Counter from './components/Counter';
import { useState } from "react";


function App() {

  const amount = 2;

  return (
    <div className='App'> 
        <Counter 
        initial={5} 
        incrementAmount={amount}
        decrementAmount={amount}
         />
    </div>
  );
}

export default App
