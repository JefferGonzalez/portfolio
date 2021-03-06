import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Routers from './routers';

import './index.css';

export default function App() {

  return (
    <BrowserRouter basename='/portfolio'>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          {
            Routers.map((route, index) => (
              <Route key={index+1} path={route.path} element={route.element} />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}