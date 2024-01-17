// i18n.ts
import i18next from 'i18next';
import xhrBackend from 'i18next-xhr-backend';

const initPromise = i18next
  .use(xhrBackend)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: 'src/locales/{{lng}}.json',
    },
  });

initPromise
  .then(() => {
    console.log('i18next initialized successfully');
  })
  .catch((error) => {
    console.error('i18next initialization failed:', error);
  });

export default i18next;
