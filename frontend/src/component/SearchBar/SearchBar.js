import styles from "./SearchBar.module.css";
import searchImg from "../../assets/images/search-interface-symbol.png";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search.........."
      />
      <img src={searchImg} alt="Search" className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
