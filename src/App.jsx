import './App.css'
import Counter from './components/Counter';
import Clock from './components/Clock';
import MouseClicker from './components/MouseClicker';

function App() {

  const amount = 2;

  return (
    <div className='App'> 
        <Clock />
        <MouseClicker name="one" />
    </div>
  );
}

export default App
