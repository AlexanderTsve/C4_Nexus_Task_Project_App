import styles from "./Filter.module.scss";
import { PRICE_FILTER_CATEGORIES } from "../../../util/config";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
const Filter = ({ products, filterProducts }) => {
  const [filtered, setFiltered] = useState([]);
  const categories = products.map(
    ({ name, description, ...categoriesObject }) => {
      return categoriesObject;
    }
  );
  const filterProductsHandler = (e) => {
    const category = e.target.id;
    if (e.target.checked) {
      setFiltered([...filtered, category]);
    } else {
      setFiltered(
        filtered.filter((currentCategory) => currentCategory !== category)
      );
    }
  };
  useEffect(() => {
    filterProducts(filtered);
  }, [filtered, filterProducts]);
  return (
    <section className={styles.filter}>
      <h2 className={styles["filter-title"]}>Filter</h2>
      {Object.keys(categories[0]).map((categoryType, index) => {
        const setOfCategory =
          categoryType !== "price"
            ? new Set(
                Object.values(categories).map((item) => {
                  return item[categoryType];
                })
              )
            : new Set(
                Object.values(categories).map((item) => {
                  return item.price < 1000
                    ? PRICE_FILTER_CATEGORIES[0]
                    : item.price >= 1000 && item.price <= 3000
                    ? PRICE_FILTER_CATEGORIES[1]
                    : PRICE_FILTER_CATEGORIES[2];
                })
              );
        return (
          <Accordion key={index} className={styles.accordion}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{categoryType}</Accordion.Header>
              <Accordion.Body>
                {[...setOfCategory].map((category, indexOfCategory) => {
                  return (
                    <section
                      key={indexOfCategory}
                      className={styles["accordion-body-content"]}
                    >
                      <label htmlFor={category}>{category}</label>
                      <input
                        checked={filtered.includes(category)}
                        type="checkbox"
                        id={category}
                        onChange={filterProductsHandler}
                      />
                    </section>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </section>
  );
};
export default Filter;
