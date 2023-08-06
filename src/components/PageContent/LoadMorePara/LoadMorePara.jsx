import styles from "./LoadMorePara.module.scss";
const LoadMorePara = ({ showMoreHandler }) => {
  return (
    <p onClick={showMoreHandler} className={styles["load-more-para"]}>
      Load More...
    </p>
  );
};
export default LoadMorePara;
