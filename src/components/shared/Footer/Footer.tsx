import React from "react";
import styles from "./style.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <ul className="container">
        <div className={styles.logo}>LOGO</div>

        <li>Home</li>
        <li>About</li>
        <li>Recent Posts</li>
        <li>Contact</li>
        <li>Privacy and policy</li>
      </ul>
    </div>
  );
};
export default Footer;
