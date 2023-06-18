import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import { setLocalizationConfigurations, trans } from "@mongez/localization";
import "../../../config/localization";
import { Link, changeLocaleCode } from "@mongez/react-router";
import { current } from "@mongez/react";
import DropdownTest from "../../DropdownTest/DropdownTest";
import { ContextDropdown } from "../../../Store/context/ContextDropdown/ContextDropdown";

const Header: React.FC = ({ getPara }) => {
  const [lang, setLang] = useState(true);
  const [selectValue, setSelectValue]= useState("")
  const ctx = useContext(ContextDropdown)

  const changeLang = () => {
    const localeCode = current("localeCode") === "en" ? "ar" : "en";
    changeLocaleCode(localeCode);
    setLang((prevState) => !prevState);
  };


  function getDropValue(e) {
    // setSelectValue(e.target.value);
     ctx.setInputValue(e.target.value)
    
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>LOGO </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">{trans("home")}</Link>
          </li>
          <li>
            <Link to="/about"> {trans("about")}</Link>
          </li>
          <li>
            <Link to="/singlePosts/:id"> {trans("posts")}</Link>
          </li>
          <li>
            <Link to="/contact">{trans("contactUs")}</Link>
          </li>
          <li>
            <Link to="/policy-Privacy"> {trans("PrivacyPolicy")}</Link>
          </li>

          <DropdownTest getDropValue={getDropValue}/>
          <button onClick={changeLang}>{lang ? "en" : "ar"}</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
