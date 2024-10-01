"use client";
import { convertDateTimeToDateFormatter, formatINR } from "@/utils/helpers";
import { IPODetailed } from "@/utils/types";
import React, { useEffect, useState } from "react";

import TableNav from "./TableNav";
import TableTopHeader from "./TableTopHeader";
import Link from "next/link";

export default function Table({
  processedData,
}: {
  processedData: IPODetailed[];
}) {
  const TABLE_HEADERS = [
    "Company Name",
    "Bidding Dates",
    "Listing Date",
    "Status",
    "Price Range",
    "Lot Size",
    "Min. Amount",
    "Issue Size",
    "GMP",
    // "Allotment %",
    // "Recommended",
  ];

  const limit = 10;

  const [currentData, setCurrentData] = React.useState<IPODetailed[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [filterOptions, setFilterOptions] = useState<{
    status: string[];
  }>({
    status: [],
  });

  const [page, setPage] = React.useState(1);

  const [totalPages, setTotalPages] = React.useState<number>(0);

  useEffect(() => {
    // Filter data based on search input if it exists, otherwise use full dataset

    let filteredData = search
      ? processedData.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      : processedData;

    // Filter data based on status if it exists
    if (filterOptions.status.length > 0) {
      const filteredStatusData = filteredData.filter((el) =>
        filterOptions.status.includes(el.status)
      );
      filteredData = filteredStatusData;
    }

    // Calculate total pages based on the filtered data and the limit
    const total = Math.ceil(filteredData.length / limit);
    setTotalPages(total);

    // Calculate the correct slice of data for the current page
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const newData = filteredData.slice(startIndex, endIndex);

    // Update the current data state with the sliced data
    setCurrentData(newData);
  }, [page, limit, search, filterOptions]);

  useEffect(() => {
    // Reset page to 1 when search term changes
    setPage(1);
  }, [search, filterOptions]);

  return (
    <div className="border border-gray-700 relative shadow-md sm:rounded-lg w-full">
      <TableTopHeader
        search={search}
        setSearch={setSearch}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              {TABLE_HEADERS.map((el: string) => (
                <th
                  scope="col"
                  className={"px-4 py-3 truncate max-w-56 "}
                  key={el}
                >
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length === 0 && (
              <tr>
                <td
                  colSpan={TABLE_HEADERS.length}
                  className="px-4 py-3 text-center font-medium text-white"
                >
                  No data found.
                  {filterOptions.status.length > 0 && (
                    <span
                      className="text-blue-400 ml-2 cursor-pointer text-sm underline"
                      onClick={() => {
                        setFilterOptions({ status: [] });
                      }}
                    >
                      Clear filter
                    </span>
                  )}
                </td>
              </tr>
            )}
            {currentData.map((el: IPODetailed, index) => {
              return (
                <Link
                  href={`/ipo-details/${el.slug}`}
                  passHref
                  legacyBehavior
                  key={index}
                >
                  <tr
                    className="border-b border-gray-700 cursor-pointer hover:bg-gray-800"
                    key={index}
                  >
                    <td
                      scope="row"
                      className="px-4 py-3 font-medium whitespace-nowrap text-white truncate max-w-56"
                    >
                      {el.name}
                    </td>
                    <td className="flex px-4 py-3 truncate max-w-36 ">
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
                      <div
                        className={
                          "text-black text-xs rounded-full text-center px-2 py-1 " +
                          (el.status === "Open"
                            ? "bg-green-400"
                            : el.status === "Closed"
                            ? "bg-red-400"
                            : el.status === "Listed"
                            ? "bg-blue-400"
                            : "bg-yellow-400")
                        }
                      >
                        {el.status}
                      </div>
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      ₹{el.priceRange.min ? el.priceRange.min : "--"} - ₹
                      {el.priceRange.max ? el.priceRange.max : "--"}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.details?.sizePerLot
                        ? el.details.sizePerLot + " Shares"
                        : "--"}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.minAmount ? `${formatINR(el.minAmount)}` : "--"}
                    </td>
                    <td className="px-4 py-3 truncate max-w-36">
                      ₹
                      {el.details?.issueSize
                        ? el.details?.issueSize.replace("cr", "Cr")
                        : "--"}
                    </td>
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
                    <td className="px-4 py-3 truncate max-w-36">
                      {el.latestGmp
                        ? "₹" +
                          el.latestGmp +
                          (el.priceRange.max &&
                            " (" +
                              (
                                (el.latestGmp / el.priceRange.max) *
                                100
                              ).toFixed(2)) +
                          "%)"
                        : "--"}
                    </td>
                    {/* <td className="px-4 py-3 truncate max-w-36">
                      {el.applyRecommendation == null
                        ? "N/A"
                        : el.applyRecommendation == true
                        ? "Yes"
                        : "No"}
                    </td> */}
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
        <span className="text-sm font-normaltext-gray-400">
          Showing{" "}
          <span className="font-semibold text-white">
            {currentData.length > 0 ? (page - 1) * limit + 1 : 0} -
            {currentData.length == limit
              ? page * limit
              : (page - 1) * limit + currentData.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {processedData.length}
          </span>
        </span>
        <TableNav page={page} setPage={setPage} totalPages={totalPages} />
      </nav>
    </div>
  );
}
