import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from './Pages/Login/Login';
import App from './Pages/Pagina inicial/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
