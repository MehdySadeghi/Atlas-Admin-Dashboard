import styles from "./Statistics.module.css";

const statistics = [
  ["Monthly revenue", "$48,290"],
  ["Average order value", "$74.32"],
  ["Returning customers", "62%"],
  ["Orders completed", "1,284"],
  ["Refund rate", "1.8%"],
  ["Customer satisfaction", "94%"],
];

function Statistics() {
  return (
    <section className={styles.page}>
      <div>
        <h3>Statistics</h3>
        <p>Key performance indicators for the current period.</p>
      </div>

      <div className={styles.grid}>
        {statistics.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
