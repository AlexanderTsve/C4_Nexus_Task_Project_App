import styles from "./Sort.module.scss";
import { SORT_CATEGORIES } from "../../../util/config";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Sort = ({ arrOfProducts, sortProducts }) => {
  const sortHandler = (e) => {
    sortProducts(e.target.id, arrOfProducts);
  };
  return (
    <DropdownButton
      className={styles.dropdown}
      align="end"
      title="Sort"
      id="dropdown-menu-align-end"
    >
      {SORT_CATEGORIES.map((category, index) => (
        <Dropdown.Item
          className={styles["dropdown-item"]}
          eventKey={index}
          key={index}
          onClick={sortHandler}
          id={category}
        >
          {category}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default Sort;
