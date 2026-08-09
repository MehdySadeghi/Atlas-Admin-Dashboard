import { Outlet } from "react-router-dom";
import ProductsNav from "./ProductsNav";
import styles from "./Products.module.css";

function Products() {
  return (
    <section className={styles.page}>
      <div>
        <p className={styles.eyebrow}>Catalog</p>
        <h2>Products</h2>
        <p className={styles.description}>
          Manage your product catalog and inventory.
        </p>
      </div>

      <ProductsNav />

      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default Products;
