import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.brandName}>ATLAS</span>
        <span className={styles.brandSubtitle}>Admin Console</span>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Workspace</p>

        <ul className={styles.list}>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="users"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNav;
