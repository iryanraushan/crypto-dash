const TableLoader = () => {
  return (
    <div className="">
      <table className="w-full border-collapse rounded-lg shadow-md overflow-hidden bg-neutral-100 dark:bg-dark-grey">
        <thead>
          <tr className="bg-primary-color/50 text-gray-800 dark:text-gray-300">
            <th className="p-4 text-left text-sm">Coin</th>
            <th className="p-4 text-left text-sm">Current Price</th>
            <th className="p-4 text-left text-sm">24h Change</th>
            <th className="p-4 text-left text-sm">Volume</th>
            <th className="p-4 text-left text-sm hidden md:table-cell">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="border-t border-gray-700 items-center">
              <td className="p-4 flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                <div className="flex flex-col gap-1">
                  <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  <div className="w-12 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                </div>
              </td>

              <td className="p-4">
                <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </td>

              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  <div className="hidden md:block w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                </div>
              </td>

              <td className="p-4">
                <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </td>

              <td className="p-4 hidden md:table-cell">
                <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLoader;
