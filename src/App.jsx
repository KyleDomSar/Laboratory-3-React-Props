import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState("");

  function handleAddToCart(productTitle) {
    setCartCount((currentCount) => currentCount + 1);
    setLastAddedItem(productTitle);
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-brand" href="/" aria-label="CvSU Mini Store home">
          <span className="site-brand__mark">CM</span>
          <span className="site-brand__name">CvSU Mini Store</span>
        </a>

        <span className="lab-label">
          DCIT26 <span>•</span> Laboratory Exercise 3
        </span>
      </header>

      <main className="store-content">
        <section className="store-intro">
          <div>
            <p className="eyebrow">YOUR CAMPUS SHOP</p>
            <h1>Find what you need.</h1>
            <p className="store-intro__description">
              A simple collection of everyday essentials for study and work.
            </p>
          </div>

          <aside className="cart-summary" aria-live="polite">
            <span className="cart-summary__label">YOUR CART</span>
            {cartCount === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <p>
                Items added to cart: <strong>{cartCount}</strong>
                <span className="cart-summary__last">
                  Last added: {lastAddedItem}
                </span>
              </p>
            )}
          </aside>
        </section>

        <section className="catalog-section">
          <div className="catalog-heading">
            <div>
              <h2>Featured Products</h2>
              <p>Browse the available items in our mini store.</p>
            </div>
            <span className="product-count">{products.length} products</span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 1 && <span>New</span>}
                {product.id === 5 && <span>Sale</span>}
              </ProductCard>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>React Props and Component Communication</p>
        <p>DCIT26 • Application Development and Emerging Technologies</p>
      </footer>
    </div>
  );
}

export default App;
