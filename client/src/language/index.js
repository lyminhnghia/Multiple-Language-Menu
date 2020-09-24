import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { LangConstant } from "../const";
import enLang from "./translations/en.lang";
import viLang from "./translations/vi.lang";

i18next.use(initReactI18next).init(
  {
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: LangConstant.DEFAULT_LANG,
    resources: {
      en: enLang,
      vi: viLang,
    },
    defaultNS: "common",
  },
  (err, t) => {
    if (err) {
      return console.error(err);
    }
  },
);

export default i18next;
