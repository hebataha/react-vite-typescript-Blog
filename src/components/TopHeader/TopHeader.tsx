import { postAtom } from "../../Atom/ToggleButton";
import styles from "./style.module.scss";

export default function TopHeader() {
  function updateSidebar() {
    postAtom.change("displaySidebar", !postAtom.get("displaySidebar"));
  }
  function updatePost() {
    postAtom.change("displayPost", !postAtom.get("displayPost"));
  }

  return (
    <>
      <div className={styles.topHeader}>
        <button onClick={updateSidebar}>Display Slider</button>
        <button onClick={updatePost}> Display Posts</button>
      </div>
    </>
  );
}
