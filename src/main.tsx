
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './components/App';
import i18n from './i18n';
import './index.css';

const rootElement = document.getElementById('root');

const renderApp = async () => {
  // Wait for translations to be loaded
  await i18n.init();

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
};

// Call the renderApp function
renderApp();

// For hot module replacement
if (import.meta.hot) {
  import.meta.hot.accept(['./components/App', './i18n'], () => {
    renderApp();
  });
}
