import styles from "./style.module.scss";

type Props = {
  loading: boolean
};

export default function Loading({loading}:Props) {

  if(!loading) return null;
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
