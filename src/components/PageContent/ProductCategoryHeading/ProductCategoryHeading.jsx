import styles from "./ProductCategoryHeading.module.scss";
const ProductCategoryHeading = ({ category }) => {
  return (
    <section className={styles["category-name-section"]}>
      <h2>{category.toUpperCase()}</h2>
    </section>
  );
};
export default ProductCategoryHeading;
