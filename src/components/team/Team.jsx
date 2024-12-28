import React from 'react'
import styles from './Team.module.scss'

const Team = () => {
  return (
    <section className={styles.Team}>
    <div>
    <nav>
        <span>Our Professional members</span>
        <h2>Our Team Mambers</h2>
    </nav>
    
    <div className={styles.teamItem}>
    
<div>
    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png" alt="" />
    <a href="/">Ethan Welch</a>
    <span>UX Designer</span>
</div>

<div>
    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png" alt="" />
    <a href="/">Ethan Welch</a>
    <span>UX Designer</span>
</div>


<div>
    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png" alt="" />
    <a href="/">Ethan Welch</a>
    <span>UX Designer</span>
</div>

    </div>
    
    
    </div>
        </section>
  )
}

export default Team