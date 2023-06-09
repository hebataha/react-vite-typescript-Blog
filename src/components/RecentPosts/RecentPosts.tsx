import React from "react";
import styles from "./style.module.scss";

const RecentPosts: React.FC = () => {
  return (
    <>
      <div className={styles.RecentPosts}>
        <div className={styles.recentTitle}>
          <h3>RECENT POSTS</h3>
        </div>

        <div className={styles.recentBody}>
          <h3>Vestibulum id turpis porttitor sapien facilisis scelerisque</h3>
          <div className={styles.date}>May 31, 2020</div>
        </div>
        <div className={styles.recentBody}>
          <h3>Vestibulum id turpis porttitor sapien facilisis scelerisque</h3>
          <div className={styles.date}>May 31, 2020</div>
        </div>
        <div className={styles.recentBody}>
          <h3>Vestibulum id turpis porttitor sapien facilisis scelerisque</h3>
          <div className={styles.date}>May 31, 2020</div>
        </div>
      </div>
    </>
  );
};
export default RecentPosts;
