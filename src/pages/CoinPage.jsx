import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinObject } from "../functions/CoinObject";
import CoinHeader from "../components/Coin/CoinHeader";
import Header from "../components/Common/Header";
import CoinInfo from "../components/Coin/CoinInfo";
import Footer from "../components/Common/Footer";
import { getCoinData } from "../functions/getCoinData";
import { getPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { settingChartData } from "../functions/settingChartData";
import SelectDays from "../components/Coin/selectedDays";
import ToggleComponents from "../components/Coin/ToggleComponents";

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
      getData();
    }
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinData(id, setError);
    CoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      {!error && !loading && coin.id ? (
        <div className="w-full lg:max-w-screen-xl max-w-screen-md mx-auto mt-12">
          <div className="">
            <CoinHeader coin={coin} delay={0.5} />
          </div>
          <div className="">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo title={coin.name} desc={coin.desc} image={coin.image} symbol={coin.symbol}/>
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
            <button>gg</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary-color"></div>
        </div>
      )}
    </>
  );
};

export default CoinPage;
