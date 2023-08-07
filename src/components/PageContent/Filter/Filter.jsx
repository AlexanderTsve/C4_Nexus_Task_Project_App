import styles from "./Filter.module.scss";
import { PRICE_FILTER_CATEGORIES } from "../../../util/config";
import Accordion from "react-bootstrap/Accordion";
const Filter = ({ products }) => {
  const categories = products.map(
    ({ name, description, ...categoriesObject }) => {
      return categoriesObject;
    }
  );
  return (
    <section className={styles.filter}>
      {Object.keys(categories[0]).map((categoryType, index) => {
        const setOfCategory =
          categoryType !== "price"
            ? new Set(
                Object.values(categories).map((item) => {
                  return item[categoryType];
                })
              )
            : PRICE_FILTER_CATEGORIES;
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
                      <input type="checkbox" id={category} />
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
