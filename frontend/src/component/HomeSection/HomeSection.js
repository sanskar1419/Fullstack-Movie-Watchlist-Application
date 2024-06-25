import styles from "./HomeSection.module.css";
import HomeImage from "../../assets/images/Home_Image.png";
import HomeImage2 from "../../assets/images/Home_Image2.png";

function HomeSection() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.heading1}>ENHANCE YOUR MOVIE COLLECTION</div>
        <div className={styles.heading2}>
          Increase your <span className="color-indigo">watchlist</span>{" "}
          collection with our{" "}
          <span className="color-indigo">wonderful movies </span>
          collections
        </div>
        <div className={styles.heading1}>
          Cinema is a matter of what's in the frame and what's out
        </div>
        <div className={styles.buttonContainers}>
          <button>Go To watchlist Page</button>
          <button>Add New Movie</button>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HomeImage} className={styles.homeImage1} />
        <img src={HomeImage2} className={styles.homeImage2} />
      </div>
    </div>
  );
}

export default HomeSection;
