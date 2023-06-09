import React from "react";
import styles from "./style.module.scss";
import Helmet from "@mongez/react-helmet";

const PolicyAndPrivacy: React.FC = () => {
  return (
    <>
      <Helmet
        appendAppName={false}
        title="PolicyAndPrivacy"
        description="Short description about my store"
        keywords={["online", "store", "electronics"]}
      />

      <div className={styles.about}>
        <h1>PolicyAndPrivacy</h1>
      </div>
    </>
  );
};
export default PolicyAndPrivacy;
