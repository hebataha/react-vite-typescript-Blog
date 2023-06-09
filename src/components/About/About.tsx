import React from "react";
import styles from "./style.module.scss";
import Helmet from '@mongez/react-helmet';

const About: React.FC = () => {
  return (
    <>
     <Helmet appendAppName={false} title="About Us" description="Short description about my store" keywords={['online', 'store', 'electronics']} />
      <div className={styles.about}>
        <h1>About</h1>
      </div>
    </>
  );
};
export default About;
