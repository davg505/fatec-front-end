// App.js
import React from 'react';
import './App.css';
import { Header } from './components/Header';
import logo from './image/logoSite2.png';


function App() {

  return (
    <div className="App">
       <div className="Red-bar">
       <img src={logo} alt="Minha Imagem" />
       </div>
       <div className="Red-bar-down"></div>
        <Header />

    </div>
  );
}

export default App;
