import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";

const GridView = ({ coins }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className={`flex flex-col gap-6 p-4 cursor-pointer rounded-xl shadow-md bg-secondary-color text-center min-w-72 h-72 transform transition-all duration-300 ease-in-out
      ${
        coin.price_change_percentage_24h < 0
          ? "hover:border-red hover:shadow-rose-500/30 hover:scale-105 "
          : "hover:border-green hover:shadow-green/30 hover:scale-105 "
      }`}
        >
          <div className="flex gap-4 items-center mb-4">
            <img
              src={coin.image}
              alt={`${coin.name} logo`}
              className="w-12 h-12"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold uppercase">{coin.id}</h3>
              <p className="text-gray-300 text-sm">{coin.name}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <p
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                coin.price_change_percentage_24h < 0
                  ? "border-red text-red hover:bg-red/90 hover:text-black duration-200"
                  : "border-green text-green hover:bg-green/90 hover:text-black duration-200"
              }`}
            >
              {coin.price_change_percentage_24h > 0 && "+"}
              {coin.price_change_percentage_24h}%
            </p>
            {coin.price_change_percentage_24h < 0 ? (
              <span className="rounded-full px-4 py-2">
                <BsGraphDownArrow className="text-red text-2xl" />
              </span>
            ) : (
              <span className="rounded-full px-4 py-2">
                <BsGraphUpArrow className="text-green text-2xl" />
              </span>
            )}
          </div>

          <div className="flex flex-col items-start gap-2">
            <p
              className={`text-lg font-semibold ${
                coin.price_change_percentage_24h >= 0
                  ? "text-green"
                  : "text-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
            <div className="text-sm text-gray-300">
              Volume: $ {coin.total_volume.toLocaleString()}
            </div>
            <div className="text-sm text-gray-300">
              Market Cap: $ {coin.market_cap.toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
