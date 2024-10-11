const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card w-[200px] h-[120px] p-[16px]  bg-white border-grey border-[1px] border-solid rounded-md shadow-md ">
      <p className="title mb-4 text-[14px] text-[black] ">{title}</p>
      <p className="title  text-[18px] text-[black] font-semibold">{value}</p>
    </div>
  );
};
const Overview = () => {
  return (
    <div className="dashboard-overview py-8">
      <div className="summary-cards-container flex gap-4 items-center flex-wrap">
        <SummaryCard title="Pending Invoices" value={6} />
        <SummaryCard title="Active Contracts" value={18} />
        <SummaryCard title="Total Value Locked" value={"$45,230"} />
      </div>

      <div className="activity-and-transactions mt-6 flex flex-wrap gap-2 items-start justify-between">
        <div className="transactions w-[100%] bg-white border-grey border-[1px] border-solid md:w-[68%]">
          <h3 className=" p-4 text-[18px] text-[black] font-bold">
            Recent Transaction
          </h3>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Invoice ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Client
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((item) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #INV-001{" "}
                    </th>
                    <td class="px-6 py-4">Acme Corp</td>
                    <td class="px-6 py-4">$5,000</td>
                    <td class="px-6 py-4">Completed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="activity p-4 w-[100%]  bg-white border-grey border-[1px] border-solid md:w-[30%]">
          <h3 className="text-[18px] text-[black] font-bold ">Activity</h3>
        </div>
      </div>

      <button
        type="button"
        className="text-gray-900 mt-4  bg-blue-600 text-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
      >
        Create new invoice
      </button>
    </div>
  );
};

export default Overview;
