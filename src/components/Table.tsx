"use client";
import {
  calculateStatusAccordingToDate,
  convertDateTimeToDateFormatter,
} from "@/utils/helpers";
import { IPO } from "@/utils/types";
import React, { useEffect } from "react";
import data from "@/utils/data.json";
import TableNav from "./TableNav";
import TableTopHeader from "./TableTopHeader";
import { useRouter } from "next/navigation";

export default function Table() {
  const TABLE_HEADERS = [
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
  ];
  const limit = 10;

  const [currentData, setCurrentData] = React.useState<IPO[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [page, setPage] = React.useState(1);

  const [totalPages, setTotalPages] = React.useState<number>(0);

  useEffect(() => {
    // Filter data based on search input if it exists, otherwise use full dataset
    let filteredData = search
      ? data.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      : data;
    // Sort the filtered data based on the start date
    filteredData = filteredData.sort(
      (a, b) => +new Date(b.startDate || 0) - +new Date(a.startDate || 0)
    );

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

  useEffect(() => {
    // Reset page to 1 when search term changes
    setPage(1);
  }, [search]);

  const router = useRouter();

  return (
    <div className="border border-gray-700 relative shadow-md sm:rounded-lg w-full">
      <TableTopHeader search={search} setSearch={setSearch} />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {TABLE_HEADERS.map((el: string) => (
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
                <tr
                  className="border-b dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  key={index}
                  onClick={() => {
                    router.push(`/ipo/${el.slug}`);
                  }}
                >
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
        <TableNav page={page} setPage={setPage} totalPages={totalPages} />
      </nav>
    </div>
  );
}
