import {
    TranslationsList,
    setLocalizationConfigurations,
  } from "@mongez/localization";


  const translations: TranslationsList = {
    en: {
      aahome: "Home Page",
      contactUs: "Contact Us",
    },
    ar: {
      home: "الصفحة الرئيسية",
    },
  };

  
setLocalizationConfigurations({
    /**
     * Default locale code
     * 
     * @default en
     */
    defaultLocaleCode: "ar",
    /**
     * Fall back locale code
     * 
     * @default en
     */
    fallback: "en",
    /**
     * Set translations list
     */
    translations: translations,
  });