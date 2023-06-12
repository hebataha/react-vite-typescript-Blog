import { setAppConfigurations } from "@mongez/react";
import { setRouterConfigurations } from "@mongez/react-router";

setAppConfigurations({
    localization: {
      defaultLocaleCode: "ar",
      locales: {
        en: {
          direction: "ltr",
          name: "English",
        },
        ar: {
          direction: "rtl",
          name: "Arabic",
        },
      },
    },
  });
  
  setRouterConfigurations({
    localization: {
      changeLanguageReloadMode: "soft",
      defaultLocaleCode: "en",
      localeCodes: ["en", "ar"],
    },
  });