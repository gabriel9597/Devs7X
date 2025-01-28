import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio/inicio';
import InicioEng from './Components/Inicio/inicioEng';
import Servicos from './Components/services/services';
import ServicesEng from './Components/services/servicesEng';

import Contato from './Components/contact/contact';
import ContatoEng from './Components/contact/contactEng';
import ScrollToTop from './Components/scrollToTop';

import ReactGA from 'react-ga4'
function App() {
  useEffect(()=> {
    ReactGA.initialize("G-YGHPW4N0FF");

    ReactGA.send({hitType: "pageview", page: window.location.pathname, title: "App.jsx"})
  }, [])
  return <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/Home-EngVersion' element={<InicioEng/>} />
        <Route path='/Servicos' element={<Servicos/>} />
        <Route path='/Services-EngVersion' element={<ServicesEng/>} />
        <Route path='/Contato' element={<Contato/>} />
        <Route path='/Contact-EngVersion' element={<ContatoEng/>} />
      </Routes>
    </Router>
}

export default App;
