
export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div className="flex justify-center items-center mb-6">
      <div className="flex border border-blue-500 rounded-md">
        <button
          onClick={() => handlePriceTypeChange("prices")}
          className={`px-4 py-2 text-sm ${
            priceType === "prices"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-500"
          } border-r border-blue-500 first:rounded-l-md`}
        >
          Prices
        </button>
        <button
          onClick={() => handlePriceTypeChange("market_caps")}
          className={`px-4 py-2 text-sm ${
            priceType === "market_caps"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-500"
          } border-r border-blue-500`}
        >
          Market Cap
        </button>
        <button
          onClick={() => handlePriceTypeChange("total_volumes")}
          className={`px-4 py-2 text-sm ${
            priceType === "total_volumes"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-500"
          } last:rounded-r-md`}
        >
          Total Volume
        </button>
      </div>
    </div>
  );
}
