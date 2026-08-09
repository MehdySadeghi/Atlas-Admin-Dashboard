import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.eyebrow}>Workspace</p>
        <h1 className={styles.title}>Admin Dashboard</h1>
      </div>

      <div className={styles.actions}>
        <span className={styles.status}>System operational</span>

        <NavLink to="/" className={styles.homeLink}>
          Back to home
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
