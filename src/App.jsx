import './App.css'
import Counter from './components/Counter';
import { useState } from "react";


function App() {

  return (
    <div className='App'> 
        <Counter initial={5} incrementAmount={2} />
    </div>
  );
}

export default App
