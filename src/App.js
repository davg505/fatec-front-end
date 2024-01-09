// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import minhaImagem from './image/logoSite2.png'; // Importe a imagem

function App() {
  return (
    <div className="App">
       <div className="Red-bar">
       <img src={minhaImagem} alt="Minha Imagem" />
       </div>
       <div className="Red-bar-down"></div>
      <header>
        
      </header>
      <Header />
    </div>
  );
}

export default App;
