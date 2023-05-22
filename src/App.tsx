import React from 'react';
import logo from './logo.svg';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import {} from 'bootstrap'
import Login from './Views/Login/login';
import Administration from './Views/Administration/administration';
import Sucursal from './Views/Sucursal/sucursal'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/administration' element={<Administration />} />
          <Route path='/sucursal' element={<Sucursal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
