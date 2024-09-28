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

export function convertDateTimeToDateFormatter(dateTime: string): string {
  const date = new Date(dateTime);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${day} ${MONTH_NAMES_SHORT[month]}`;
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

export const IPOStatus = {
  Upcoming: "Upcoming",
  Open: "Open",
  Closed: "Closed",
  Listed: "Listed",
  Unknown: "Unknown",
};
