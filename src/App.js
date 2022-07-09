import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createBrowserHistory  } from 'history';
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

  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Routes>
          <Route path="/portfolio" element={<NavBar/>}>
            <Route path="/portfolio" element={<AboutMe/>}/>
            <Route path="/portfolio/projects" element={<Projects/>}/>
            <Route path="/portfolio/skills" element={<Skills/>}/>
            <Route path="/portfolio/experience" element={<Experience/>}/>
            <Route path="/portfolio/education" element={<Education/>}/>
            <Route path="/portfolio/contact" element={<Contact/>}/>
            <Route path="/portfolio/thankyou" element={<ThankYou/>}/>
          </Route>  
      </Routes>
    </BrowserRouter>
  );
}