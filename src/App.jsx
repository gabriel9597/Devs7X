import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio/inicio';
import Servicos from './Components/services/services';
import Contato from './Components/contact/contact';
import ScrollToTop from './Components/scrollToTop';

function App() {
  return <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/Servicos' element={<Servicos/>} />
        <Route path='/Contato' element={<Contato/>} />
      </Routes>
    </Router>
}

export default App;
