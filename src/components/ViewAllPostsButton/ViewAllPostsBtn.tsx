import styles from "./style.module.scss";
import { trans } from "@mongez/localization";
import "../../../../vite-project/src/config/localization"
const ViewAllPostsBtn = () => {
  return <button className={styles.button}>{trans("ViewAllPosts")}</button>;
};

export default ViewAllPostsBtn;
