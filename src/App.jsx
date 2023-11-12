import './App.css'
import Colors from './components/Colors';

function App() {

  const colorsArray = [
    {
      name: "red",
      id: 0,
    },
    {
      name: "pink",
      id: 1,
    },
    {
      name: "yellow",
      id: 2,
    },
    {
      name: "blue",
      id: 3,
    },

    ]

  return (
    <div className='App'> 
      <Colors items={colorsArray}/>
    </div>
  );
}

export default App
