import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock';
import { LanguageProvider } from './contexts/LanguageContext';


function App() {

  //If we delete LanguageProvider we lost all access LanguageContext so useContext too. It doesnt work without it.

  return (
    <div>
      <Clock/>
    </div>
  );
}

export default App
