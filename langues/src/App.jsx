import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ar:{
        translation:{
          "Welcome to React":"marhaba"
        }

      }
    },
    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

const App = () => {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}



export default App;
