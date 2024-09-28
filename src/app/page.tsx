/* eslint-disable @next/next/no-img-element */
import Table from "@/components/Table";

export default function Home() {
  return (
    <div className="bg-[#202020] min-h-screen text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              title: "Upcoming IPOs",
              value: 12,
              desc: "Apply before 05:00 PM IST",
            },
            {
              title: "Ongoing IPOs",
              value: 8,
              desc: "Apply before 05:00 PM IST",
            },
            {
              title: "IPOs Closing Today",
              value: 3,
              desc: "Apply before 05:00 PM IST",
            },
            {
              title: "Closed IPOs",
              value: 15,
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
                'New IPO announced: Tech Innovators Ltd',
                'Subscription for GreenEnergy IPO closed',
                'AlliedHealth IPO oversubscribed by 3.2x',
                'Refunds initiated for UnderSubbed Corp IPO'
              ].map((activity, index) => (
                <li key={index} className="bg-[#333] rounded p-3 text-sm">{activity}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Obligations</h2>
            <div className="bg-[#3A3A3A] rounded-lg p-4">
              <h3 className="font-semibold">VAT declaration</h3>
              <p className="text-sm text-gray-400 mt-1">You have 27 days left to submit the documentation</p>
            </div>
          </div>
        </div> */}

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Latest IPOs</h2>
          <Table />
        </div>
      </div>
    </div>
  );
}
