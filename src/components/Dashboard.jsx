import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Overview</p>

        <h2>Dashboard</h2>

        <p className={styles.description}>
          Monitor your business performance and application activity.
        </p>
      </div>

      <DashboardNav />

      <div className={styles.content}>
        <Outlet />
      </div>
    </section>
  );
}

export default Dashboard;
