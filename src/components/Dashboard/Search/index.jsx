import { BiSearch } from "react-icons/bi";

const Search = ({search , setSearch}) => {
  return (
    <div
      className={`w-[90%] max-w-2xl mx-auto
        dark:bg-dark-grey bg-gray-100 relative rounded-full
      }`}
    >
        <BiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-primary-color text-2xl" />
      <input
        type="text"
        placeholder="Search..."
        className={`w-full rounded-full px-14 py-3 md:py-3 text-sm transition-all  border-primary-color duration-200 ease-in-out
          dark:bg-dark-grey dark:text-white dark:placeholder:text-gray-200
          }
          focus:outline-none`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
