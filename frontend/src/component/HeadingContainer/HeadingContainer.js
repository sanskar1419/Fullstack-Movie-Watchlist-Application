import styles from "./HeadingContainer.module.css";
import { useState } from "react";

function HeadingContainer() {
  const [welcomeHeadingVisibility, setWelcomeHeadingVisibility] =
    useState(false);

  const handleMouseInWelcomeHeading = () => {
    setWelcomeHeadingVisibility(true);
  };
  const handleMouseOutWelcomeHeading = () => {
    setWelcomeHeadingVisibility(false);
  };
  return (
    <>
      {welcomeHeadingVisibility ? (
        <div
          className={styles.headingContainer}
          onMouseEnter={handleMouseInWelcomeHeading}
          onMouseLeave={handleMouseOutWelcomeHeading}
        >
          <div className={styles.heading1}>Welcome To Watch List</div>
          <div className={styles.para1}>
            Browse movies, add them to your watch list, review and rate them.
          </div>
          <div className={styles.para2}>
            Click on poster to view details, 🔖 to add to your watch list and ✔️
            to remove from your watch list
          </div>
        </div>
      ) : (
        <div
          className={styles.headingContainer}
          onMouseEnter={handleMouseInWelcomeHeading}
          onMouseLeave={handleMouseOutWelcomeHeading}
        >
          <div className={styles.heading1}>Welcome To Watch List</div>
        </div>
      )}
    </>
  );
}

export default HeadingContainer;
