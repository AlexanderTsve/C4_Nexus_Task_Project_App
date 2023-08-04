import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ProductGrid = ({ arrOfProducts }) => {
  return (
    <section>
      {arrOfProducts.map((product, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img
              variant="top"
              src={require(`../../../assets/images/${product.name}.png`)}
            />
            <Card.Body>
              <Card.Title>Title: {product.name}</Card.Title>
              <Card.Text>Description: {product.description}</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};
export default ProductGrid;
