import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './container/Container';


function App() {


  return (
    <Container title={"its a Component Composition Exercise!"}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Container>
  );
}

export default App
