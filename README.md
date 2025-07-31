## ☕️ Coffee Listing App

Welcome to the **Coffee Listing App** — a sleek, responsive React application that showcases a curated list of coffee products with filtering options and stylish UI. Built with ❤️ for coffee lovers and frontend enthusiasts.

<img width="960" height="534" alt="image" src="https://github.com/user-attachments/assets/bb0ae2a1-f0cd-4cb4-bd07-d715ee2faa87" />


---

## ✨ Features

- 🔍 **Filter by Availability** — View all products or only those currently available.
- 📦 **Dynamic Data** — Fetches coffee listings from a remote JSON source.
- 🌟 **Ratings & Popular Tags** — Highlights popular items and displays ratings with vote counts.
- 🎨 **Modern UI** — Styled with custom CSS for a clean, dark-themed layout.

---

## 🧩 Components

### `App.js`
- Main entry point of the app.
- Manages the filter state (`all` or `available`).
- Renders the header, filter buttons, and the `Card` component.

### `Card.js`
- Fetches coffee data from a remote JSON endpoint.
- Filters the list based on availability.
- Displays:
  - Coffee name
  - Price
  - Rating (or "No ratings" if none)
  - "Popular" tag
  - "Sold out" label if not available

### `App.css`
- Custom styles for layout, typography, buttons, and card grid.
- Responsive design with a dark theme and accent colors.
- Includes styles for:
  - `.container`, `.card-grid`, `.popular-tag`, `.price-tag`, `.out-of-stock-tag`, and more.

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/coffee-collection-app.git
   cd coffee-collection-app
   ```

----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

