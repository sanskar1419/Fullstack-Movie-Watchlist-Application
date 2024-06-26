import HomeSection from "../../component/HomeSection/HomeSection";
import HomeWatchListSection from "../../component/HomeWatchListSection/HomeWatchListSection";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={`${styles.home} no-scrollbar`}>
      <HomeSection />
      <HomeWatchListSection />
    </div>
  );
}

export default Home;
