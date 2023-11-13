import './App.css'
import Welcome from './components/Welcome';

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
      <Welcome />
    </div>
  );
}

export default App
