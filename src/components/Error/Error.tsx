import styles from "./style.module.scss";

type ErrorProps = {
  error : "string"
}

export default function Error({ catchError }:ErrorProps) {
  if (!catchError) return null;
  return (
    <>
      <h1 className={styles.error}>
        OOPS! {catchError}</h1>
    </>
  );
}
