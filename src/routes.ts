// src/routes.ts
import router from "@mongez/react-router";
import HomePage from "./App";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PolicyAndPrivacy from "./components/PolicyAndPrivacy/PolicyAndPrivacy";
import NotFound from "./components/NotFound/NotFound";
import BaseLayout from "./components/BaseLayout";
import SinglePost from "./components/SinglePost/SinglePost";

// router.add("/", HomePage);
// router.add("/home", HomePage);
// router.add("/about", About);
// router.add("/contact", Contact);
// router.add("/policy-Privacy", PolicyAndPrivacy);

router.partOf(BaseLayout, [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "contact",
    component: Contact,
  },
  {
    path: "policy-Privacy",
    component: PolicyAndPrivacy,
  },
  {
    path: "singlePosts/:id",
    component: SinglePost,
  },
]);


