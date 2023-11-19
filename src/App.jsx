import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Notfound from './components/Notfound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GitHubUser from './components/GitHubUser';
import GitHubUsers from './components/GitHubUsers'

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"users"}>Go userlist</Link>
      <Link to={"/"}>Go homepage</Link>
      <Routes>
        <Route path="/" element={<Welcome name="YourName" />} />
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

const Users = () => {
  return (
    <>
      <h2>GitHub Users</h2>
      <Link to="list">User List</Link>

      <Routes>
        <Route path="list" element={<GitHubUsers />} />
        <Route path=":username" element={<GitHubUser />} />
      </Routes>
    </>
  );
};

export default App;
