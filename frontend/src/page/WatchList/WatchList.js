import styles from "./WatchList.module.css";
import LeftContainer from "../../component/LeftContainer/LeftCntainer";
import HeadingContainer from "../../component/HeadingContainer/HeadingContainer";
import HorizontalLine from "../../component/HorizontalLine/HorizontalLine";
import SearchBar from "../../component/SearchBar/SearchBar";
import poster from "../../assets/images/kingdom_of_the_planet_of_the_apes_ver12.jpg";
import rate from "../../assets/images/rate.png";
import star from "../../assets/images/star2.png";
import bookmark from "../../assets/images/bookmark2.png";

function WatchList() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.mainContainer}>
      <LeftContainer />
      <div className={`${styles.rightContainer} no-scrollbar`}>
        <HeadingContainer />
        <HorizontalLine />
        <SearchBar />

        <div className={styles.popularMovieContainer}>
          <div className={styles.popularMovieHeading}>
            Top 10 on Movie Mania this week
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
            {arr.map((item) => (
              <div className={styles.movieItem} key={item}>
                <h5 className={styles.bookmarkText}>+</h5>
                <div className={styles.bookmark}>
                  <img src={bookmark} alt="bookmark" />
                </div>
                <img src={poster} alt={poster} className={styles.poster} />
                <div className={styles.detailsContainer}>
                  <h6 className={styles.posterHeading}>
                    Kingdom of the Planet of the Apes
                  </h6>
                  <p className={styles.para}>(2024)</p>
                </div>
                <div className={styles.ratingContainer}>
                  <div className={styles.rating}>
                    <img src={rate} alt="rate" />
                    <span>4.7</span>
                  </div>
                  <img src={star} alt="star" className={styles.star} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
