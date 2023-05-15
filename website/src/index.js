import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutThisSite from './pages/AboutThisSite';
import Page404 from './pages/Page404';
import Resume from './pages/Resume.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='aboutthissite' element={<AboutThisSite />} />
      <Route path='resume' element={ <Resume /> } />
      <Route path='*' element={<Page404 /> } />
    </Routes>
  </BrowserRouter>
  

);

