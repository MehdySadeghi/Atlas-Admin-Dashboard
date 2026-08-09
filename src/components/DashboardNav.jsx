import { NavLink } from "react-router-dom";
import styles from "./DashboardNav.module.css";

function DashboardNav() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="overview"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Overview
      </NavLink>

      <NavLink
        to="analytics"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Analytics
      </NavLink>

      <NavLink
        to="statistics"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Statistics
      </NavLink>
    </nav>
  );
}

export default DashboardNav;
