import React from 'react';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Historia from './pages/historia/Historia';
import Contato from './pages/contato/Contato';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './pages/perfil/Perfil';
import Servico from './pages/servico/Servico';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route exact path='/' element={<Home />} />
            <Route path='/historia' element={<Historia />}/>
            <Route path='/perfil' element={<Perfil />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/servico' element={<Servico />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
