import React from 'react';
import ReactDOM from 'react-dom'; // Altere a importação para 'react-dom'
import './index.css';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Alunos from './Pages/Aluno/Alunos';
import App from './Pages/Pagina inicial/App';
import Professor from './Pages/Professores/Professor';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alunos" element={<Alunos />} /> 
        <Route path="/professor" element={<Professor />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();