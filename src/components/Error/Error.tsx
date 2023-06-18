import styles from "./style.module.scss";

export default function Error({ error }) {
  return (
    <>
      <h1 className={styles.error}>
        OPPS! {error}</h1>
    </>
  );
}
