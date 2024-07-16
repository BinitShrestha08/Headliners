import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE } from "../utils/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return 1;

  return (
    <div className="w-full flex items-center justify-center">
      <p className="text-lg ml-2">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>
      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center justify-center gap-1.5 py-1.5 px-3 text-lg font-medium transition-colors duration-300 rounded-sm ${
            currentPage === 1 ? "bg-gray-50" : "bg-brand-600 text-brand-50"
          } ${currentPage !== 1 && "hover:bg-brand-600 hover:text-brand-50"}`}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex items-center justify-center gap-1.5 py-1.5 px-3 text-lg font-medium transition-colors duration-300 rounded-sm ${
            currentPage === pageCount
              ? "bg-gray-50"
              : "bg-brand-600 text-brand-50"
          } ${
            currentPage !== pageCount &&
            "hover:bg-brand-600 hover:text-brand-50"
          }`}
        >
          <HiChevronRight /> <span>Next</span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
