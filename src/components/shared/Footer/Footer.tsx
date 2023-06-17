import React, { useContext } from "react";
import { trans } from "@mongez/localization";
import "../../../config/localization"
import styles from "./style.module.scss";
import { Link } from "@mongez/react-router";
import Dropdown from "../../Dropdown/Dropdown";
import { ContextDropdown } from "../../../Store/context/ContextDropdown/ContextDropdown";

const Footer: React.FC = () => {
  const ctx = useContext(ContextDropdown)
  return (
    <div className={styles.footer}>
      <ul className="container">
        <div className={styles.logo}>{ctx.inputValue}</div>
        
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
          <Dropdown/>
      </ul>
    </div>
  );
};
export default Footer;
