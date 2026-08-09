import { NavLink } from "react-router-dom";
import styles from "./ProductsNav.module.css";

function ProductsNav() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="productList"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Product list
      </NavLink>

      <NavLink
        to="productDetails"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Product details
      </NavLink>
    </nav>
  );
}

export default ProductsNav;
