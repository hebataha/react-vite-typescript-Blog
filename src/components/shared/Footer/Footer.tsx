import React, { useContext, useState } from "react";
import { trans } from "@mongez/localization";
import "../../../config/localization"
import styles from "./style.module.scss";
import { Link } from "@mongez/react-router";
import Dropdown from "../../Dropdown/Dropdown";
import { ContextDropdown } from "../../../Store/context/ContextDropdown/ContextDropdown";
import DropdownTest from "../../DropdownTest/DropdownTest";
import { useAtom } from "@mongez/react-atom";
import { currencyAtom } from "../../../Atom/CurrencyAtom/currencyAtom";

const Footer: React.FC = () => {
  const [selectValue, setSelectValue]= useState("")
  const [data, setData]= useState("")
  const ctx = useContext(ContextDropdown)
  const currency = currencyAtom.use();
  function getDropValue(e) {
    // setSelectValue(e.target.value);
     ctx.setInputValue(e.target.value)
    
  }

  function getProps(data){
    setData(data)
    ("dataaaaaaaa" , setData)
  }
  return (
    <div className={styles.footer}>
      <ul className="container">
        <div className={styles.logo}></div>
        
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
      <DropdownTest getDropValue={getDropValue} ctxValue={ctx.inputValue} getProps={getProps}/>
     <p>You're using our application in {currency} Currency.</p> 
      </ul>
    </div>
  );
};
export default Footer;
