import React from "react";
import styles from "./style.module.scss";

const InputSearch: React.FC = () => {
  return (
    <>
      <div className={styles.InputSearch}>
        <form>
          <input type="text" placeholder="type to search" />
        </form>
      </div>
    </>
  );
};
export default InputSearch;
