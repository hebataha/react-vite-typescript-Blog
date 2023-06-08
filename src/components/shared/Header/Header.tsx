import React from 'react'
import styles from "./style.module.scss"
 const  Header:React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav>
        <ul>
        <li>
            Home
        </li>
        <li>
            About 
        </li>
        <li>
            Recent Posts
        </li>
        <li>
            Contact
        </li>
        <li>
        Privacy and policy
        </li>
        <button>
            ARA
        </button>
        </ul>
      
      </nav>
    </div>
  )
}
export default Header