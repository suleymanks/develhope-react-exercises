import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import GitHubUser from './components/GitHubUser';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link style={{color:"white"}} to="/">Welcome & </Link>
        <Link style={{color:"white"}} to="/counter"> Counter & </Link>
        <Link style={{color:"white"}} to="/users/suleymanks"> GitHub</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Suleyman" />} />
        <Route path="/counter" element={<Counter initial={3} incrementAmount={3} decrementAmount={5} />} />
        <Route path="/users/:username" element={<GitHubUser username="suleymanks" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
