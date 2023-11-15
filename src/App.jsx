import './App.css'
import './index.css'
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FocusableInput from './components/FocusableInput';
import UncontrolledLogin from './components/UncontrolledLogin';
import Login from './components/Login';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import Colors from './components/Colors';

function App() {

  function onLogin() {
    console.log("onlogin runs")
  }

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
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Welcome />
      <FocusableInput />
      <Counter initial={0} incrementAmount={1} decrementAmount={1}/>
      <Colors items={colorsArray}/>
      <UncontrolledLogin onLogin={onLogin}/>
      <Login onLogin={onLogin}/>
      <Clock />
      <TodoList />
    </div>
  );
}

export default App
