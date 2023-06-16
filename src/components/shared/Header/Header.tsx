import React, { useState } from "react";
import styles from "./style.module.scss";
import { setLocalizationConfigurations, trans } from "@mongez/localization";
import "../../../config/localization"
import { Link, changeLocaleCode } from "@mongez/react-router";
import { current } from "@mongez/react";
import Dropdown from "../../Dropdown/Dropdown";


const Header: React.FC = ({getPara}) => {
const [lang, setLang] = useState(true)
const [dataChild , setDataChild] = useState("");
  const changeLang = () => {
    const localeCode = current("localeCode" ) === "en" ? "ar" : "en";
    changeLocaleCode(localeCode);
    setLang((prevState)=> !prevState)

    
  }
  const  valueDrop =  (para) =>{
    setDataChild(para)
    // console.log(dataChild)
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
          
          <Dropdown valueDrop={valueDrop}/>
          <button onClick={changeLang}>{lang ? "en" : "ar"}</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;