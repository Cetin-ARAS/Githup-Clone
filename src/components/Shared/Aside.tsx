import React from 'react'
import styles from "./Aside.module.scss"

const Aside = () => {
  return (
    <>
    <div className={styles.aside} >
        <aside className={styles.leftAside}>
        <div className={styles.header}>
            <img className={styles.avatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} /> 
            <p className={styles.avatar}>Çetin-ARAS</p>
        </div>
    <hr className={styles.pipe} />
    <div className={styles.subHeader}>
        <h5>Top Repositories</h5>
        <button className={styles.newBtn}>New</button>
    </div>
    <div className={styles.searchContainer}>
              <input type="text" placeholder="Find a repository.." />
            </div>
      
        </aside>
        <aside className={styles.rightAside}>
      
        </aside>
    </div>
    </>
  )
}

export default Aside;
