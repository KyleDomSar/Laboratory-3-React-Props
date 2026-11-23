import "./SearchBar.css";

function SearchBar({
  searchText,
  onSearchTextChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  onClearFilters,
}) {
  return (
    <section className="search-panel" aria-label="Product search and filters">
      <div className="search-field">
        <label htmlFor="product-search">Search products</label>
        <input
          id="product-search"
          type="search"
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
          placeholder="Search by product name..."
        />
      </div>

      <div className="filter-field">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="sort-filter">Sort by</label>
        <select
          id="sort-filter"
          value={sortOrder}
          onChange={(event) => onSortOrderChange(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <button
        className="clear-filters-button"
        type="button"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </section>
  );
}

export default SearchBar;
