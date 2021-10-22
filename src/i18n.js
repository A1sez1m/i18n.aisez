import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const translationEn= {
  "m": 'Home',
  "n":'About Us',
  "О  нас":'Our {{g}} Courses',
  "l":'IT company',
  "h":'News',
  "j":'Photo gallery'
  }
const translationRu = {
  "m": "Главная",
  "О  нас":'О {{g}} нас',
  "b":'Наши курсы',
  "l":'IT компания',
  "h":'Новости',
  "j":"Фотогалерея"
}


i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    debug: true,

    resources: {
      en: {
        translation: translationEn
          },
      ru: {
        translation:  translationRu
        }
      },

       lng: "en", // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;