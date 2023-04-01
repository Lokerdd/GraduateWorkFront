import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
}

export default App;
