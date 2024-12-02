import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabComponents from "../components/Dashboard/Tabsomponents";
import axios from "axios";
import Pagination from "../components/Dashboard/Pagination";
import BackToTop from "../components/Common/BackToTop";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  };

  return (
    <div className="pb-10 dark:bg-secondary-color h-full">
      <Header search={search} setSearch={setSearch} />
      <TabComponents
        coins={search ? filterCoins : paginatedCoins}
        loading={loading}
      />
      {!search && (
        <Pagination
          totalPages={coins.length / 10}
          onPageChange={(page) =>
            setPaginatedCoins(coins.slice((page - 1) * 10, page * 10))
          }
        />
      )}
      <div>
        <BackToTop />
      </div>
    </div>
  );
};

export default Dashboard;
