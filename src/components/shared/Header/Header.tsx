import React from "react";
import styles from "./style.module.scss";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
const Header: React.FC = () => {
  return (
  
    <div className={styles.header}>
       
      <div className={styles.logo}>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/home"> {trans("home")}</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/singlePosts/:id">Posts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/policy-Privacy">Privacy and policy</Link>
          </li>
          <button>AR</button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
