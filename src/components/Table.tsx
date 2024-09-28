"use client";
import {
  calculateStatusAccordingToDate,
  convertDateTimeToDateFormatter,
} from "@/utils/helpers";
import { IPO } from "@/utils/types";
import React, { useEffect } from "react";
import data from "@/utils/data.json";
export default function Table() {
  const limit = 10;

  const [currentData, setCurrentData] = React.useState<IPO[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [page, setPage] = React.useState(1);

  const [totalPages, setTotalPages] = React.useState<number>(0);

  useEffect(() => {
    // Filter data based on search input if it exists, otherwise use full dataset
    const filteredData = search
      ? data.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      : data;

    // Calculate total pages based on the filtered data and the limit
    const total = Math.ceil(filteredData.length / limit);
    setTotalPages(total);

    // Calculate the correct slice of data for the current page
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const newData = filteredData.slice(startIndex, endIndex);

    // Update the current data state with the sliced data
    setCurrentData(newData);
  }, [page, limit, search]);

  return (
    <div className="px-7">
      <div className="border border-gray-700 relative shadow-md sm:rounded-lg w-full">
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
                <h6 className="mb-3 text-sm font-mediumtext-white">
                  Choose brand
                </h6>
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {[
                  "Company Name",
                  "Bidding Dates",
                  "Listing Date",
                  "Price Range",
                  "Lot Size",
                  "Stage",
                  "Min. aMOUNT",
                  "Issue Size",
                  "GMP",
                  "Allotment %",
                  "Recommended",
                ].map((el: string) => (
                  <th
                    scope="col"
                    className="px-4 py-3 truncate max-w-56"
                    key={el}
                  >
                    {el}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((el: IPO, index) => {
                const status = calculateStatusAccordingToDate(
                  el.startDate,
                  el.endDate,
                  el.listingDate
                );
                return (
                  <tr className="border-b dark:border-gray-700" key={index}>
                    <td
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate max-w-56"
                    >
                      {el.name}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36 ">
                      {el.startDate && (
                        <p
                          className={
                            new Date(el.startDate).getDate() ===
                            new Date().getDate()
                              ? "text-green-500"
                              : ""
                          }
                        >
                          {convertDateTimeToDateFormatter(el.startDate)} -{" "}
                        </p>
                      )}
                      {el.endDate && (
                        <p
                          className={
                            new Date(el.endDate).getDate() ===
                            new Date().getDate()
                              ? "text-red-500"
                              : ""
                          }
                        >
                          {convertDateTimeToDateFormatter(el.endDate)}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.listingDate
                        ? convertDateTimeToDateFormatter(el.listingDate)
                        : "--"}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.priceRange.min} - {el.priceRange.max}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.details.sizePerLot ?? "--"} Shares
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      <div
                        className={
                          "text-black text-xs rounded-full text-center px-2 py-1 " +
                          (status === "Open"
                            ? "bg-green-400"
                            : status === "Closed"
                            ? "bg-red-400"
                            : status === "Listed"
                            ? "bg-blue-400"
                            : "bg-yellow-400")
                        }
                      >
                        {status}
                      </div>
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.priceRange.min && el.details.sizePerLot
                        ? el.priceRange.min * el.details.sizePerLot
                        : "--"}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">₹3810.34 Cr</td>
                    {/* <td className="px-4 py-3 truncate max-w-36 font-semibold">
                      {el.priceRange.max && el.details.sizePerLot && (
                        <p
                          className={
                            el.priceRange.max > el.details.sizePerLot * 1.5
                              ? "text-green-500"
                              : ""
                          }
                        >
                          ₹{el.gmpDetails.latestGmpPrice} (
                          {Math.round(
                            ((el.gmpDetails.latestGmpPrice +
                              el.priceRange.max) *
                              100) /
                              el.priceRange.max
                          )}
                          %)
                        </p>
                      )}
                    </td> */}
                    <td className="px-4 py-3 truncate max-w-36">Cs.</td>
                    {/* <td className="px-4 py-3 truncate max-w-36">
                      {el.applyRecommendation == null
                        ? "N/A"
                        : el.applyRecommendation == true
                        ? "Yes"
                        : "No"}
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">
              {(page - 1) * limit + 1} -
              {page * limit >= data.length ? data.length : page * limit}
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <a
                onClick={() => {
                  if (page > 1) setPage(page - 1);
                }}
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                onClick={() => setPage(i + 1)}
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {i + 1}
              </li>
            ))}
            <li>
              <a
                onClick={() => {
                  if (page < totalPages) setPage(page + 1);
                }}
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
