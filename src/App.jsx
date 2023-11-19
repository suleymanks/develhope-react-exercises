import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome name={"Suleyman"} />} />
        <Route path='/counter' element={<Counter initial={3} incrementAmount={3} decrementAmount={5}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
