import './App.css';
import React from 'react';
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:wordOrNumber" element={<WordOrNumber/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
