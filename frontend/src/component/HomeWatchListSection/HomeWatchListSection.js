import styles from "./HomeWatchListSection.module.css";
import watchListImage from "../../assets/images/kingdom_of_the_planet_of_the_apes_ver12.jpg";
import watchListImage2 from "../../assets/images/my_spy_the_eternal_city.jpg";
import star from "../../assets/images/star.png";
import forward from "../../assets/images/fast-forward.png";
import next from "../../assets/images/next.png";
import back from "../../assets/images/back.png";
import { useEffect, useState } from "react";
import splitStringToCharacter from "../../utils/spliteStringToCharacter";
import { motion, Variants } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function HomeWatchListSection() {
  const data = [
    {
      id: 1,
      imageUrl: watchListImage,
      name: "Kingdom of the Planet of the Apes",
      description:
        "Director Wes Ball breathes new life into the global, epic franchise set several generations in the future following Caesar’s reign, in which apes are the dominant species living harmoniously and humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      rating: 4.3,
    },
    {
      id: 2,
      imageUrl: watchListImage2,
      name: "My Spy: The Eternal City",
      description:
        "It follows a teenage Sophie as she convinces JJ to chaperone her school trip where they both end up as pawns in an international terrorist plot targeting CIA Chief, David Kim and his son, Collin - who is Sophie's best friend.",
      rating: 4.4,
    },
    {
      id: 3,
      imageUrl: watchListImage,
      name: "Kingdom of the Planet of the Apes",
      description:
        "Director Wes Ball breathes new life into the global, epic franchise set several generations in the future following Caesar’s reign, in which apes are the dominant species living harmoniously and humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      rating: 4.3,
    },
    {
      id: 4,
      imageUrl: watchListImage2,
      name: "My Spy: The Eternal City",
      description:
        "It follows a teenage Sophie as she convinces JJ to chaperone her school trip where they both end up as pawns in an international terrorist plot targeting CIA Chief, David Kim and his son, Collin - who is Sophie's best friend.",
      rating: 4.4,
    },
  ];

  const [currentItem, setCurrentItem] = useState(data[0]);
  const [description, setDescription] = useState(
    splitStringToCharacter(currentItem.description)
  );

  const handleSlide = (item) => {
    setCurrentItem({ ...item });
  };

  const handleLeftClick = () => {
    const index = data.findIndex((item) => item.id === currentItem.id);
    if (index === 0) {
      setCurrentItem({ ...data[data.length - 1] });
    } else {
      setCurrentItem({ ...data[index - 1] });
    }
  };

  const handleRightClick = () => {
    const index = data.findIndex((item) => item.id === currentItem.id);
    if (index === data.length - 1) {
      setCurrentItem({ ...data[0] });
    } else {
      setCurrentItem({ ...data[index + 1] });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.heading1}>{currentItem.name}</div>
        <motion.div
          className={styles.para}
          initial="hidden"
          whileInView="reveal"
          whileFocus="reveal"
          transition={{ staggerChildren: 0.02 }}
        >
          {description.map((char) => (
            <motion.span
              key={char}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <div className={styles.buttonContainer}>
          <button className={styles.moreDetailsButton}>
            More Details
            <img src={forward} alt="forward" className={styles.forward} />
          </button>
          <div className={styles.ratings}>
            {currentItem.rating}{" "}
            <img src={star} alt="star" className={styles.star} />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={currentItem.imageUrl} alt="apes" />
      </div>
      <img
        src={back}
        alt="back"
        className={styles.backButton}
        onClick={handleLeftClick}
      />
      <img
        src={next}
        alt="next"
        className={styles.nextButton}
        onClick={handleRightClick}
      />
      <div className={styles.slider}>
        {data.map((item) => (
          <input
            type="radio"
            name="item"
            key={item.id}
            onClick={() => handleSlide(item)}
            disabled={item.id === currentItem.id ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeWatchListSection;
