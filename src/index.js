import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <div className="container flex-box">
        <nav>
          <img className='w-100' src={require("./assets/img/nav.png")} alt="" />
        </nav>
        <App />
      </div>
    </>
  </React.StrictMode>
);

