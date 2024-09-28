import React from "react";

export default function TableTopHeader({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="w-full md:w-1/2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
            placeholder="Search for IPO by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <button
            id="filterDropdownButton"
            data-dropdown-toggle="filterDropdown"
            className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium focus:outline-none rounded-lg border hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-4 w-4 mr-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"
              />
            </svg>
            Filter
            <svg
              className="-mr-1 ml-1.5 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            id="filterDropdown"
            className="z-10 hidden w-48 p-3rounded-lg shadow bg-gray-700"
          >
            <h6 className="mb-3 text-sm font-mediumtext-white">Choose brand</h6>
            <ul
              className="space-y-2 text-sm"
              aria-labelledby="filterDropdownButton"
            >
              <li className="flex items-center">
                <input
                  id="apple"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                />
                <label
                  htmlFor="apple"
                  className="ml-2 text-sm font-medium text-gray-100"
                >
                  Apple (56)
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
