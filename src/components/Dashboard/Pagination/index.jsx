import  { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      if (onPageChange) {
        onPageChange(page);
      }
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }
      for (
        let i = Math.max(currentPage - 1, 2);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };


  return (
    <div className="flex justify-center mt-8">
      <nav aria-label="Page navigation">
        <ul className="flex items-center gap-2 h-10 text-base">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-4 h-10 rounded-full border border-primary-color hover:bg-primary-color hover:text-gray-700 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              aria-label="Previous"
            >
              <GrFormPrevious className="text-xl text-primary-color hover:text-black" />
            </button>
          </li>

          {generatePageNumbers().map((page, index) => (
            <li key={index}>
              {typeof page === "number" ? (
                <button
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center px-4 h-10 rounded-full ${
                    page === currentPage
                      ? "text-black bg-primary-color border-primary-color "
                      : "text-white bg-secondary-color border border-primary-color hover:scale-105"
                  }`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </button>
              ) : (
                <span className="px-2 text-gray-500">...</span>
              )}
            </li>
          ))}

          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-4 h-10 rounded-full border border-primary-color hover:bg-primary-color hover:text-black ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              aria-label="Next"
            >
              <GrFormPrevious className="text-xl rotate-180 text-primary-color hover:text-black" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
