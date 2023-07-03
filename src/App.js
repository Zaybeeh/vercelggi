import { Routes, Route } from "react-router-dom";
import React, { Component }  from 'react';
import Home from "./Pages/home.js";
import Team from "./Pages/team.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </div>
  );
}

export default App;
