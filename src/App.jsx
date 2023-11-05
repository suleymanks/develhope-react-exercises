import './App.css'
import Login from './components/Login';

function App() {

  function onLogin() {
    console.log("onlogin runs")
}


  return (
    <div className='App'> 
        <Login onLogin={onLogin}/>
    </div>
  );
}

export default App
