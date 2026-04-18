import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

export const boot = () => {
  const container = document.getElementById('root');
  if (container) {
    createRoot(container).render(
      <StrictMode>
        <Provider store={store}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Provider>
      </StrictMode>
    );
  }
};
