import { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

import ListView from "../ListView";
import GridView from "../GridView";
import TableLoader from "../../Common/TableLoader";
import GridLoader from "../../Common/GridLoader";
import LoaderSpinner from "../../Common/LoaderSpinner";
import NoDataFound from "../../Common/NoDataFound";
import Pagination from "../Pagination";
import BackToTop from "../../Common/BackToTop";
import Search from "../Search";
import { fetchCoin } from "../../../api/getData";

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState("grid");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data: coins = [], isLoading } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoin(page),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const filteredCoins = useMemo(() => {
    if (!search) return coins;
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, coins]);

  const handleTabSwitch = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (!coins || coins.length === 0) {
    return <NoDataFound />;
  }

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
          onClick={() => handleTabSwitch("grid")}
        >
          Grid View
        </div>
        <div
          className={`text-center cursor-pointer text-sm md:text-lg ${
            activeTab === "list"
              ? "font-bold text-primary-color border-b border-primary-color dark:text-primary-color dark:border-b dark:border-primary-color"
              : "text-dark-grey dark:text-gray-400"
          }`}
          onClick={() => handleTabSwitch("list")}
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
          <ListView coins={filteredCoins} />
        ) : (
          <GridView coins={filteredCoins} />
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
