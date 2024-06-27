import styles from "./MyWatchList.module.css";
import LeftContainer from "../../component/LeftContainer/LeftCntainer";
import HeadingContainer from "../../component/HeadingContainer/HeadingContainer";
import HorizontalLine from "../../component/HorizontalLine/HorizontalLine";
import SearchBar from "../../component/SearchBar/SearchBar";
import poster from "../../assets/images/kingdom_of_the_planet_of_the_apes_ver12.jpg";
import rate from "../../assets/images/rate.png";
import star from "../../assets/images/star2.png";
import bookmark from "../../assets/images/bookmark2.png";

function MyWatchList() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.mainContainer}>
      <LeftContainer />
      <div className={`${styles.rightContainer}`}>
        <div className={`${styles.popularMovieContainer} no-scrollbar`}>
          <div className={styles.popularMovieHeading}>
            Movies In My Fav. Movie WatchList
          </div>
          <div className={styles.para1}>
            Browse movies, add them to your watch list, review and rate them.
          </div>
          <HorizontalLine />

          <div className={styles.filterMenuContainer}>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>All Items</div>
              <div className={`${styles.menuItem} ${styles.selected}`}>
                Action
              </div>
              <div className={styles.menuItem}>Adventure</div>
              <div className={styles.menuItem}>Science Friction</div>
            </div>
          </div>

          <div className={styles.movieContainer}>
            {arr.map((item, index) => (
              <div className={styles.movieItem} key={item}>
                <div className={styles.serialNumberContainer}>{index + 1}.</div>
                <div className={styles.movieImageContainer}>
                  <img src={poster} alt="poster" />
                </div>
                <h5 className={styles.movieNameContainer}>
                  Kingdom of the Planet of the Apes
                </h5>
                <div className={styles.movieYearContainer}>2024</div>
                <div className={styles.movieRatingsContainer}>
                  <div className={styles.rating}>
                    <img src={rate} alt="rate" />
                    <span>4.7</span>
                  </div>
                </div>
                <div className={styles.toggleContainer}>
                  <div>Unwatched</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWatchList;
