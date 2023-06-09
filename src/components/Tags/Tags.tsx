import React from "react";
import styles from "./style.module.scss";

const Tags: React.FC = () => {
  return (
    <>
      <div className={styles.Tags}>
        <div className={styles.TagsTitle}>
          <h3>TAGS</h3>
        </div>

        <div className={styles.TagsItems}>
          <ul>
            <li>Lifestyle</li>
            <li>Nature</li>
            <li>Medical</li>
            <li>Life</li>
            <li>React</li>
            <li>Meta</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Tags;
