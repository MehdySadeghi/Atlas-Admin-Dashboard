import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import Header from "../components/Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <AppNav />
      </aside>

      <div className={styles.main}>
        <Header />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
