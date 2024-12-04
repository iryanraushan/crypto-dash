import { useState } from "react";
import ListView from "../ListView";
import GridView from "../GridView";
import TableLoader from "../../Common/TableLoader";
import GridLoader from "../../Common/GridLoader";
import { useQuery } from "@tanstack/react-query";
import { fetchCoin } from "../../../api/getData";
import LoaderSpinner from "../../Common/LoaderSpinner";
import NoDataFound from "../../Common/NoDataFound";
import Pagination from "../Pagination";
import BackToTop from "../../Common/BackToTop";
import Search from "../Search";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState("grid");

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoin,
  });

  const filterCoins = (query) => {
    return data.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (!data || data.length === 0) {
    return <NoDataFound />;
  }

  const filteredCoins = search ? filterCoins(search) : data;

  const paginatedCoins = filteredCoins.slice((page - 1) * 10, page * 10);

  return (
    <div className="mt-10 p-4 w-full lg:max-w-screen-xl max-w-screen-md mx-auto">
      <Search search={search} setSearch={setSearch} />
      <div className="grid grid-cols-2 dark:border-gray-300 mt-10">
        <div
          className={`text-center cursor-pointer text-sm md:text-lg ${
            activeTab === "grid"
              ? "font-bold text-primary-color border-b border-primary-color dark:text-primary-color dark:border-b dark:border-primary-color"
              : "text-dark-grey dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("grid")}
        >
          Grid View
        </div>
        <div
          className={`text-center cursor-pointer text-sm md:text-lg ${
            activeTab === "list"
              ? "font-bold text-primary-color border-b border-primary-color dark:text-primary-color dark:border-b dark:border-primary-color"
              : "text-dark-grey dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List View
        </div>
      </div>

      <div className="mt-6">
        {isLoading ? (
          activeTab === "list" ? (
            <TableLoader />
          ) : (
            <GridLoader />
          )
        ) : activeTab === "list" ? (
          <ListView coins={search ? filteredCoins : paginatedCoins} />
        ) : (
          <GridView coins={search ? filteredCoins : paginatedCoins} />
        )}
      </div>

      {!search && <Pagination currentPage={page} setPage={setPage} />}
      <div>
        <BackToTop />
      </div>
    </div>
  );
};

export default TabComponents;
