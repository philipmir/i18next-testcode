// index.ts
import i18next from 'i18next';
import xhrBackend from 'i18next-xhr-backend';

// Initialize i18next
i18next
    .use(xhrBackend)
    .init({
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
    })
    .then(() => {
        // You can use the translation function now
        const greeting = i18next.t('greeting');
        const farewell = i18next.t('farewell');

        console.log(greeting); // Output: Hello, World!
        console.log(farewell); // Output: Goodbye!
    })
    .catch((err) => console.error(err));
