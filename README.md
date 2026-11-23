# Laboratory Exercise 4: React useState and useEffect

**Subject:** DCIT26 - Application Development and Emerging Technologies  
**Activity:** Live Search and Filter

## Project Overview

This project extends the Mini Product Catalog from Laboratory Exercise 3. It uses React state and effects to let users search, filter, and sort products without changing the original product data.

## Features

- Controlled search input for product titles.
- Category filter for Electronics, Books, School Supplies, and Accessories.
- Price sorting from low to high and high to low.
- Clear Filters button that resets all filter controls.
- 300ms debounce using `useEffect`, `setTimeout`, and a cleanup function.
- Result count showing how many products match the current filters.
- Friendly empty-state message when no products match.
- Browser tab title updates with the number of results.
- Existing Add to Cart behavior from Laboratory Exercise 3 is preserved.
- Responsive layout for desktop, tablet, and mobile screens.

## Project Structure

```text
product-catalog/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.css
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## How to Run

Make sure Node.js and npm are installed.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

To check the production build:

```bash
npm run build
```

## Behavior Checklist

- Search for `mouse`, then wait briefly. Only matching products should remain.
- Type quickly. The results should update after typing pauses.
- Select `Books`. Only books should be displayed.
- Combine a keyword and category filter.
- Test both price sorting options.
- Search for a word that does not exist and check the empty-state message.
- Click Clear Filters and confirm that all products return.
- Change the filters and check the browser tab title.
- Add an in-stock product to the cart and confirm that the cart message still updates.
- Confirm that out-of-stock products cannot be added to the cart.

## Guide Questions

### 1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?

The searchText state updates every time the user types. The debouncedSearch state updates only after the user stops typing for 300 milliseconds. This prevents the product list from being filtered on every keystroke.

### 2. What would happen if the debounce effect did not return a cleanup function?

Old timers would continue running even when the user types again. This can cause unnecessary state updates and make the search behavior less efficient. The cleanup function cancels the previous timer.

### 3. What is the purpose of the dependency array? What happens if it is empty ([]) ? What happens if it is left out completely?

The dependency array tells React when an effect should run again. An empty array means the effect runs after the initial render only. Without a dependency array, the effect runs after every render.

### 4. Why should we avoid sorting the original products array directly?

Sorting the original array changes its order. This can affect other parts of the application that use the same data. Making a copy before sorting keeps the original product list unchanged.

### 5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.

It is better to calculate the filtered list during rendering because it can be derived from the products and filter states. There is no need to store the same information again in another state, which helps avoid unnecessary state updates and keeps the displayed results synchronized with the filters.

---

Created for DCIT26 Laboratory Exercise 4.
