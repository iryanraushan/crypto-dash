# Crypto Dashboard with React.js

## Project Overview

This project is a **responsive, single-page cryptocurrency dashboard** built using **React.js**. The dashboard integrates with the **CoinGecko API** to display cryptocurrency data and offers a **customizable price history view** with a dynamic line chart. The design is optimized for both **desktop and mobile** views, ensuring a seamless user experience across devices.

---

## Features

### UI/UX Design

- **Dashboard View**: Displays a list of cryptocurrencies with basic details such as:
  - Coin Name
  - Symbol
  - Current Price
  - 24h Price Change Percentage
  - Market Cap
- **Coin Detail View**: Provides in-depth data for a selected cryptocurrency, including:
  - Full Description
  - Market Cap Rank
  - Trading Volume
  - A dynamic line chart for price history over selectable timeframes (1 day, 7 days, 1 month, 3 months, 1 year)
- **Responsive Layout**: Mobile-friendly design using CSS frameworks : **Tailwind CSS**.
- **Dark Mode**: Optional feature to toggle between light and dark mode for user comfort.

### Core Functionalities

- **Dashboard View**:

  - Paginated  list of cryptocurrencies.
  - Search bar for filtering coins by name or symbol.
  - Clicking on any cryptocurrency redirects to its detailed view.
- **Coin Detail View**:

  - Select timeframes for price history ( 7 days, 1 month, 2 months, 3 months, 4 months, 1 year).
  - Dynamic chart updates based on the selected timeframe.
  - Render chart data based on Prices, Market cap, Total Volume.
- **Price History**:

  - Dropdown or button group for selecting timeframes.
  - Dynamic chart updates for selected timeframes without page reloads.
- **Data Refresh and Error Handling**:

  - Option to refresh data manually.
  - Graceful error handling for API fetch failures.

---

## Installation

- **Vite**: Fast and modern build tool for setting up the project.
- **Tailwind CSS**: Utility-first CSS framework for building responsive designs.
- **Framer Motion**: Smooth animations and transitions for a dynamic UI.
- **Chart.js**: Interactive and customizable charts for data visualization.
- **React Icons**: Comprehensive collection of icons for enhancing the UI.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 14.0)
- **npm** or **yarn** (package manager)

### Set Up Project

```
git clone https://github.com/iryanraushan/crypto-dash.git
cd crypto-dash
npm install 
nm run dev  // for run the server
```

### API Integration

The dashboard integrates with the **CoinGecko API** for real-time cryptocurrency data. The following endpoints are used:

* Coins List :  `/coins/markets` (for dashboard data)
* Coin Detailed : `/coins/{id}` (for the detailed view)
* Price History: `/coins/{id}/market_chart` with customizable timeframes

## Performance Optimizations

* **Lazy Loading & Pagination** : The dashboard uses pagination or infinite scroll to efficiently display a large dataset of cryptocurrencies.
