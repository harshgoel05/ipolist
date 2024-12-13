/* eslint-disable @next/next/no-img-element */
import {
  calculateStatusAccordingToDate,
  convertDateTimeToFullFormatter,
  formatINR,
} from "@/utils/helpers";
import PriceChart from "@/components/LineChart";
import Link from "next/link";
import { API_BASE_URL, API_END_POINTS } from "@/utils/constants";
import { IPODetailed } from "@/utils/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const ipoList: IPODetailed[] = await fetch(
    API_BASE_URL + API_END_POINTS.calendar
  ).then((res) => res.json());
  return ipoList.map((ipo: IPODetailed) => ({
    slug: String(ipo.slug),
  }));
}

export default async function IpoDetails({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch data from the server
  let selectedIpoData: IPODetailed | null = null;
  try {
    const { slug } = params;

    const res = await fetch(API_BASE_URL + API_END_POINTS.details + slug);

    if (!res.ok) {
      notFound(); // Return a 404 if the API call fails
    }

    const el: IPODetailed = await res.json();

    selectedIpoData = {
      ...el,
      minAmount:
        el.priceRange.min && el.details?.sizePerLot
          ? el.priceRange.min * el.details.sizePerLot
          : null,
      status: calculateStatusAccordingToDate(
        el.startDate,
        el.endDate,
        el.listingDate
      ),
      latestGmp:
        el.gmpTimeline?.reduce((prev, current) => {
          return prev.date > current.date ? prev : current;
        })?.price || null,
    };
  } catch (e) {
    console.error(e);
    notFound();
  }

  if (!selectedIpoData) {
    return (
      <div className="bg-[#202020] min-h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  const cardsData = [
    {
      title: "Bidding Dates",
      value:
        convertDateTimeToFullFormatter(selectedIpoData.startDate) +
        " - " +
        convertDateTimeToFullFormatter(selectedIpoData.endDate),
      icon: "📅",
    },
    {
      title: "Price Range",
      value:
        formatINR(selectedIpoData.priceRange.min) +
        " - " +
        formatINR(selectedIpoData.priceRange.max),
      icon: "💰",
    },
    {
      title: "Minimum Investment",
      value:
        selectedIpoData.details?.sizePerLot && selectedIpoData.priceRange.max
          ? formatINR(
              selectedIpoData.details.sizePerLot *
                selectedIpoData.priceRange.max
            )
          : "--",
      icon: "🔢",
    },
    {
      title: "Issue Size",
      value: selectedIpoData.details?.issueSize?.replace("cr", "Cr") || "--",
      icon: "📊",
    },
    {
      title: "Latest GMP",
      value: (() => {
        const gmp = selectedIpoData.gmpTimeline?.reduce((prev, current) => {
          return prev.date > current.date ? prev : current;
        })?.price;

        // Check if gmp is a valid number and max price is non-zero
        if (typeof gmp !== "number" || isNaN(gmp)) return "--";
        const maxPrice = selectedIpoData.priceRange?.max;

        if (typeof maxPrice === "number" && maxPrice > 0) {
          const percentage = ((gmp / maxPrice) * 100).toFixed(2);
          return formatINR(gmp) + ` (${percentage}%)`;
        }

        return formatINR(gmp); // Just return formatted gmp if no valid max price
      })(),
      icon: "💰",
    },
  ];

  return (
    <div className="bg-[#202020] min-h-screen text-white">
      <div className="flex bg-[#2A2A2A] p-6">
        <Link href="/">
          <h1 className="text-gray-400 cursor-pointer">Home</h1>
        </Link>
        <p className="text-gray-500 px-2"> / </p>
        <Link href={"/ipo-details/" + selectedIpoData.slug}>
          <p className="text-gray-400 cursor-pointer">
            {selectedIpoData.symbol}
          </p>
        </Link>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="h-28 w-full max-w-28 relative">
              <Image
                src={selectedIpoData.logoUrl}
                alt={selectedIpoData.name}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{selectedIpoData.name}</h1>
              <p className="text-gray-400">{selectedIpoData.symbol}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-lg p-4 flex-1 min-w-full sm:min-w-fit"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{item.icon}</span>
                <h3 className="text-sm font-medium text-gray-400">
                  {item.title}
                </h3>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Timeline Section */}
          <div className="bg-[#2A2A2A] rounded-lg p-4 flex-1 min-w-[300px] md:flex-[0_0_32%]">
            <h2 className="text-xl font-semibold mb-4">IPO Timeline</h2>
            {selectedIpoData.details?.schedule?.length === 0 && (
              <p className="text-gray-300 text-sm">
                No events scheduled yet. Please check back later.
              </p>
            )}
            <div className="space-y-4">
              {selectedIpoData.details?.schedule?.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{event.eventTitle}</p>
                    <p
                      className={
                        "text-sm " +
                        (event.date && event.date < new Date().toISOString()
                          ? " text-gray-500"
                          : "") +
                        (event.date &&
                        new Date(event.date).getDate() == new Date().getDate()
                          ? " text-green-500"
                          : "")
                      }
                    >
                      {convertDateTimeToFullFormatter(event.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About the Company Section */}
          <div className="bg-[#2A2A2A] rounded-lg p-4 flex flex-col gap-2 flex-1 min-w-[300px] md:flex-[0_0_66%]">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">About the Company</h2>
              <p className="text-gray-400 text-sm">
                {selectedIpoData.details?.about}
              </p>
            </div>
            {
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Strengths</h2>

                {selectedIpoData.details?.strengths.length &&
                selectedIpoData.details.strengths.length > 0 ? (
                  <ol className="flex flex-col gap-1 list-decimal pl-6">
                    {selectedIpoData.details?.strengths.map(
                      (strength, index) => (
                        <li key={index} className="text-gray-400 pl-2">
                          {strength}
                        </li>
                      )
                    )}
                  </ol>
                ) : (
                  <p className="text-gray-400">--</p>
                )}
              </div>
            }
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Risks</h2>
              {selectedIpoData.details?.risks.length &&
              selectedIpoData.details.risks.length > 0 ? (
                <ol className="flex flex-col gap-1 list-decimal pl-6">
                  {selectedIpoData.details?.risks.map((risks, index) => (
                    <li key={index} className="text-gray-400 pl-2">
                      {risks}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-gray-400">--</p>
              )}
            </div>
          </div>

          {selectedIpoData.gmpTimeline && (
            <PriceChart gmpTimeline={selectedIpoData.gmpTimeline} />
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const res = await fetch(API_BASE_URL + API_END_POINTS.details + slug);
  if (!res.ok) {
    return {
      title: "IPO Not Found",
      description: "The IPO you are looking for does not exist.",
    };
  }
  const ipoData: IPODetailed = await res.json();

  if (!ipoData) {
    return {};
  }

  if (ipoData.latestGmp) {
    return {
      title: `${ipoData.name} IPO | Grey Market Premium (GMP) & Latest Updates`,
      description: `${ipoData.name} IPO opens on ${ipoData.startDate} and closes on ${ipoData.endDate}, Current GMP of ${ipoData.name} is : ${ipoData.latestGmp}, Learn more about ${ipoData.symbol} IPO including Grey Market Premium (GMP) and more.`,
    };
  }

  return {
    title: `${ipoData.name} IPO | Grey Market Premium (GMP) & Latest Updates`,
    description: `${ipoData.name} IPO opens on ${ipoData.startDate} and closes on ${ipoData.endDate}, Learn more about ${ipoData.name} IPO including Grey Market Premium (GMP) and more.`,
  };
}
