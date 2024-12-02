import { useState } from "react";
import ListView from "../ListView";
import GridView from "../GridView";

const TabComponents = ({ coins, loading }) => {
  const [activeTab, setActiveTab] = useState("grid");

  return (
    <div className="mt-10 p-4 w-full lg:max-w-screen-xl max-w-screen-md mx-auto">
      <div className="grid grid-cols-2 dark:border-gray-300">
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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary-color dark:border-primary-color"></div>
          </div>
        ) : activeTab === "list" ? (
          <ListView coins={coins} />
        ) : (
          <GridView coins={coins} />
        )}
      </div>
    </div>
  );
};

export default TabComponents;
