import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { products } from "../data/products";

function ProductDetails() {
  const { productId } = useParams();
  const navigator = useNavigate();

  const product = products.find((item) => String(item.id) === productId);

  if (!product) {
    return (
      <section className={styles.page}>
        <div className={styles.notFound}>
          <h3>Product not found</h3>
          <p>
            The product you are looking for does not exist or has been removed.
          </p>

          <Link to=".." relative="path" className={styles.button}>
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.productImage}>
        {product.horizontalImage ? (
          <img src={product.horizontalImage} alt={product.name} />
        ) : (
          <div className={styles.placeholder}>
            <span>{product.category}</span>
          </div>
        )}
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

        <button className={styles.button} onClick={() => navigator(-1)}>
          Back to Products
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
