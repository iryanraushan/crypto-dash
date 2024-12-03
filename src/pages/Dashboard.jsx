import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabComponents from "../components/Dashboard/Tabsomponents";
import Pagination from "../components/Dashboard/Pagination";
import BackToTop from "../components/Common/BackToTop";
import { useCoins } from "../context/CoinContext";

const Dashboard = () => {
  const { coins, loading, setCoins, page, setPage } = useCoins();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const filterCoins = (query) => {
    if (!query) return coins;
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
  };

  const debounceSearch = debounce((query) => {
    setSearchResults(filterCoins(query));
  }, 500);

  useEffect(() => {
    if (search) {
      debounceSearch(search);
    } else {
      setCoins(coins); 
    }
  }, [search, debounceSearch, setCoins, coins]);

  const paginatedCoins = coins.slice((page - 1) * 10, page * 10);

  return (
    <div className="pb-10 dark:bg-secondary-color h-full">
      <Header search={search} setSearch={setSearch} />
      <TabComponents coins={search ? searchResults : paginatedCoins} loading={loading} />
      {!search && <Pagination currentPage={page} setPage={setPage} />}
      <div>
        <BackToTop />
      </div>
    </div>
  );
};

export default Dashboard;
