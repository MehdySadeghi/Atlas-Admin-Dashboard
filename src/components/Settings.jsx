import styles from "./Settings.module.css";

const settings = [
  {
    title: "Email notifications",
    description: "Receive updates about orders, users, and system activity.",
    enabled: true,
  },
  {
    title: "Weekly reports",
    description: "Receive a summary of your platform performance every week.",
    enabled: true,
  },
  {
    title: "Product alerts",
    description: "Get notified when products reach low-stock levels.",
    enabled: false,
  },
];

function Settings() {
  return (
    <section className={styles.page}>
      <div>
        <h2>Settings</h2>
        <p>Manage your dashboard preferences and notifications.</p>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h3>Notifications</h3>
          <p>Choose which updates you want to receive.</p>
        </div>

        {settings.map((setting) => (
          <label className={styles.setting} key={setting.title}>
            <div>
              <strong>{setting.title}</strong>
              <span>{setting.description}</span>
            </div>

            <input type="checkbox" defaultChecked={setting.enabled} />
          </label>
        ))}
      </div>
    </section>
  );
}

export default Settings;
