import styles from "./FooterList.module.scss";
const FooterList = ({ title, arrOfContent }) => {
  return (
    <ul className={styles.list}>
      <li className={styles["list-title"]}>{title}</li>
      {arrOfContent.map((link, index) => (
        <li className={styles["list-item"]} key={index}>
          {link}
        </li>
      ))}
    </ul>
  );
};
export default FooterList;
