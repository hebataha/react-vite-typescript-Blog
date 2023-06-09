// src/routes.ts
import router from "@mongez/react-router";
import HomePage from './App';
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import PolicyAndPrivacy from "./components/PolicyAndPrivacy/PolicyAndPrivacy"
import NotFound from "./components/NotFound/NotFound"

router.add('/', HomePage);
router.add('/home', HomePage);
router.add('/about', About);
router.add('/contact', Contact);
router.add('/policy-Privacy', PolicyAndPrivacy);