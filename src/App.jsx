import './App.css'
import Colors from './components/Colors';

function App() {

  const colorsArray = ["red", "pink", "yellow", "blue"]

  return (
    <div className='App'> 
      <Colors items={colorsArray}/>
    </div>
  );
}

export default App
