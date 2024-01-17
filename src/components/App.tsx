// App.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Check if translations are loaded
  if (i18n.isInitialized) {
    return (
      <div className="App">
        <h1>{t('greeting')}</h1>
        <button onClick={() => changeLanguage('en')} data-language="en">
          {t('changeLanguage')} English
        </button>
        <button onClick={() => changeLanguage('es')} data-language="es">
          {t('changeLanguage')} Español
        </button>
        <p>{t('welcome')}</p>
      </div>
    );
  } else {
    // Translations are not loaded yet, show a loading message or spinner
    return <p>Loading translations...</p>;
  }
}

export default App;
