import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.scss";
const NavigationItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {children}
    </NavLink>
  );
};
export default NavigationItem;
