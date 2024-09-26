/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/Navbar";
import Table from "./components/Table";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="m-4 flex gap-[2%] flex-wrap items-center justify-center">
        <div className="border border-gray-600 rounded-lg min-w-[48%] md:min-w-[23%] basis-0 shadow shadow-zinc-700">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium leading-5 text-gray-500 truncate uppercase">
                Upcoming IPOs
              </dt>
              <dd className="mt-1 text-3xl font-semibold leading-9 text-white">
                12
              </dd>
              <dd className="font-light text-sm text-gray-400">
                <span>Apply to this before 05.00 PM IST</span>
              </dd>
            </dl>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg min-w-[48%] md:min-w-[23%] basis-0 shadow shadow-zinc-700">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium leading-5 text-gray-500 truncate uppercase">
                On Going IPos
              </dt>
              <dd className="mt-1 text-3xl font-semibold leading-9 text-white">
                12
              </dd>
              <dd className="font-light text-sm text-gray-400">
                <span>Apply to this before 05.00 PM IST</span>
              </dd>
            </dl>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg min-w-[48%] md:min-w-[23%] basis-0 shadow shadow-zinc-700">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium leading-5 text-gray-500 truncate uppercase">
                IPOs Closing Today
              </dt>
              <dd className="mt-1 text-3xl font-semibold leading-9 text-white">
                12
              </dd>
              <dd className="font-light text-sm text-gray-400">
                <span>Apply to this before 05.00 PM IST</span>
              </dd>
            </dl>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg min-w-[48%] md:min-w-[23%] basis-0 shadow shadow-zinc-700">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium leading-5 text-gray-500 truncate uppercase">
                Closed IPOs
              </dt>
              <dd className="mt-1 text-3xl font-semibold leading-9 text-white">
                12
              </dd>
              <dd className="font-light text-sm text-gray-400">
                <span>No more accepting application</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
}
