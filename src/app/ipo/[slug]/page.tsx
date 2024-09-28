import React from "react";
import data from "@/utils/data.json";
import { convertDateTimeToFullFormatter, formatINR } from "@/utils/helpers";
import PriceChart from "@/components/LineChart";
import Link from "next/link";
import { Metadata } from "next";
export default function IpoDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Fetch data based on the slug
  const ipoData = data.find((item) => item.slug === slug);

  if (!ipoData) {
    return <div>Not Found</div>;
  }

  const cardsData = [
    {
      title: "Bidding Dates",
      value:
        convertDateTimeToFullFormatter(ipoData.startDate) +
        " - " +
        convertDateTimeToFullFormatter(ipoData.endDate),
      icon: "📅",
    },
    {
      title: "Price Range",
      value:
        formatINR(ipoData.priceRange.min) +
        " - " +
        formatINR(ipoData.priceRange.max),
      icon: "💰",
    },
    {
      title: "Minimum Investment",
      value:
        ipoData.details.sizePerLot && ipoData.priceRange.max
          ? ipoData.details.sizePerLot * ipoData.priceRange.max
          : "--",
      icon: "🔢",
    },
    {
      title: "Issue Size",
      value: ipoData.details.issueSize,
      icon: "📊",
    },
    {
      title: "Latest GMP",
      value: (() => {
        const gmp = ipoData.gmpTimeline?.reduce((prev, current) => {
          return prev.date > current.date ? prev : current;
        })?.price;
        return (
          formatINR(
            // Find the element with max date in gmpTimeline
            gmp
          ) +
          (gmp &&
            ipoData.priceRange.max &&
            " (" + ((gmp / ipoData.priceRange.max) * 100).toFixed(2) + "%)")
        );
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
        <Link href={"/" + ipoData.slug}>
          <p className="text-gray-400 cursor-pointer">{ipoData.symbol}</p>
        </Link>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <img src={ipoData.logoUrl} alt={ipoData.name} className="w-14" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{ipoData.name}</h1>
              <p className="text-gray-400">{ipoData.symbol}</p>
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
            <div className="space-y-4">
              {ipoData.details.schedule?.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{event.eventTitle}</p>
                    <p className="text-sm text-gray-400">
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
              <p className="text-gray-400">{ipoData.details.about}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Strengths</h2>
              <ol className="flex flex-col gap-1 list-decimal pl-6">
                {ipoData.details.strengths.map((strength, index) => (
                  <li key={index} className="text-gray-400 pl-2">
                    {strength}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Risks</h2>
              <ol className="flex flex-col gap-1 list-decimal pl-6">
                {ipoData.details.risks.map((risk, index) => (
                  <li key={index} className="text-gray-400 pl-2">
                    {risk}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {ipoData.gmpTimeline && (
            <PriceChart gmpTimeline={ipoData.gmpTimeline} />
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

  const ipoData = data.find((item) => item.slug === slug);
  console.log(ipoData);
  if (!ipoData) {
    return {};
  }

  return {
    title: `${ipoData.name} IPO | Grey Market Premium (GMP) & Latest Updates`,
    description: `Get the latest details on the ${ipoData.name} IPO, including Grey Market Premium (GMP) and more.`,
  };
}
