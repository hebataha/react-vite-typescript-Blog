import { PostListAtom } from "../../Atom/post-list-atom";
import styles from "./style.module.scss";

export default function Loading() {
  const loading = PostListAtom.use("loading");

  if (!loading) return null;

  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.loader} ${styles.loader_2}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
