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
import { transformFilteredArr } from "../../../util/helpers";
import ProductCategoryHeading from "../ProductCategoryHeading/ProductCategoryHeading";
const PageContent = ({ arrOfProducts, productType }) => {
  const [filteredProducts, setFilteredProducts] = useState(arrOfProducts);
  const [loadMorePara, setLoadMorePara] = useState(
    filteredProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
  );
  const [shownProducts, setShownProducts] = useState(
    filteredProducts.length > NUMBER_OF_PRODUCTS_PER_SLIDE
      ? filteredProducts.slice(0, NUMBER_OF_PRODUCTS_PER_SLIDE)
      : filteredProducts
  );
  const filterProducts = useCallback(
    (arr) => {
      const transformedArr = arrOfProducts
        .map((product) => Object.entries(product))
        .map((item) => item.map((arrItem) => arrItem[1]));
      if (!arr.some((item) => PRICE_FILTER_CATEGORIES.includes(item))) {
        const filteredProductsArr = transformedArr.filter((arrOfProduct) =>
          arr.every((category) => arrOfProduct.includes(category))
        );
        const transformedFilteredArr =
          transformFilteredArr(filteredProductsArr);
        setFilteredProducts(transformedFilteredArr);
      } else {
        console.log(arr);
        if (arr.includes(PRICE_FILTER_CATEGORIES[0])) {
          const filteredProductsArr = transformedArr.filter((arrOfProduct) =>
            arr.every(
              (category) =>
                arrOfProduct.includes(category) ||
                (category === PRICE_FILTER_CATEGORIES[0] &&
                  arrOfProduct[4] < 1000)
            )
          );
          const transformedFilteredArr =
            transformFilteredArr(filteredProductsArr);
          setFilteredProducts(transformedFilteredArr);
        }
        if (arr.includes(PRICE_FILTER_CATEGORIES[1])) {
          const filteredProductsArr = transformedArr.filter((arrOfProduct) =>
            arr.every(
              (category) =>
                arrOfProduct.includes(category) ||
                (category === PRICE_FILTER_CATEGORIES[1] &&
                  arrOfProduct[4] >= 1000 &&
                  arrOfProduct[4] <= 3000)
            )
          );
          const transformedFilteredArr =
            transformFilteredArr(filteredProductsArr);
          setFilteredProducts(transformedFilteredArr);
        }
        if (arr.includes(PRICE_FILTER_CATEGORIES[2])) {
          const filteredProductsArr = transformedArr.filter((arrOfProduct) =>
            arr.every(
              (category) =>
                arrOfProduct.includes(category) ||
                (category === PRICE_FILTER_CATEGORIES[2] &&
                  arrOfProduct[4] > 3000)
            )
          );
          const transformedFilteredArr =
            transformFilteredArr(filteredProductsArr);
          setFilteredProducts(transformedFilteredArr);
        }
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
      NUMBER_OF_PRODUCTS_PER_SLIDE
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
      <ProductCategoryHeading category={productType} />
      <CounterOfShownProducts
        shownProducts={shownProducts.length}
        totalProducts={filteredProducts.length}
      />
      <section className={styles["products-grid"]}>
        <Filter products={filteredProducts} filterProducts={filterProducts} />
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
