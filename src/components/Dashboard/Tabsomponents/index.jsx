import  { useState } from "react";
import ListView from "../ListView";
import GridView from "../GridView";
import Search from "../Search";

const TabComponents = ({coins, loading}) => {
  const [activeTab, setActiveTab] = useState("grid");

  return (
    <div className="mt-10 p-4  w-full lg:max-w-screen-xl max-w-screen-md mx-auto">
      <div className="grid grid-cols-2 border-b border-gray-700">
        <div
          className={`text-center cursor-pointer text-sm md:text-lg ${
            activeTab === "grid" ? "font-bold text-primary-color border-b border-primary-color" : "text-gray-200"
          }`}
          onClick={() => setActiveTab("grid")}
        >
          Grid View
        </div>
        <div
          className={`text-center cursor-pointer text-sm md:text-lg ${
            activeTab === "list" ? "font-bold text-primary-color border-b border-primary-color" : "text-gray-200"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List View
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "list" ? (
          <ListView coins = {coins} loading={loading}/>
        ) : (
          <GridView coins = {coins} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default TabComponents;
