import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import { Home } from './pages/home';
import { AppProvider } from './hooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <GlobalStyles/>
    <Home/>
  </AppProvider>,
);
