import React from "react";
import "./Pagination.css"; // Import raw CSS

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  previousLabel?: string;
  nextLabel?: string;
  activeClassName?: string;
  paginationTheme?: string;
  morePagesLabel?: string;
  containerClassName?: string;
  prevClassName?: string;
  nextClassName?: string;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  previousLabel = "Previous",
  nextLabel = "Next",
  activeClassName = "active",
  paginationTheme = "default",
  morePagesLabel = "...",
  containerClassName = "",
  prevClassName = "",
  nextClassName = "", 
  onPageChange,
}) => {

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage >= 4) {
        pages.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage <= totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };
  
  const pageNumbers = getPageNumbers();

  return (
    <div className={`react-awesome-paginate__container react-awesome-paginate__${paginationTheme}__container ${containerClassName}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={(currentPage === (1 || 0) || currentPage < 0)}
        className={`react-awesome-paginate__button react-awesome-paginate__${paginationTheme}__button ${prevClassName}`}
      >
        { paginationTheme == 'circular' && previousLabel === "Previous" ?  "←" : previousLabel }
      </button>

      <div className={`react-awesome-paginate__pages react-awesome-paginate__${paginationTheme}__pages`}>
        {pageNumbers.map((page, idx) =>
          page === "..." ? (
            <button key={`more__button-${idx}`} className={`react-awesome-paginate__more__button react-awesome-paginate__${paginationTheme}__more__button`}>
              { morePagesLabel }
            </button>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              className={`react-awesome-paginate__button react-awesome-paginate__${paginationTheme}__button ${
                currentPage === page ? activeClassName : ""
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={(currentPage === totalPages) || (totalPages === 0) || (totalPages <= currentPage)}
        className={`react-awesome-paginate__button react-awesome-paginate__${paginationTheme}__button ${nextClassName}`}
      >
        { paginationTheme == 'circular' && nextLabel === "Next" ?  "→" : nextLabel }
      </button>
    </div>
  );
};

export default Pagination;
