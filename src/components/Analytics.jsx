import { useState } from "react";
import styles from "./Analytics.module.css";

const analyticsData = {
  7: {
    visitors: "6,842",
    conversion: "5.2%",
    session: "4m 48s",
    change: "+8.4% vs previous period",
    channels: [
      { name: "Direct", value: 45, visitors: "3,078" },
      { name: "Search", value: 29, visitors: "1,984" },
      { name: "Social", value: 16, visitors: "1,095" },
      { name: "Referral", value: 10, visitors: "685" },
    ],
  },

  30: {
    visitors: "24,892",
    conversion: "4.8%",
    session: "4m 32s",
    change: "+12.5% vs previous period",
    channels: [
      { name: "Direct", value: 42, visitors: "10,452" },
      { name: "Search", value: 31, visitors: "7,714" },
      { name: "Social", value: 17, visitors: "4,230" },
      { name: "Referral", value: 10, visitors: "2,496" },
    ],
  },

  90: {
    visitors: "71,436",
    conversion: "4.5%",
    session: "4m 18s",
    change: "+18.7% vs previous period",
    channels: [
      { name: "Direct", value: 40, visitors: "28,574" },
      { name: "Search", value: 33, visitors: "23,573" },
      { name: "Social", value: 17, visitors: "12,144" },
      { name: "Referral", value: 10, visitors: "7,145" },
    ],
  },
};

function Analytics() {
  const [period, setPeriod] = useState("30");

  const data = analyticsData[period];

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h3>Analytics</h3>
          <p>Understand how users interact with your platform.</p>
        </div>

        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <div className={styles.metrics}>
        <article>
          <span>Total visitors</span>
          <strong>{data.visitors}</strong>
          <small>{data.change}</small>
        </article>

        <article>
          <span>Conversion rate</span>
          <strong>{data.conversion}</strong>
          <small>{data.change}</small>
        </article>

        <article>
          <span>Avg. session</span>
          <strong>{data.session}</strong>
          <small>{data.change}</small>
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
          {data.channels.map((channel) => (
            <div className={styles.channel} key={channel.name}>
              <div className={styles.channelTop}>
                <span>{channel.name}</span>
                <strong>{channel.visitors}</strong>
              </div>

              <div className={styles.bar}>
                <span style={{ width: `${channel.value}%` }} />
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
