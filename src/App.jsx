import './App.css'
import FocusableInput from './components/FocusableInput';
import Counter from './components/Counter';

function App() {


  return (
    <div className='App'> 
      <FocusableInput />
      <Counter initial={0} incrementAmount={1} decrementAmount={1}/>
    </div>
  );
}

export default App
