import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const [cartCount, setCartCount] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const normalizedSearch = debouncedSearch.trim().toLowerCase();

  const matchingProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(normalizedSearch);
    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const filteredProducts = [...matchingProducts];

  if (sortOrder === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  function handleAddToCart(productTitle) {
    setCartCount((currentCount) => currentCount + 1);
    setLastAddedItem(productTitle);
  }

  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-brand" href="/" aria-label="CvSU Mini Store home">
          <span className="site-brand__mark">CM</span>
          <span className="site-brand__name">CvSU Mini Store</span>
        </a>

        <span className="lab-label">
          DCIT26 <span>•</span> Laboratory Exercise 4
        </span>
      </header>

      <main className="store-content">
        <section className="store-intro">
          <div>
            <p className="eyebrow">YOUR CAMPUS SHOP</p>
            <h1>Find what you need.</h1>
            <p className="store-intro__description">
              Search, filter, and sort everyday essentials for study and work.
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
              <h2>Product Catalog</h2>
              <p>Find an item using the search and filter options.</p>
            </div>
            <span className="product-count">{products.length} products</span>
          </div>

          <SearchBar
            searchText={searchText}
            onSearchTextChange={setSearchText}
            category={category}
            onCategoryChange={setCategory}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            onClearFilters={handleClearFilters}
          />

          <p className="results-summary" aria-live="polite">
            Showing <strong>{filteredProducts.length}</strong> of{" "}
            <strong>{products.length}</strong> products
          </p>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  inStock={product.inStock}
                  onAddToCart={handleAddToCart}
                >
                  {product.id === 1 ? (
                    <span>New</span>
                  ) : product.id === 5 ? (
                    <span>Sale</span>
                  ) : null}
                </ProductCard>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products found.</h3>
              <p>Try a different keyword or category.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p>React useState and useEffect</p>
        <p>DCIT26 • Application Development and Emerging Technologies</p>
      </footer>
    </div>
  );
}

export default App;
