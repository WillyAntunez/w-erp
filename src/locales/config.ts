import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const defaultNS = 'common';

import common_en from './en/common.t.json';
import common_es from './es/common.t.json';

// read default language from vite .env
const defaultLanguage = import.meta.env.VITE_DEFAULT_LANGUAGE;

i18next.use(initReactI18next).init({
    lng: defaultLanguage, // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            [defaultNS]: common_en,
        },
        es: {
            [defaultNS]: common_es,
        },
    },
    interpolation: {
        format: function (value, format, lng) {
            if (format === 'uppercase') return value.toUpperCase();
            if (format === 'lowercase') return value.toLowerCase();
            if (format === 'capitalize')
                return `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`;
            return value;
        },
    },
    defaultNS,
});

export default i18next;
