import styles from "./style.module.scss";

type ErrorProps = {
  error : "string"
}

export default function Error({ error }:ErrorProps) {

  return (
    <>
      <h1 className={styles.error}>
        OOPS! {error}</h1>
    </>
  );
}
