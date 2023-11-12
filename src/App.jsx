import './App.css'
import Colors from './components/Colors';
import TodoList from './components/TodoList';

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
      <TodoList />
    </div>
  );
}

export default App
