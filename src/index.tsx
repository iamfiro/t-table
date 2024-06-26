import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.scss';
import App from './App';

import './locales/il8n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
