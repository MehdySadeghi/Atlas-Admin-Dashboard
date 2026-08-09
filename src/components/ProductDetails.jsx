import styles from "./ProductDetails.module.css";

const product = {
  name: "Wireless Headphones",
  category: "Electronics",
  price: 149.99,
  stock: 42,
  rating: 4.8,
  sku: "WH-2400",
  description:
    "Premium wireless headphones designed for everyday listening, remote work, and travel. Features active noise cancellation, 30-hour battery life, and a lightweight over-ear design.",
};

function ProductDetails() {
  return (
    <section className={styles.page}>
      <div className={styles.productImage}>
        <span>{product.category}</span>
      </div>

      <div className={styles.details}>
        <p className={styles.category}>{product.category}</p>

        <h3>{product.name}</h3>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.price}>${product.price}</div>

        <dl className={styles.info}>
          <div>
            <dt>SKU</dt>
            <dd>{product.sku}</dd>
          </div>

          <div>
            <dt>Stock</dt>
            <dd>{product.stock} units</dd>
          </div>

          <div>
            <dt>Rating</dt>
            <dd>{product.rating} / 5</dd>
          </div>
        </dl>

        <button className={styles.button}>Edit product</button>
      </div>
    </section>
  );
}

export default ProductDetails;
