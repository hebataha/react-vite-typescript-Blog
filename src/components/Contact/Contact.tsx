import React from "react";
import styles from "./style.module.scss";
import Helmet from "@mongez/react-helmet";
// import ContactForm from "../ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet
        appendAppName={false}
        title="Contact Us"
        description="Short description about my store"
        keywords={["online", "store", "electronics"]}
      />
      <div className={styles.Contact}>
        {/* <ContactForm/> */}
      </div>
    </>
  );
};
export default Contact;
