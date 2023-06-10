// src/config/localization.ts
import {
  TranslationsList,
  setLocalizationConfigurations,
} from "@mongez/localization";

  const translations: TranslationsList = {
  en: {
    home: "Home ",
    contactUs: "Contact Us",
    about: "About",
    posts: "posts",
    PrivacyPolicy: "Privacy and Policy",
    ViewAllPosts:"View All Posts",
    typeToSearch:"type to search",
    recentPosts:"recent posts",
    categories:"categories",
    tags:"tags",
    admin:"admin",
    comments:"comments",
    facebook:"facebook",
    twitter:"twitter",




  },
  ar: {
    home: "الصفحة الرئيسية",
    contactUs: "تواصل معنا",
    about: "عنا",
    posts: "المنشورات",
    PrivacyPolicy: "السياسة والخصوصية",
    ViewAllPosts:"شاهد كل المنشورات",
    typeToSearch:"إبحث هنا",
    recentPosts:"المنشورات الحديثة",
    categories:"التصنيفات",
    tags:"الكلمات المفتاحية",
    admin:"الادمن",
    comments:"التعليقات",
    facebook:"فيس بوك",
    twitter:"تويتر",





  },
};

setLocalizationConfigurations({
  /**
   * Default locale code
   * 
   * @default en
   */
  defaultLocaleCode: "en",
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