import styles from "./Users.module.css";

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Administrator",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 4,
    name: "Daniel Wilson",
    email: "daniel@example.com",
    role: "Editor",
    status: "Inactive",
  },
];

function Users() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div>
          <h2>Users</h2>
          <p>Manage access and permissions across your workspace.</p>
        </div>

        <button>Add user</button>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span>User</span>
          <span>Role</span>
          <span>Status</span>
        </div>

        {users.map((user) => (
          <div className={styles.row} key={user.id}>
            <div className={styles.user}>
              <div className={styles.avatar}>{user.name.charAt(0)}</div>

              <div>
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>
            </div>

            <span className={styles.role}>{user.role}</span>

            <span
              className={`${styles.status} ${
                user.status === "Active" ? styles.active : styles.inactive
              }`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;
