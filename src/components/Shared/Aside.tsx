import React from 'react'
import styles from "./Aside.module.scss"

const Aside = () => {
  return (
   
    <main className={styles.aside} >
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
    <div>
        <ul className={styles.avatarList}>
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/Js.Exercises</li>
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/react-projects</li>
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/python-exercises</li>
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/blog-app</li>
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/django-serializers</li>
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/movie-app</li>            
            <li> <img className={styles.subAvatar} src=" https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />Cetin-ARAS/myreact2</li>    
            <p className={styles.showMore}>Show more...</p>        
        </ul>
    <div>
        <h5 className={styles.recent}>Recent activity</h5>
        <input className={styles.searchContainer2} type="text" placeholder='When you take actions across GitHub, we’ll provide links to that activity here.'/>
        </div>
        <div>
        <h5 className={styles.recent}>Your Teams</h5>
        <input className={styles.searchContainer3} type="text" placeholder="Find a team..." />
        </div>
        <div className={styles.addition}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/t/6398987?s=16&amp;v=4"  width="16" height="16" alt="FS-012-TR-Students"/>
        <p>clarusway/fs-012-tr-students</p>
        </div>
    </div>
      
        </aside>
        <aside className={styles.rightAside}>
      
        </aside>
    </main>
  )
}

export default Aside;
