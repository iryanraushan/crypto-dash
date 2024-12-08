import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { settingCoinObject } from "../functions/SettingCoinObject";
import CoinHeader from "../components/Coin/CoinHeader";
import Header from "../components/Common/Header";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/selectedDays";
import ToggleComponents from "../components/Coin/ToggleComponents";
import Footer from "../components/Common/Footer";
import { settingChartData } from "../functions/settingChartData";
import { getCoinData } from "../api/getCoinData";
import { getPrices } from "../api/getCoinPrices";
import { useQuery } from "@tanstack/react-query";

const CoinPage = () => {
  const { id } = useParams();
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  const {
    data,
    isLoading: isCoinLoading,
    isError: isCoinError,
  } = useQuery({
    queryKey: ["coin"],
    queryFn: () => getCoinData(id),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data) {
      settingCoinObject(data, setCoin);
    }
  }, [data]);

  const {
    data: prices,
    isLoading: isPricesLoading,
    isError: isPricesError,
    refetch: refetchPrices,

  } = useQuery({
    queryKey: ["prices", days, priceType],
    queryFn: () => getPrices(id, days, priceType),
    staleTime: 1000 * 60 * 1,
  });

  useEffect(() => {
    if (prices) {
      settingChartData(setChartData, prices);
    }
  }, [prices, days, priceType]);

  const handleRefetch = () => {
    refetchPrices();
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  if (isCoinLoading || isPricesLoading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-color"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (isCoinError || isPricesError) {
    return (
      <>
        <Header />
        <div>
          <h1 className="text-center text-lg font-medium">
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-semibold text-primary-color bg-dark-grey rounded-full"
            >
              Go Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (
    coin.id &&
    !isCoinLoading &&
    !isCoinError &&
    !isPricesLoading &&
    !isPricesError
  ) {
    return (
      <>
        <Header />
        <div className="w-full lg:max-w-screen-xl max-w-screen-md mx-auto mt-12">
          <div>
            <CoinHeader coin={coin} delay={0.5} />
          </div>
          <div className="mt-12 relative">
            <button
              onClick={handleRefetch}
              className="px-4 py-2 text-sm absolute top-0 right-0 font-semibold text-primary-color bg-dark-grey rounded-full"
            >
              Refresh
            </button>
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              setPriceType={setPriceType}
            />
            <LineChart chartData={chartData} id="chart" />
          </div>
          <CoinInfo coin={coin} />
        </div>
        <Footer />
      </>
    );
  }
};

export default CoinPage;
