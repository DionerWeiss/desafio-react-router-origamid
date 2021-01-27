
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/Header';
import Produtos from './components/Produtos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">

          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contatos" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
