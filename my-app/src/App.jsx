import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import MyCard from './components/Card'
import coaches from './sample.json';
import Render from './components/Render';
import Registration from './components/Registration';
import DummyJson from './components/DummyJson';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Registration/>} />
        <Route path='/render' element={<Render list={coaches}/>} />
        <Route path='/dummyJson' element={<DummyJson/>} />
      </Routes>
    </Router>
  );
}

export default App
