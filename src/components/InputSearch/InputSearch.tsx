import React from "react";
import { trans } from "@mongez/localization";
import "../../../../vite-project/src/config/localization"
import styles from "./style.module.scss";

const InputSearch: React.FC = () => {
  return (
    <>
      <div className={styles.InputSearch}>
        <form>
          <input type="text" placeholder={trans("typeToSearch") } />
        </form>
      </div>
    </>
  );
};
export default InputSearch;
