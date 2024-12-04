import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ currentPage, setPage }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="flex justify-center mt-8 w-full lg:max-w-screen-xl max-w-screen-md mx-auto">
      <nav>
        <ul className="flex items-center gap-2 h-10 text-base">
          <li>
            <button
              onClick={() => setPage(prevPage)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-2 md:px-4 h-8 rounded-full  ${
                currentPage === 1
                  ? "bg-neutral-300 dark:bg-dark-grey"
                  : "hover:bg-primary-color hover:text-gray-700 bg-neutral-200 dark:bg-dark-grey dark:text-white"
              }`}
              aria-label="Previous"
            >
              <GrFormPrevious className="text-xl" />
            </button>
          </li>

          {prevPage > 0 && (
            <li>
              <button
                onClick={() => setPage(prevPage)}
                className="flex items-center justify-center px-3 md:px-4 h-8 rounded-full hover:bg-primary-color hover:text-black bg-neutral-200 dark:bg-dark-grey dark:text-white"
              >
                {prevPage}
              </button>
            </li>
          )}

          <li>
            <button
              disabled
              className="flex items-center justify-center px-3 md:px-4 h-8 rounded-full bg-primary-color text-white"
            >
              {currentPage}
            </button>
          </li>

            <li>
              <button
                onClick={() => setPage(nextPage)}
                className="flex items-center justify-center px-3 md:px-4 h-8 rounded-full hover:bg-primary-color hover:text-black bg-neutral-200 dark:bg-dark-grey dark:text-white"
              >
                {nextPage}
              </button>
            </li>

          <li>
            <button
              onClick={() => setPage(nextPage)}
              className={`flex items-center justify-center px-2 md:px-4 h-8 rounded-full  
                  hover:bg-primary-color hover:text-gray-700 bg-neutral-200 dark:bg-dark-grey dark:text-white
              }`}
              aria-label="Next"
            >
              <GrFormPrevious className="text-xl rotate-180" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
