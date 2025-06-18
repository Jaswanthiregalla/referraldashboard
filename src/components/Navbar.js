import React, { useState } from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";
import profileIcon from "../assets/profile.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.moon}></div>
          <p className={styles.text}>Go Business</p>
          <div className={styles.dot}></div>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navtext}>Home</li>
          <li className={styles.navtext}>About Us</li>
          <li className={styles.navtext}>Courses</li>
          <li className={styles.navtext}>Projects</li>
          <li className={styles.navtext}>Contact</li>
        </ul>
        <button className={styles.freebutton}>Try for free</button>
      </nav>
      <div className={styles.dashboardheader}>
        <h2 className={styles.title}>Referral Dashboard</h2>

        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              placeholder="Search here..."
            />
          </div>
          <button className={styles.searchBtn}>Search</button>
        </div>

        <div className={styles.rightSection}>
          <FiBell className={styles.icon} />
          <div
            className={styles.profile}
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src={profileIcon}
              alt="ProfileImage"
              className={styles.avatar}
            />
            <div className={styles.profileText}>
              <span>Name</span>
              <small>Admin</small>
            </div>
            {showMenu && (
              <div className={styles.dropdown}>
                <div>Profile</div>
                <div>Settings</div>
                <div>Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
