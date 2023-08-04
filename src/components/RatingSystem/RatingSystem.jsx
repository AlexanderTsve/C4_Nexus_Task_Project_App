import { useState } from "react";
import styles from "./RatingSystem.module.scss";
const RatingSystem = () => {
  const arr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <section className="star-rating">
      {arr.map((starNumber) => {
        return (
          <span
            className={`${styles["star-btn"]} ${
              starNumber <= (hover || rating) ? styles.on : styles.off
            }`}
            onClick={() => setRating(starNumber)}
            onMouseEnter={() => setHover(starNumber)}
            onMouseLeave={() => setHover(rating)}
            key={starNumber}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            &#9733;
          </span>
        );
      })}
    </section>
  );
};
export default RatingSystem;
