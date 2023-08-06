import Button from "../../Button/Button";
import RatingSystem from "../../RatingSystem/RatingSystem";
import Card from "react-bootstrap/Card";
import styles from "./ProductGrid.module.scss";
const ProductGrid = ({ arrOfProducts }) => {
  return (
    <section className={styles["products-container"]}>
      {arrOfProducts.map((product, index) => {
        return (
          <Card key={index} className={styles.container}>
            <Card.Img
              style={{ width: "18rem", textAlign: "center" }}
              variant="top"
              src={require(`../../../assets/images/${product.name}.png`)}
            />
            <Card.Body className={styles.content}>
              <Card.Title className={styles["content-title"]}>
                {product.name}
              </Card.Title>
              <Card.Text className={styles["content-description"]}>
                {product.description}
              </Card.Text>
              <Card.Text className={styles["content-description"]}>
                Metal: {product.metal}
              </Card.Text>
              <Card.Text className={styles["content-price"]}>
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Card.Text>
              <RatingSystem />
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};
export default ProductGrid;
