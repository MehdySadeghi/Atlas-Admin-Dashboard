import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const stockStatus =
    product.stock === 0
      ? "Out of stock"
      : product.stock < 20
        ? "Low stock"
        : "In stock";

  const stockClass =
    product.stock === 0
      ? styles.danger
      : product.stock < 20
        ? styles.warning
        : styles.success;

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <span>{product.category}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <div>
            <p className={styles.category}>{product.category}</p>
            <h4>{product.name}</h4>
          </div>

          <strong>${product.price}</strong>
        </div>

        <div className={styles.bottom}>
          <span className={`${styles.stock} ${stockClass}`}>{stockStatus}</span>

          <span className={styles.rating}>{product.rating} rating</span>
        </div>

        <Link to="../productDetails" className={styles.link}>
          View details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
