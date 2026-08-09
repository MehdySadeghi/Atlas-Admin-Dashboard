import styles from "./Analytics.module.css";

const channels = [
  { name: "Direct", value: 42, visitors: "10,452" },
  { name: "Search", value: 31, visitors: "7,714" },
  { name: "Social", value: 17, visitors: "4,230" },
  { name: "Referral", value: 10, visitors: "2,496" },
];

function Analytics() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h3>Analytics</h3>
          <p>Understand how users interact with your platform.</p>
        </div>

        <select defaultValue="30">
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <div className={styles.metrics}>
        <article>
          <span>Total visitors</span>
          <strong>24,892</strong>
          <small>+12.5% vs previous period</small>
        </article>

        <article>
          <span>Conversion rate</span>
          <strong>4.8%</strong>
          <small>+0.7% vs previous period</small>
        </article>

        <article>
          <span>Avg. session</span>
          <strong>4m 32s</strong>
          <small>+18s vs previous period</small>
        </article>
      </div>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <h4>Traffic sources</h4>
            <p>Where your visitors are coming from</p>
          </div>
        </div>

        <div className={styles.channels}>
          {channels.map((channel) => (
            <div className={styles.channel} key={channel.name}>
              <div className={styles.channelTop}>
                <span>{channel.name}</span>
                <strong>{channel.visitors}</strong>
              </div>

              <div className={styles.bar}>
                <span style={{ width: `${channel.value}%` }}></span>
              </div>

              <small>{channel.value}% of total traffic</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Analytics;
