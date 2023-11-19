import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from './components/FilteredList';

function App() {
  const dataList = [
    { id: 1, name: 'Suleyman', age: 25 },
    { id: 2, name: 'Jale', age: 18 },
    { id: 3, name: 'Burak', age: 30 },
    { id: 4, name: 'Kazim', age: 17 },
    
  ];

  return (
    <div>
      <h1>FilteredList Example</h1>
      <FilteredList list={dataList} />
    </div>
  );
}

export default App
