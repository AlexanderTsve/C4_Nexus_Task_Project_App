import Card from "react-bootstrap/Card";
import Button from "../../Button/Button";
import RatingSystem from "../../RatingSystem/RatingSystem";
import styles from "./ProductCard.module.scss";
const ProductCard = ({ index, name, description, metal, price }) => {
  return (
    <Card key={index} className={styles.container}>
      <Card.Img
        style={{ width: "18rem", textAlign: "center" }}
        variant="top"
        src={require(`../../../assets/images/${name}.png`)}
      />
      <Card.Body className={styles.content}>
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
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
