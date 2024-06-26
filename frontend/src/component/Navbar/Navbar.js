import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        {/* <!--Logo Container--!> */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.logoName}>
            Movie <span className={styles.nameRight}>Mania</span>
          </div>
        </div>
        {/* <!--Nav Item Container--!> */}
        <div className={styles.navItemContainer}>
          <div className={styles.navList}>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/watchlist">
              {" "}
              <div>Watch List</div>
            </Link>
            <div>About</div>
          </div>
        </div>
        {/* <!--User Container--!> */}
        <div className={styles.userSection}>
          <div className={styles.userName}>Hi! Sara</div>
          <div className={styles.addToWatchList}>SR</div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
