import styles from "./LeftContainer.module.css";
import homeImage from "../../assets/images/home.png";
import userImage from "../../assets/images/user.png";
import watchlistImage from "../../assets/images/bookmark.png";
import { NavLink } from "react-router-dom";
import moreImage from "../../assets/images/more.png";

function LeftContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.heading}>WatchList</div>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          background: isActive
            ? "linear-gradient(45deg, #1e0a6b, black)"
            : "transparent",
        })}
        className={styles.homeContainer}
      >
        <img src={homeImage} alt="Home" />
        <div className={styles.homeText}>Home</div>
      </NavLink>
      <NavLink
        to="/watchlist"
        style={({ isActive }) => ({
          background: isActive
            ? "linear-gradient(45deg, #1e0a6b, black)"
            : "transparent",
        })}
        className={styles.homeContainer}
      >
        <img src={watchlistImage} alt="Home" />
        <div className={styles.homeText}>Watch List</div>
      </NavLink>
      <button className={styles.watchListButton}>
        + Create New Watch List
      </button>
      <hr />
      <div className={styles.listHeading}>My watch lists</div>
      <div className={`${styles.listItems} no-scrollbar`}>
        <div className={styles.listItem}>
          <div className={styles.listItemlogo}>M</div>
          <span className={styles.listItemText}>My Fav. Movie</span>
        </div>
      </div>
      <div className={styles.userProfile}>
        <img src={userImage} alt="user" />
        <div>Sara Lance</div>
        <img src={moreImage} alt="more" className={styles.more} />
      </div>
    </div>
  );
}

export default LeftContainer;
