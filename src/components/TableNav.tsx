import React from "react";

export default function TableNav({
  page,
  setPage,
  totalPages,
}: {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}) {
  return (
    <ul className="inline-flex items-stretch -space-x-px">
      <li>
        <a
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className={
            "flex items-center justify-center h-full py-1.5 px-3 leading-tight rounded-l-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white " +
            (page > 1 ? "cursor-pointer " : "cursor-not-allowed")
          }
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
      {Array.from({ length: totalPages == 0 ? 1 : totalPages }, (_, i) => (
        <li
          key={i}
          onClick={() => setPage(i + 1)}
          className={
            "flex items-center justify-center cursor-pointer text-sm py-2 px-3 leading-tight border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white " +
            (page === i + 1 ? "bg-gray-800" : "false")
          }
        >
          {i + 1}
        </li>
      ))}
      <li>
        <a
          onClick={() => {
            if (page < totalPages) setPage(page + 1);
          }}
          className={
            "flex items-center justify-center h-full py-1.5 px-3 leading-tight rounded-r-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white " +
            (page < totalPages ? "cursor-pointer" : "cursor-not-allowed")
          }
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
}
