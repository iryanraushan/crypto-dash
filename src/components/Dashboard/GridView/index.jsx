import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { CiBitcoin } from "react-icons/ci";
import { Link } from "react-router-dom";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-color"></div>
    </div>
  );
};

const GridView = ({ coins, loading }) => {

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
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {coins.map((coin) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <div
                key={coin.id}
                className={`flex flex-col gap-6 p-4 cursor-pointer rounded-xl shadow-md bg-secondary-color text-center min-w-[19rem] h-80 transform transition-all duration-300 ease-in-out
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
                    <h3 className="text-sm font-bold uppercase">{coin.id}</h3>
                    <p className="text-gray-300 text-xs text-wrap">{coin.name}</p>
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default GridView;
