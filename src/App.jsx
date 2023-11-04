import './App.css'
import Counter from './components/Counter';
import Clock from './components/Clock';
import MouseClicker from './components/MouseClicker';
import InteractiveWelcome from './components/InteractiveWelcome';

function App() {

  const amount = 2;

  return (
    <div className='App'> 
        <InteractiveWelcome />
    </div>
  );
}

export default App
