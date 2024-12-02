const SelectDays = ({ days, handleDaysChange, noPTag }) => {
  return (
    <div className={`flex items-center space-x-2 ${noPTag ? "mb-0" : "mb-4"}`}>
      {!noPTag && <p className="text-white text-sm">Price change in</p>}
      <select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        className="bg-transparent text-white border border-white rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500"
      >
        <option value={7}>7 Days</option>
        <option value={30}>30 Days</option>
        <option value={60}>60 Days</option>
        <option value={90}>90 Days</option>
        <option value={120}>120 Days</option>
        <option value={365}>1 Year</option>
      </select>
    </div>
  );
}

export default SelectDays;
