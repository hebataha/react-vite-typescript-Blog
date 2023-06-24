import { PostListAtom } from "../../Atom/post-list-atom";
import styles from "./style.module.scss";

export default function Error() {
  const error = PostListAtom.use("error");

  if (!error) return null;

  return (
    <>
      <h1 className={styles.error}>OOPS! {error}</h1>
    </>
  );
}
