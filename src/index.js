import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#3f3f3f',
    textAlign: 'center',
    padding: '10px',
    fontSize: '12px',
    color: '#fff',
  };
  const linkStyle = {
    color: '#fff', 
  };
  const Footer = () => (
    <div style={footerStyle}>
      Hazırlayan: <a href="https://github.com/MehmetFarukAkbulut" style={linkStyle}>Mehmet Faruk Akbulut</a>
    </div>
  );
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>);