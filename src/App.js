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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:userInput" element={<WordOrNumber/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
