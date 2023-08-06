import styles from "./CounterOfShownProducts.module.scss";
const CounterOfShownProducts = ({ shownProducts, totalProducts }) => {
  return (
    <p className={styles.counter}>
      {shownProducts} of {totalProducts}
    </p>
  );
};
export default CounterOfShownProducts;
