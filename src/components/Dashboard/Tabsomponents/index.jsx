import  { useState } from "react";
import ListView from "../ListView";
import GridView from "../GridView";

const TabComponents = ({coins}) => {
  const [activeTab, setActiveTab] = useState("grid");

  console.log(coins)

  return (
    <div className="mt-14 p-4  w-full lg:max-w-screen-xl max-w-screen-md mx-auto">
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
          <ListView coins = {coins}/>
        ) : (
          <GridView coins = {coins} />
        )}
      </div>
    </div>
  );
};

export default TabComponents;
