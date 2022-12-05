import React from 'react';

import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CharactersProvider } from 'context/CharactersContext';
import { ComicsProvider } from 'context/ComicsContext';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CharactersProvider>
      <ComicsProvider>
        <App />
      </ComicsProvider>
    </CharactersProvider>
  </React.StrictMode>,
);
