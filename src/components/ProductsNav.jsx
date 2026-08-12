import { NavLink } from "react-router-dom";
import styles from "./ProductsNav.module.css";

function ProductsNav() {
  return (
    <nav className={styles.nav} aria-label="Products navigation">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Product list
      </NavLink>
    </nav>
  );
}

export default ProductsNav;
