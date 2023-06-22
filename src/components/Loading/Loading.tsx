import styles from "./style.module.scss";
export default function Loading({loading}) {

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
