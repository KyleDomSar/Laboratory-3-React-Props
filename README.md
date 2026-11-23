# Laboratory Exercise 3: React Props and Component Communication

**Subject:** DCIT26 - Application Development and Emerging Technologies

## Project Overview

This project is a mini product catalog built with React. It demonstrates how a parent component passes data and callback functions to reusable child components through props.

## Features

- Product data stored in a separate JavaScript file.
- Reusable ProductCard component that uses props destructuring.
- Default category value of "General".
- Prices displayed in Philippine pesos with two decimal places.
- Conditional In Stock and Out of Stock labels.
- Out-of-stock cards have a faded appearance and disabled buttons.
- Add to Cart callback sends the selected product title to the parent component.
- Cart message displays the number of items added and the last product added.
- Children prop is used for New and Sale labels.
- Product cards are rendered with map() and unique keys.
- Responsive product grid for desktop, tablet, and mobile screens.

## Project Structure

```text
product-catalog/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
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

## How to Run the Project

Make sure Node.js and npm are installed.

1. Clone this repository.
2. Open the project folder in a terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

To check the production build, run:

```bash
npm run build
```

## Guide Questions

### 1. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change when something happens.

### 2. Why can a child component not modify the props it receives?

Props are read-only. The parent component owns the data, so the child should use the received values instead of changing them directly.

### 3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

The parent passes a function to the child as a prop. When the button is clicked, the child calls that function and sends the product title. The parent receives it and updates the cart information.

### 4. Why is the key prop required when rendering a list with map()? What could happen if it is missing or duplicated?

A key helps React identify each item in a list. Without a unique key, React may show a warning and may have difficulty matching items correctly when the list changes.

### 5. What does the children prop allow you to do that a normal prop does not?

The children prop lets a component receive content placed between its opening and closing tags. This makes it easier to add different elements or labels inside a reusable component.

---

Created for DCIT26 Laboratory Exercise 3.
