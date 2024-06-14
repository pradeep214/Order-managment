import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ChakraProviderWrapper from './ChakraProviderWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProviderWrapper>
        <App />
      </ChakraProviderWrapper>
    </Router>
  </React.StrictMode>,
)
