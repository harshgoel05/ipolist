/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ipoData = {
  name: "KRN Heat Exchanger",
  company: "KRN Heat Exchanger and Refrigeration Ltd",
  minInvestment: "13,585",
  biddingDates: "25 Sep '24 - 27 Sep '24",
  priceRange: "₹209 - ₹220",
  lotSize: "65",
  issueSize: "341.51Cr",
  aboutCompany:
    "KRN Heat Exchanger and Refrigeration Ltd is a leading provider of industrial heat exchangers and refrigeration systems. With over 20 years of experience in the sector, the company has been at the forefront of technological innovations that cater to various industries including automotive, energy, and manufacturing. The company prides itself on its sustainable practices and high-quality product offerings.",
  timeline: [
    { date: "25 Sep '24", title: "Bidding starts" },
    { date: "27 Sep '24", title: "Bidding ends" },
    { date: "03 Oct '24", title: "Allotment finalisation" },
    { date: "04 Oct '24", title: "Refund initiation" },
    { date: "04 Oct '24", title: "Demat transfer" },
    { date: "07 Oct '24", title: "Listing" },
  ],
};

export default function IpoDetails() {
  return (
    <div className="bg-[#202020] min-h-screen text-white">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{ipoData.name} IPO</h1>
          <p className="text-gray-400">{ipoData.company}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Bidding Dates", value: ipoData.biddingDates, icon: "📅" },
            { title: "Price Range", value: ipoData.priceRange, icon: "💰" },
            { title: "Lot Size", value: ipoData.lotSize, icon: "🔢" },
            { title: "Issue Size", value: ipoData.issueSize, icon: "📊" },
          ].map((item, index) => (
            <div key={index} className="bg-[#2A2A2A] rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{item.icon}</span>
                <h3 className="text-sm font-medium text-gray-400">
                  {item.title}
                </h3>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Timeline Section */}
          <div className="bg-[#2A2A2A] rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">IPO Timeline</h2>
            <div className="space-y-4">
              {ipoData.timeline.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About the Company Section */}
          <div className="bg-[#2A2A2A] rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">About the Company</h2>
            <p className="text-gray-400">{ipoData.aboutCompany}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
