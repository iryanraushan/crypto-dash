import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { convertNumber } from "../../../functions/convertNumber";
import { CiBitcoin } from "react-icons/ci";

const ListView = ({ coins }) => {
  const formatNumber = (number) => {
    if (window.innerWidth < 768) {
      return convertNumber(number);
    }
    return number.toLocaleString(); 
  };

  if (coins.length === 0) {
    return (
      <div className="flex justify-center flex-col gap-6 items-center">
        <CiBitcoin className="text-[5rem] text-primary-color" />
        <h1 className="text-2xl font-bold text-primary-color">
          No coins found
        </h1>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg shadow-md overflow-hidden bg-secondary-color">
        <thead>
          <tr className="bg-primary-color/50 text-dark-grey">
            <th className="p-4 text-left text-sm">Coin</th>
            <th className="p-4 text-left text-sm">Current Price</th>
            <th className="p-4 text-left text-sm">24h Change</th>
            <th className="p-4 text-left text-sm">Volume</th>
            <th className="p-4 text-left text-sm hidden md:table-cell">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className={`border-t border-gray-700 items-center ${
                coin.price_change_percentage_24h < 0
                  ? "hover:bg-red/10"
                  : "hover:bg-green/10"
              }`}
            >
              <td className="p-4 flex items-center gap-4">
                <img
                  src={coin.image}
                  alt={`${coin.name} logo`}
                  className="w-8 h-8"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white">{coin.name}</span>
                  <span className="text-sm text-gray-300 uppercase">
                    {coin.symbol}
                  </span>
                </div>
              </td>

              <td className="p-4 font-semibold text-white">
                ${coin.current_price.toLocaleString()}
              </td>

              <td className="p-4 flex items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-sm font-semibold ${
                    coin.price_change_percentage_24h < 0
                      ? "border-red text-red"
                      : "border-green text-green"
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 && "+"}
                  {coin.price_change_percentage_24h}%
                </span>
                <div className="hidden md:block">
                  {coin.price_change_percentage_24h < 0 ? (
                    <BsGraphDownArrow className="text-red text-lg" />
                  ) : (
                    <BsGraphUpArrow className="text-green text-lg" />
                  )}
                </div>
              </td>

              {/* Volume */}
              <td className="p-4 text-sm text-gray-300">
                {formatNumber(coin.total_volume)}
              </td>

              {/* Market Cap */}
              <td className="p-4 text-sm text-gray-300 hidden md:table-cell">
                {formatNumber(coin.market_cap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
