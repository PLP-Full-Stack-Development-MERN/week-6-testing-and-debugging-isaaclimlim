import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Homepage.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;