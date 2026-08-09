import styles from "./Overview.module.css";

const metrics = [
  {
    label: "Total revenue",
    value: "$48,290",
    change: "+8.2%",
    description: "vs. last month",
  },
  {
    label: "Orders",
    value: "1,284",
    change: "+12.4%",
    description: "vs. last month",
  },
  {
    label: "Customers",
    value: "8,492",
    change: "+5.7%",
    description: "vs. last month",
  },
  {
    label: "Products",
    value: "324",
    change: "+12",
    description: "added this week",
  },
];

const activities = [
  {
    title: "New order received",
    detail: "Order #10482",
    time: "12 minutes ago",
  },
  {
    title: "Product stock updated",
    detail: "Wireless Headphones",
    time: "34 minutes ago",
  },
  {
    title: "New customer registered",
    detail: "Sarah Johnson",
    time: "1 hour ago",
  },
  {
    title: "Payment completed",
    detail: "Order #10479",
    time: "2 hours ago",
  },
];

function Overview() {
  return (
    <div className={styles.page}>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <article className={styles.metric} key={metric.label}>
            <p>{metric.label}</p>

            <strong>{metric.value}</strong>

            <span>
              <b>{metric.change}</b> {metric.description}
            </span>
          </article>
        ))}
      </div>

      <div className={styles.grid}>
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h3>Revenue</h3>
              <p>Last 30 days</p>
            </div>

            <strong>$48,290</strong>
          </div>

          <div className={styles.chart}>
            <div className={styles.chartLine}></div>

            <div className={styles.chartLabels}>
              <span>Jul 10</span>
              <span>Jul 17</span>
              <span>Jul 24</span>
              <span>Jul 31</span>
              <span>Aug 7</span>
            </div>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h3>Recent activity</h3>
              <p>Latest updates</p>
            </div>
          </div>

          <div className={styles.activityList}>
            {activities.map((activity) => (
              <div className={styles.activity} key={activity.detail}>
                <span className={styles.activityDot}></span>

                <div>
                  <strong>{activity.title}</strong>
                  <p>{activity.detail}</p>
                </div>

                <time>{activity.time}</time>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Overview;
