import Card from "react-bootstrap/Card";
import RatingSystem from "../../RatingSystem/RatingSystem";
import styles from "./ProductCard.module.scss";
import { useState, useRef } from "react";
const ProductCard = ({ index, name, description, metal, price }) => {
  const productRef = useRef();
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const loadingImageHandler = () => {
    setImageIsLoaded(true);
  };
  const addToCartHandler = () => {
    alert(`${name} added to the cart! Thank you!`);
  };
  return (
    <Card key={index} className={styles.container}>
      {!imageIsLoaded && <Card.Img className={styles.spinner} />}
      <Card.Img
        style={{ display: imageIsLoaded ? "block" : "none" }}
        onLoad={loadingImageHandler}
        className={styles.image}
        variant="top"
        src={require(`../../../assets/images/${name}.png`)}
      />
      <Card.Body className={styles.content} ref={productRef}>
        <Card.Title className={styles["content-title"]}>{name}</Card.Title>
        <Card.Text className={styles["content-description"]}>
          {description}
        </Card.Text>
        <Card.Text className={styles["content-description-metal"]}>
          Metal: {metal}
        </Card.Text>
        <Card.Text className={styles["content-price"]}>
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Card.Text>
        <RatingSystem />
        <button
          className={styles["content-button"]}
          onClick={addToCartHandler}
          variant="primary"
        >
          Add to cart
        </button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
