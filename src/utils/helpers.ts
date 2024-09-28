import { IPOStatus } from "./types";

export const MONTH_NAMES_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatINR(amount: number | null | undefined): string {
  if (!amount) {
    return "--";
  }
  const rupeeSymbol = "₹";

  // Convert the number to a string with two decimal places
  const amountStr = amount.toFixed(2);

  // Split the integer and decimal parts
  const [integerPart, decimalPart] = amountStr.split(".");

  // Reverse the integer part for easier grouping
  const reversedInteger = integerPart.split("").reverse().join("");

  // Add commas according to the Indian numbering system
  const groupedInteger: string[] = [];

  // First group of 3 digits
  groupedInteger.push(reversedInteger.slice(0, 3));

  // Next groups of 2 digits
  for (let i = 3; i < reversedInteger.length; i += 2) {
    groupedInteger.push(reversedInteger.slice(i, i + 2));
  }

  // Join the groups and reverse it back
  const formattedInteger = groupedInteger
    .join(",")
    .split("")
    .reverse()
    .join("");

  // Return the formatted amount with the rupee symbol
  if (decimalPart === "00") {
    return `${rupeeSymbol}${formattedInteger}`;
  }
  return `${rupeeSymbol}${formattedInteger}.${decimalPart}`;
}

export function convertDateTimeToDateFormatter(dateTime: string): string {
  const date = new Date(dateTime);
  const day = date.getDate();
  const month = date.getMonth();
  return `${day} ${MONTH_NAMES_SHORT[month]}`;
}

export function convertDateTimeToFullFormatter(
  dateTime: string | null
): string {
  try {
    if (!dateTime) return "--";
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${MONTH_NAMES_SHORT[month]} ${year}`;
  } catch (e) {
    console.log(e);
    return "--";
  }
}

export function calculateStatusAccordingToDate(
  startDate: string | null,
  endDate: string | null,
  listingDate: string | null
): (typeof IPOStatus)[keyof typeof IPOStatus] {
  if (!startDate || !endDate || !listingDate) {
    return IPOStatus.Unknown;
  }

  const currentDate = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  const listing = new Date(listingDate);

  if (currentDate > listing) {
    return IPOStatus.Listed;
  } else if (currentDate < start) {
    return IPOStatus.Upcoming;
  } else if (currentDate >= start && currentDate <= end) {
    return IPOStatus.Open;
  } else {
    return IPOStatus.Closed;
  }
}
