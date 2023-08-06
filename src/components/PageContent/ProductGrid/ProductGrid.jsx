import styles from "./ProductGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import LoadMorePara from "../LoadMorePara/LoadMorePara";
import { useState } from "react";
import { NUMBER_OF_PRODUCTS_PER_SLIDE } from "../../../util/config";
const ProductGrid = ({ arrOfProducts }) => {
  const [loadMorePara, setLoadMorePara] = useState(
    arrOfProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
  );
  const [shownProducts, setShownProducts] = useState(
    arrOfProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
      ? arrOfProducts.slice(0, NUMBER_OF_PRODUCTS_PER_SLIDE)
      : arrOfProducts
  );
  const showMoreHandler = () => {
    if (
      arrOfProducts.length - shownProducts.length >
      NUMBER_OF_PRODUCTS_PER_SLIDE
    ) {
      setShownProducts([
        ...shownProducts,
        ...arrOfProducts.slice(
          shownProducts.length,
          shownProducts.length + NUMBER_OF_PRODUCTS_PER_SLIDE
        ),
      ]);
    } else {
      setShownProducts([
        ...shownProducts,
        ...arrOfProducts.slice(shownProducts.length),
      ]);
      setLoadMorePara(false);
    }
  };
  return (
    <section>
      <section className={styles["products-container"]}>
        {shownProducts.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              metal={product.metal}
            />
          );
        })}
      </section>
      {loadMorePara && <LoadMorePara showMoreHandler={showMoreHandler} />}
    </section>
  );
};
export default ProductGrid;
