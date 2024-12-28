import React from 'react'
import styles from './Header.module.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";




const Header = () => {
  return (
    <header>
       <section className={styles.top}>
       <div className={styles.header}>
        <div className={styles.time}>
            <nav>
                <ul>
                    <li><a href="/"> <i><CiTimer /></i> Mon - SAT: 6.00 am - 10.00 pm</a></li>
                    <li><a href="/"> Sun: Closed</a></li>
                </ul>
            </nav>
        </div>



        <div className={styles.pages}>
            <nav>
                <ul>
                    <li><a href="/"><FaFacebookF /></a></li>
                    <li><a href="/"><FaTwitter /></a></li>
                    <li><a href="/"><FaLinkedinIn /></a></li>
                    <li><a href="/"><FaGooglePlusG /></a></li>
                  
                </ul>
            </nav>
        </div>
        </div>
       </section>



<section className={styles.bottom}>
<div>
    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="" />

    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/admin">ADMIN</a></li>
            <li><a href="/wish">WISH</a></li>
            <li><a href="/cart">CART</a></li>
            <li className={styles.ham}><GiHamburgerMenu /></li>
        </ul>
    </nav>
</div>
</section>


    </header>
  )
}

export default Header