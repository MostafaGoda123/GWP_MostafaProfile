import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { MobileHandlerProvider } from './context/MobileHandler';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MobileHandlerProvider>
        <App />
      </MobileHandlerProvider>
    </HashRouter>
  </React.StrictMode>
);

