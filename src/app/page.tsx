import Table from "@/components/Table";
import { API_BASE_URL, API_END_POINTS } from "@/utils/constants";
import { calculateStatusAccordingToDate } from "@/utils/helpers";
import { IPODetailed, IPOStatus } from "@/utils/types";
import { notFound } from "next/navigation";
export default async function Home() {
  let data: IPODetailed[] | null = null;
  try {
    const res = await fetch(API_BASE_URL + API_END_POINTS.calendar);
    if (!res.ok) {
      notFound(); // Return a 404 if the API call fails
    }
    const response: IPODetailed[] = await res.json();

    data = response
      .map((el: IPODetailed) => {
        return {
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
            })?.price ?? null,
        };
      })
      .sort(
        (a: IPODetailed, b: IPODetailed) =>
          +new Date(b.endDate || 0) - +new Date(a.endDate || 0)
      );
  } catch (e) {
    console.error(e);
    notFound();
  }

  if (!data) {
    return (
      <div className="bg-[#202020] min-h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#202020] min-h-screen text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">IPO Listing in NSE/BSE</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              title: "Upcoming IPOs",
              value: data.filter(
                (el) =>
                  el.status === IPOStatus.Upcoming ||
                  el.status === IPOStatus.ComingSoon
              ).length,
              desc: "You have time,   research and apply",
            },
            {
              title: "Ongoing IPOs",
              value: data.filter((el) => el.status === IPOStatus.Open).length,
              desc: "Apply as soon as possible",
            },
            {
              title: "IPOs Closing Today",
              value: data.filter(
                (el) =>
                  el.endDate &&
                  new Date(el.endDate).getDate() === new Date().getDate() &&
                  new Date(el.endDate).getMonth() === new Date().getMonth()
              ).length,
              desc: "Apply before 05:00 PM IST",
            },
            {
              title: "Closed IPOs",
              value: data.filter((el) => el.status === IPOStatus.Closed).length,
              desc: "No more accepting applications",
            },
          ].map((item, index) => (
            <div key={index} className="bg-[#2A2A2A] rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase">
                {item.title}
              </h3>
              <p className="text-3xl font-semibold mt-2">{item.value}</p>
              <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-[#2A2A2A] rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              {[
                "New IPO announced: Tech Innovators Ltd",
                "Subscription for GreenEnergy IPO closed",
                "AlliedHealth IPO oversubscribed by 3.2x",
                "Refunds initiated for UnderSubbed Corp IPO",
              ].map((activity, index) => (
                <li key={index} className="bg-[#333] rounded p-3 text-sm">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Obligations</h2>
            <div className="bg-[#3A3A3A] rounded-lg p-4">
              <h3 className="font-semibold">VAT declaration</h3>
              <p className="text-sm text-gray-400 mt-1">
                You have 27 days left to submit the documentation
              </p>
            </div>
          </div>
        </div> */}

        <div className="mt-6">
          {/* <h2 className="text-xl font-semibold mb-4">Latest IPOs</h2> */}
          <Table processedData={data} />
        </div>
      </div>
    </div>
  );
}
