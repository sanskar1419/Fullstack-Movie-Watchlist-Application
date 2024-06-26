import styles from "./Footer.module.css";
import logo from "../../assets/images/logo2.png";
import youtube from "../../assets/images/youtube.png";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <aside className={styles.upperPart}>
        <img width="100" src={logo} alt="logo" />
        <p className={styles.upperPart}>
          ABCD Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className={styles.horizontalList}>
          <a>
            <img width="24" height="24" src={youtube} />
          </a>
          <a>
            <img width="24" height="24" src={linkedin} />
          </a>
          <a>
            <img width="24" height="24" src={facebook} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
