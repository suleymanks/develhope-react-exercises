import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock';
import { LanguageProvider } from './contexts/LanguageContext';


function App() {

  return (
    <LanguageProvider>
      <Clock/>
    </LanguageProvider>
  );
}

export default App
