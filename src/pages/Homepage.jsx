import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.label}>Atlas Admin Console</p>

        <h1>
          A focused workspace for
          <span> running your business.</span>
        </h1>

        <p className={styles.description}>
          Monitor performance, manage products, review users, and keep your
          operations organized from one place.
        </p>

        <Link to="/app" className={styles.button}>
          Open dashboard
        </Link>
      </section>

      <section className={styles.preview} aria-label="Dashboard preview">
        <div className={styles.previewHeader}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.previewBody}>
          <aside className={styles.previewSidebar}>
            <div className={styles.sidebarBrand} />
            <div className={styles.sidebarNav}>
              <span className={styles.activeNav} />
              <span />
              <span />
              <span />
            </div>
          </aside>

          <div className={styles.previewMain}>
            <div className={styles.previewTop}>
              <div>
                <div className={styles.previewTitle} />
                <div className={styles.previewSubtitle} />
              </div>

              <div className={styles.previewAvatar} />
            </div>

            <div className={styles.previewCards}>
              <div className={styles.previewCard}>
                <span />
                <strong />
              </div>

              <div className={styles.previewCard}>
                <span />
                <strong />
              </div>

              <div className={styles.previewCard}>
                <span />
                <strong />
              </div>
            </div>

            <div className={styles.previewChart}>
              <div className={styles.chartHeader}>
                <span />
                <span />
              </div>

              <div className={styles.chartLines}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
