import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { products } from "../data/products";

function ProductList() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div>
          <h3>Product catalog</h3>
          <p>{products.length} products currently listed</p>
        </div>

        <button className={styles.addButton}>Add product</button>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
