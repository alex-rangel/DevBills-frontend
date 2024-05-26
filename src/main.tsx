import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import { Home } from './pages/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home/>
  </React.StrictMode>,
);
