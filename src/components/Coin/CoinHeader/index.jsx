import React from "react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { convertNumber } from "../../../functions/convertNumber";

const CoinHeader = ({ coin }) => {
  const formatNumber = (number) => {
    if (window.innerWidth < 768) {
      return convertNumber(number);
    }
    return number.toLocaleString();
  };

  return (
    <div
      key={coin.id}
      className={`items-center bg-neutral-100 dark:bg-dark-grey rounded-lg w-full flex flex-wrap justify-between p-4 gap-4 ${
        coin.price_change_percentage_24h < 0
          ? "hover:bg-red/10 dark:hover:bg-red/10 shadow-md shadow-red/10 dark:shadow-red/10"
          : "hover:bg-green/10 dark:hover:bg-green/10 shadow-md shadow-green/10 dark:shadow-green/10"
      }`}
    >
      <div className="flex items-center gap-4 w-full justify-between">
        <div className="flex items-center gap-6">
          <img src={coin.image} alt={`${coin.name} logo`} className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 dark:text-gray-200">{coin.name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 uppercase">
              {coin.symbol}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1 text-sm font-semibold ${
              coin.price_change_percentage_24h < 0
                ? "border-red text-red dark:border-red dark:text-red"
                : "border-green text-green dark:border-green  dark:text-green"
            }`}
          >
            {coin.price_change_percentage_24h > 0 && "+"}
            {coin.price_change_percentage_24h}%
          </span>
          {coin.price_change_percentage_24h < 0 ? (
            <BsGraphDownArrow className="text-red text-lg dark:text-red" />
          ) : (
            <BsGraphUpArrow className="text-green text-lg dark:text-green" />
          )}
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="font-semibold text-gray-800 dark:text-gray-200 w-full text-2xl">
          ${coin.current_price.toLocaleString()}
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="text-sm text-gray-600 dark:text-gray-400 w-full sm:w-auto">
          Volume: {formatNumber(coin.total_volume)}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 w-full sm:w-auto">
          Market Cap: {formatNumber(coin.market_cap)}
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
