import Button from "../../Button/Button";
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
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className={styles["content-description"]}>
                {product.description}
              </Card.Text>
              <Card.Text>Metal: {product.metal}</Card.Text>
              <Card.Text>
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};
export default ProductGrid;
