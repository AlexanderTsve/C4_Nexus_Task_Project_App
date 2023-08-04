import styles from "./Navigation.module.scss";
import logo from "../../../assets/logo/logo1.png";
import NavigationItem from "../NavigationLink/NavigationItem";
const Navigation = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className={styles["header__logo"]} />
        <ul className={styles["nav__list"]}>
          <li className={styles["nav__item"]}>
            <NavigationItem to="/">Jewelry</NavigationItem>
          </li>
          <li className={styles["nav__item"]}>
            <NavigationItem to="/watches">Watches</NavigationItem>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
