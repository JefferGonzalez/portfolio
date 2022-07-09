import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import './index.css';

export default function App() {

  return (
    <BrowserRouter basename='/portfolio'>
      <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/thankyou" element={<ThankYou/>}/>
          </Route>  
      </Routes>
    </BrowserRouter>
  );
}