// src/config/localization.ts
import {
  TranslationsList,
  extend,
  groupedTranslations,
} from "@mongez/localization";

const translations: TranslationsList = {
  en: {
    home: "Home ",
    contactUs: "Contact Us",
    about: "About",
    posts: "posts",
    PrivacyPolicy: "Privacy and Policy",
    ViewAllPosts: "View All Posts",
    typeToSearch: "type to search",
    recentPosts: "recent posts",
    categories: "categories",
    tags: "tags",
    admin: "admin",
    comments: "comments",
    facebook: "facebook",
    twitter: "twitter",
  },
  ar: {
    home: "الصفحة الرئيسية",
    contactUs: "تواصل معنا",
    about: "عنا",
    posts: "المنشورات",
    PrivacyPolicy: "السياسة والخصوصية",
    ViewAllPosts: "شاهد كل المنشورات",
    typeToSearch: "إبحث هنا",
    recentPosts: "المنشورات الحديثة",
    categories: "التصنيفات",
    tags: "الكلمات المفتاحية",
    admin: "الادمن",
    comments: "التعليقات",
    facebook: "فيس بوك",
    twitter: "تويتر",
  },
};

// extend("en",translations.en)
// extend("ar",translations.ar)


groupedTranslations({
  home:{
    en:"Home",
    ar:"الرئيسية"
  },
  about:{
    en:"About",
  }
})