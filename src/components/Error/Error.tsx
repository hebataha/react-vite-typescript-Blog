import styles from "./style.module.scss";

type Props = {
  catchError : "string"
}

export default function Error({ catchError }:Props) {
  if (!catchError) return null;
  return (
    <>
      <h1 className={styles.error}>
        OOPS! {catchError}</h1>
    </>
  );
}
