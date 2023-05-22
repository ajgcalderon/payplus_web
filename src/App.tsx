import React from 'react';
import logo from './logo.svg';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import {} from 'bootstrap'
import Login from './Views/Login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
