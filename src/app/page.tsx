import Table from "@/components/Table";
import { API_BASE_URL, API_END_POINTS } from "@/utils/constants";
import { calculateStatusAccordingToDate } from "@/utils/helpers";
import { IPODetailed, IPOStatus } from "@/utils/types";
import { notFound } from "next/navigation";

export const revalidate = 60;

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

    console.log(data.map((el) => el.slug));
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
              value: data.filter((el) => el.status === IPOStatus.Upcoming)
                .length,
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
        <div className="mt-6">
          <Table processedData={data} />
        </div>
      </div>
    </div>
  );
}
