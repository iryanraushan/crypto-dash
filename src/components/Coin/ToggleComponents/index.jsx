export default function ToggleComponents({ priceType, setPriceType }) {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="flex border border-primary-color rounded-md">
        <button
          onClick={() => setPriceType("prices")}
          className={`px-4 py-2 text-sm ${
            priceType === "prices"
              ? "bg-primary-color text-white"
              : "bg-transparent text-primary-color"
          } border-r border-primary-color first:rounded-l-md`}
        >
          Prices
        </button>
        <button
          onClick={() => setPriceType("market_caps")}
          className={`px-4 py-2 text-sm ${
            priceType === "market_caps"
              ? "bg-primary-color text-white"
              : "bg-transparent text-primary-color"
          } border-r border-primary-color`}
        >
          Market Cap
        </button>
        <button
          onClick={() => setPriceType("total_volumes")}
          className={`px-4 py-2 text-sm ${
            priceType === "total_volumes"
              ? "bg-primary-color text-white"
              : "bg-transparent text-primary-color"
          } last:rounded-r-md`}
        >
          Total Volume
        </button>
      </div>
    </div>
  );
}
