import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <article
      className={`product-card ${inStock ? "" : "product-card--out-of-stock"}`}
    >
      <div className="product-card__topline">
        <span className="product-card__category">{category}</span>
        <span
          className={`product-card__status ${inStock ? "status-in-stock" : "status-out-of-stock"}`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="product-card__details">
        <div className="product-card__title-row">
          <h2>{title}</h2>
          {children && <div className="product-card__badge">{children}</div>}
        </div>
        <p className="product-card__price">{formattedPrice}</p>
      </div>

      <button
        className="product-card__button"
        type="button"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </article>
  );
}

export default ProductCard;
