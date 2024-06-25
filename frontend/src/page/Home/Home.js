import HomeSection from "../../component/HomeSection/HomeSection";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={`${styles.home} no-scrollbar`}>
      <HomeSection />
    </div>
  );
}

export default Home;
