import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { settingCoinObject } from "../functions/SettingCoinObject";
import CoinHeader from "../components/Coin/CoinHeader";
import Header from "../components/Common/Header";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/selectedDays";
import ToggleComponents from "../components/Coin/ToggleComponents";
import { getCoinData } from "../functions/getCoinData";
import { getPrices } from "../functions/getCoinPrices";
import Footer from "../components/Common/Footer";
import { settingChartData } from "../functions/settingChartData";

const CoinPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getCoinData(id, setError).then((data) => {
        if (data) {
          settingCoinObject(data, setCoin);
        }
      });
    }
  }, [id]);

  const updateChartData = useCallback(async () => {
    setLoading(true);
    const prices = await getPrices(id, days, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
    }
    setLoading(false);
  }, [id, days, priceType]);

  useEffect(() => {
    if (id) {
      updateChartData();
    }
  }, [id, days, priceType, updateChartData]);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  console.log(coin);
  return (
    <>
      <Header />
      {!error && coin.id ? (
        <div className="w-full lg:max-w-screen-xl max-w-screen-md mx-auto mt-12">
          <div>
            <CoinHeader coin={coin} delay={0.5} />
          </div>
          <div className="mt-12">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              setPriceType={setPriceType}
            />
            <LineChart chartData={chartData} id="chart" />
          </div>
          <CoinInfo coin={coin} />
        </div>
      ) : error ? (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to="/" className="px-4 py-2 text-sm font-semibold text-primary-color bg-dark-grey rounded-full">
              Go Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-color"></div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CoinPage;
