import styles from "./PageContent.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import LoadMorePara from "../LoadMorePara/LoadMorePara";
import { useEffect, useState, useCallback } from "react";
import {
  NUMBER_OF_PRODUCTS_PER_SLIDE,
  PRICE_FILTER_CATEGORIES,
} from "../../../util/config";
import CounterOfShownProducts from "../CounterOfShownProducts/CounterOfShownProducts";
import Filter from "../Filter/Filter";
const PageContent = ({ arrOfProducts }) => {
  const [loadMorePara, setLoadMorePara] = useState(
    arrOfProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
  );
  const [shownProducts, setShownProducts] = useState(
    arrOfProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
      ? arrOfProducts.slice(0, NUMBER_OF_PRODUCTS_PER_SLIDE)
      : arrOfProducts
  );
  const [filteredProducts, setFilteredProducts] = useState(arrOfProducts);
  const filterProducts = useCallback(
    (arr) => {
      if (!arr.some((item) => PRICE_FILTER_CATEGORIES.includes(item))) {
        const filteredProductsArr = arrOfProducts
          .map((product) => Object.entries(product))
          .map((item) => item.map((arrItem) => arrItem[1]))
          .filter((arrOfProduct) =>
            arr.every((category) => arrOfProduct.includes(category))
          )
          .map((arrOfProduct) => {
            return {
              name: arrOfProduct[0],
              description: arrOfProduct[1],
              type: arrOfProduct[2],
              metal: arrOfProduct[3],
              price: arrOfProduct[4],
            };
          });
        setFilteredProducts(filteredProductsArr);
      }
    },
    [arrOfProducts]
  );
  useEffect(() => {
    setShownProducts(
      filteredProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
        ? filteredProducts.slice(0, NUMBER_OF_PRODUCTS_PER_SLIDE)
        : filteredProducts
    );
    setLoadMorePara(filteredProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE);
  }, [filteredProducts]);
  const showMoreHandler = () => {
    if (
      arrOfProducts.length - shownProducts.length >
        NUMBER_OF_PRODUCTS_PER_SLIDE &&
      filteredProducts.length === 0
    ) {
      setShownProducts([
        ...shownProducts,
        ...arrOfProducts.slice(
          shownProducts.length,
          shownProducts.length + NUMBER_OF_PRODUCTS_PER_SLIDE
        ),
      ]);
    } else if (
      arrOfProducts.length - shownProducts.length <=
        NUMBER_OF_PRODUCTS_PER_SLIDE &&
      filteredProducts.length === 0
    ) {
      setShownProducts([
        ...shownProducts,
        ...arrOfProducts.slice(shownProducts.length),
      ]);
      setLoadMorePara(false);
    } else if (
      filteredProducts.length > 0 &&
      filteredProducts.length - shownProducts.length >
        NUMBER_OF_PRODUCTS_PER_SLIDE
    ) {
      setShownProducts([
        ...shownProducts,
        ...filteredProducts.slice(
          shownProducts.length,
          shownProducts.length + NUMBER_OF_PRODUCTS_PER_SLIDE
        ),
      ]);
    } else if (
      filteredProducts.length - shownProducts.length <=
        NUMBER_OF_PRODUCTS_PER_SLIDE &&
      filteredProducts.length > 0
    ) {
      setShownProducts([
        ...shownProducts,
        ...filteredProducts.slice(shownProducts.length),
      ]);
      setLoadMorePara(false);
    }
  };
  return (
    <section>
      <CounterOfShownProducts
        shownProducts={shownProducts.length}
        totalProducts={arrOfProducts.length}
      />
      <section className={styles["products-grid"]}>
        <Filter
          products={
            filteredProducts.length === 0 ? arrOfProducts : filteredProducts
          }
          filterProducts={filterProducts}
        />
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
      </section>
      {loadMorePara && <LoadMorePara showMoreHandler={showMoreHandler} />}
    </section>
  );
};
export default PageContent;
