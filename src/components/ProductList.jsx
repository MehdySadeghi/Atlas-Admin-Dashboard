import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    stock: 42,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 99.99,
    stock: 27,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 49.99,
    stock: 64,
    rating: 4.5,
  },
  {
    id: 4,
    name: "USB-C Monitor",
    category: "Electronics",
    price: 329.99,
    stock: 18,
    rating: 4.9,
  },
];

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
