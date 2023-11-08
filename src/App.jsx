import './App.css'
import Login from './components/Login';
import UncontrolledLogin from './components/UncontrolledLogin';

function App() {

  function onLogin() {
    console.log("onlogin runs")
  }

  return (
    <div className='App'> 
        <UncontrolledLogin onLogin={onLogin}/>
    </div>
  );
}

export default App
