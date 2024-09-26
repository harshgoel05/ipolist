"use client";
import React, { useEffect } from "react";
import data from "./data.json";
import { IPO } from "../utils/types";
import {
  calculateStatusAccordingToDate,
  convertDateTimeToDateFormatter,
} from "../utils/helpers";
import Link from "next/link";
export default function Table() {
  const limit = 10;

  const [currentData, setCurrentData] = React.useState<IPO[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [page, setPage] = React.useState(1);

  const [totalPages, setTotalPages] = React.useState<number>(0);

  useEffect(() => {
    const filteredData = search
      ? data.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      : data;

    const total = Math.ceil(filteredData.length / limit);
    setTotalPages(total);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const newData = filteredData.slice(startIndex, endIndex);

    setCurrentData(newData);
  }, [page, limit, search]);

  return (
    <div className="bg-[#202020] border border-gray-700 shadow-md sm:rounded-lg w-full">
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
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-[#333] border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
              placeholder="Search for IPO by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-[#2A2A2A]">
            <tr>
              {[
                "Company Name",
                "Bidding Dates",
                "Listing Date",
                "Price Range",
                "Lot Size",
                "Stage",
                "Min. Amount",
                "Issue Size",
                "GMP",
                "Allotment %",
                "Recommended",
              ].map((el: string) => (
                <th scope="col" className="px-4 py-3 truncate" key={el}>
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
                <Link href={`/${el.name}`}  key={index}>
                  <tr className="border-b border-gray-600" key={index}>
                    <td
                      scope="row"
                      className="px-4 py-3 font-medium text-white whitespace-nowrap truncate"
                    >
                      {el.name}
                    </td>
                    <td className="px-4 py-3 truncate">
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
                    </td>
                    <td className="px-4 py-3 truncate">
                      {convertDateTimeToDateFormatter(el.listingDate)}
                    </td>
                    <td className="px-4 py-3 truncate">
                      {el.priceRange.min} - {el.priceRange.max}
                    </td>
                    <td className="px-4 py-3 truncate">
                      {el.sizePerLot} Shares
                    </td>
                    <td className="px-4 py-3 truncate">
                      <div
                        className={
                          "text-xs rounded-full text-center px-2 py-1 " +
                          (status === "Open"
                            ? "bg-green-400 text-black"
                            : status === "Closed"
                            ? "bg-red-400 text-black"
                            : status === "Listed"
                            ? "bg-blue-400 text-black"
                            : "bg-yellow-400 text-black")
                        }
                      >
                        {status}
                      </div>
                    </td>
                    <td className="px-4 py-3 truncate">
                      {el.priceRange.min * el.sizePerLot}
                    </td>
                    <td className="px-4 py-3 truncate">₹3810.34 Cr</td>
                    <td className="px-4 py-3 truncate font-semibold">
                      <p
                        className={
                          el.gmpDetails.latestGmpPrice > el.priceRange.max * 1.5
                            ? "text-green-500"
                            : ""
                        }
                      >
                        ₹{el.gmpDetails.latestGmpPrice} (
                        {Math.round(
                          ((el.gmpDetails.latestGmpPrice + el.priceRange.max) *
                            100) /
                            el.priceRange.max
                        )}
                        %)
                      </p>
                    </td>
                    <td className="px-4 py-3 truncate">Cs.</td>
                    <td className="px-4 py-3 truncate">
                      {el.applyRecommendation == null
                        ? "N/A"
                        : el.applyRecommendation == true
                        ? "Yes"
                        : "No"}
                    </td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-400">
          Showing
          <span className="font-semibold text-white">
            {(page - 1) * limit + 1} -
            {page * limit >= data.length ? data.length : page * limit}
          </span>
          of
          <span className="font-semibold text-white">{data.length}</span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-400 bg-[#2A2A2A] rounded-l-lg border border-gray-600 hover:bg-gray-600 hover:text-white"
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
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              onClick={() => setPage(i + 1)}
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-400 bg-[#2A2A2A] border border-gray-600 hover:bg-gray-600 hover:text-white"
            >
              {i + 1}
            </li>
          ))}
          <li>
            <a
              onClick={() => {
                if (page < totalPages) setPage(page + 1);
              }}
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-400 bg-[#2A2A2A] rounded-r-lg border border-gray-600 hover:bg-gray-600 hover:text-white"
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
      </nav>
    </div>
  );
}
