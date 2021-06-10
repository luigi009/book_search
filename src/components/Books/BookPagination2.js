import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function BooksPagination({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  previousPage,
  pageCount,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between lg:hidden">
          {/* Previous Button for mobile */}
          {currentPage === 1 ? (
            <button
              onClick={() => previousPage()}
              className="relative cursor-pointer hidden items-center p-4 border border-blue-900 text-sm font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5 text-blue-900"
                aria-hidden="true"
              />
            </button>
          ) : (
            <button
              onClick={() => previousPage()}
              className="relative cursor-pointer inline-flex items-center p-4 border border-blue-900 text-sm font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5 text-blue-900"
                aria-hidden="true"
              />
            </button>
          )}

          {/* Next Button for mobile */}
          {currentPage === pageCount ? (
            <button
              onClick={() => nextPage()}
              className="ml-3 relative cursor-pointer hidden items-center p-4 border border-blue-900 text-sm font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5 text-blue-900"
                aria-hidden="true"
              />
            </button>
          ) : (
            <button
              onClick={() => nextPage()}
              className="ml-3 relative cursor-pointer inline-flex items-center px-4 py-2 border border-blue-900 text-sm font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5 text-blue-900"
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        <div className="hidden lg:flex-1 lg:flex lg:items-center justify-center">
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              {/* Previous Button */}
              {currentPage === 1 ? (
                <button
                  id="previousBtn"
                  onClick={() => previousPage()}
                  className="relative cursor-pointer hidden items-center p-4 rounded-2xl border border-blue-900 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon
                    className="h-5 w-5 text-blue-900"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  id="previousBtn"
                  onClick={() => previousPage()}
                  className="relative cursor-pointer inline-flex items-center p-4 rounded-2xl border border-blue-900 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon
                    className="h-5 w-5 text-blue-900"
                    aria-hidden="true"
                  />
                </button>
              )}

              {/* Number of pages */}
              {pageNumbers.map((number, index) =>
                // Current Page
                index === currentPage - 1 ? (
                  <div
                    style={{ margin: "10px" }}
                    className="z-10 bg-blue-900 border-blue-900 text-white relative rounded-2xl inline-flex items-center p-4 border text-sm font-bold"
                    key={number}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  </div>
                ) : (
                  <div
                    style={{ margin: "10px" }}
                    className="z-10 bg-white border-blue-900 text-blue-900 relative rounded-2xl inline-flex items-center p-4 border text-sm font-bold"
                    key={number}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  </div>
                )
              )}

              {/* Next Button */}
              {currentPage === pageCount ? (
                <button
                  id="nextBtn"
                  onClick={() => nextPage()}
                  className="relative cursor-pointer hidden items-center p-4 rounded-2xl border border-blue-900 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon
                    className="h-5 w-5 text-blue-900"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  id="nextBtn"
                  onClick={() => nextPage()}
                  className="relative cursor-pointer inline-flex items-center p-4 rounded-2xl border border-blue-900 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon
                    className="h-5 w-5 text-blue-900"
                    aria-hidden="true"
                  />
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksPagination;
