import React from "react";
import styles from "./style.module.scss";
import { setLocalizationConfigurations, trans } from "@mongez/localization";
import "../../../config/localization"
import { Link, changeLocaleCode } from "@mongez/react-router";
import { current } from "@mongez/react";


const Header: React.FC = () => {

  const changeLang = () => {
    const localeCode = current("localeCode" ) === "en" ? "ar" : "en";
    changeLocaleCode(localeCode);
  }
  return (
  
    <div className={styles.header}>
       
      <div className={styles.logo}>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/home"> 
            {trans("home")}
             </Link>
          </li>
          <li>
            <Link to="/about">  {trans("about")}</Link>
          </li>
          <li>
            <Link to="/singlePosts/:id">  {trans("posts")}</Link>
          </li>
          <li>
            <Link to="/contact">
           { trans("contactUs")}
            </Link>
          </li>
          <li>
            <Link to="/policy-Privacy">  {trans("PrivacyPolicy")}</Link>
          </li>
          <button onClick={changeLang}>AR</button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
