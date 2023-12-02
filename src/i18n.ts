// i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from "i18next-http-backend"
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

  i18next.use(initReactI18next)
  .use(backend)
  .init({
    lng: 'en',
    debug:true,
    fallbackLng: 'en',
    resources : {
      en:{
        translation:en
      },
       ar:{
        translation:ar
      }
    }
  });

export default i18next;
