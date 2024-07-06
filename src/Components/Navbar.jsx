import React from 'react';
import logo from '../../src/assets/logo.png';
import styles from '../Styles/nav.module.css'; 

const Navbars = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo1}>
        <div>
        <img src={logo} className={styles.logo} alt="Brand Logo" />
        </div>
        <div>
        <p className={styles.logo2}>Glocal</p>
        </div>
      </div>
      <ul className={styles.navContainer}>
        <li><a href="#home" className={styles.navContainer1}>Home</a></li>
        <li><a href="#category">Category</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#petcare">Pet Care</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.actions}>
      <button className={styles.btn}>Sign In</button>
      <button className={styles.btn1}>Register</button>
    </div>
    </div>
  );
};

export default Navbars;
