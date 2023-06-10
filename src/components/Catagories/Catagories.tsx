import React from "react";
import { trans } from "@mongez/localization";
import "../../../../vite-project/src/config/localization"
import styles from "./style.module.scss";

const Catagories: React.FC = () => {
  return (
    <>
      <div className={styles.Catagories}>
        <div className={styles.CatagoriesTitle}>
          <h3>{trans("categories")}</h3>
        </div>

        <div className={styles.CatagoriesItems}>
          <ul>
            <li>- Nature Lifestyle</li>
            <li>- Nature Lifestyle</li>
            <li>- Nature Lifestyle</li>
            <li>- Nature Lifestyle</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Catagories;
