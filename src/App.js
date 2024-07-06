import React from 'react';
import './App.css';
import Navbars from './Components/Navbar';
import MainRoute from './Pages/MainRoute/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbars />
      <MainRoute />
    </div>
  );
}

export default App;
