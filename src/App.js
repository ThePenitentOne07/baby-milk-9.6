// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import CSSBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <BrowserRouter>
      <CSSBaseline />
      <Router />
    </BrowserRouter>
  );
}

export default App;
