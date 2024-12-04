import { CiBitcoin } from "react-icons/ci";

const NoDataFound = () => {
  return (
    <div className="flex justify-center flex-col gap-6 items-center h-[calc(100vh-100px)]">
      <CiBitcoin className="text-[5rem] text-primary-color dark:text-primary-color" />
      <h1 className="text-2xl font-bold text-primary-color dark:text-primary-color">
        No coins found
      </h1>
    </div>
  );
};

export default NoDataFound;
