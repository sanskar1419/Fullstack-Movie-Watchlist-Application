import styles from "./HomeWatchListSection.module.css";
import watchListImage from "../../assets/images/kingdom_of_the_planet_of_the_apes_ver12.jpg";
import star from "../../assets/images/star.png";
import forward from "../../assets/images/fast-forward.png";

function HomeWatchListSection() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.heading1}>
          Kingdom of the Planet of the Apes{" "}
        </div>
        <div className={styles.para}>
          Director Wes Ball breathes new life into the global, epic franchise
          set several generations in the future following Caesar’s reign, in
          which apes are the dominant species living harmoniously and humans
          have been reduced to living in the shadows. As a new tyrannical ape
          leader builds his empire, one young ape undertakes a harrowing journey
          that will cause him to question all that he has known about the past
          and to make choices that will define a future for apes and humans
          alike.
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.moreDetailsButton}>
            More Details
            <img src={forward} alt="forward" className={styles.forward} />
          </button>
          <div className={styles.ratings}>
            4.5 <img src={star} alt="star" className={styles.star} />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={watchListImage} alt="apes" />
      </div>
    </div>
  );
}

export default HomeWatchListSection;
