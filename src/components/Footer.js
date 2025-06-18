import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Premium</li>
            <li>Blog</li>
            <li>Referral Program</li>
          </ul>
        </div>
        <div>
          <h4>HELP AND SUPPORT</h4>
          <ul>
            <li>Contact Us</li>
            <li>Knowledge Center</li>
            <li>Premium Support</li>
          </ul>
        </div>
        <div>
          <h4>LEARNING</h4>
          <ul>
            <li>Learn Hub</li>
            <li>Tutorials</li>
            <li>Communities</li>
          </ul>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <ul>
            <li>Third-Party Tools</li>
            <li>Illustrations</li>
            <li>Stock Photos</li>
          </ul>
        </div>
        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>EULA</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.moon}></div>
          <p className={styles.text}>Go Business</p>
          <div className={styles.dot}></div>
        </div>
        <p>© 2024 Go Business, Inc. All rights reserved.</p>
        <div className={styles.socials}>
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
