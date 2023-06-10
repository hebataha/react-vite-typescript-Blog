import React from "react";
import { trans } from "@mongez/localization";
import "../../../config/localization"
import styles from "./style.module.scss";
import { Link } from "@mongez/react-router";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <ul className="container">
        <div className={styles.logo}>LOGO</div>
        
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
      </ul>
    </div>
  );
};
export default Footer;
