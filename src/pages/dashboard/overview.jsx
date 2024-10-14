/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */

// import { toast } from "react-toastify";
import { useReadContract, useBalance } from "wagmi";
import { Contract_ABI } from "../../ABI/abi";
import { ethers } from "ethers";
// import { useState } from "react";
import { useState, useEffect } from "react";
// import { useReadContract } from "wagmi"; 
// import { Contract_ABI } from "../../ABI/abi";
// import { ethers } from "ethers";

/* eslint-disable react/jsx-key */
const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card w-[200px] h-[120px] p-[16px]  bg-white border-grey border-[1px] border-solid rounded-md shadow-md ">
      <p className="title mb-4 text-[14px] text-[black] ">{title}</p>
      <p className="title  text-[18px] text-[black] font-semibold">{value}</p>
    </div>
  );
};


const Overview = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null); // To store the selected invoice ID
  const [selectedInvoice, setSelectedInvoice] = useState(null); // To store the fetched invoice data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  // Fetch all invoices
  const { data: invoiceList, isLoading, error } = useReadContract({
    address: "0x5C287a2819bF1B82A852de9a69f83c9ef294BEca",
    abi: Contract_ABI,
    functionName: "generateAllInvoice",
  });

  const { data: fetchedInvoice } = useReadContract({
    address: "0x5C287a2819bF1B82A852de9a69f83c9ef294BEca",
    abi: Contract_ABI,
    functionName: "getInvoice",
    args: [selectedInvoiceId],
    enabled: selectedInvoiceId !== null, // Only run this when an ID is selected
  });

  useEffect(() => {
    if (fetchedInvoice) {
      setSelectedInvoice(fetchedInvoice);
    }
  }, [fetchedInvoice]);

  const handleInvoiceClick = (invoiceId) => {
    setSelectedInvoiceId(invoiceId); // Set the selected invoice ID
    setIsModalOpen(true); // Show the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(Number(timestamp) * 1000); // Convert from seconds to milliseconds
    return date.toLocaleDateString();
  };

  const convertWeiToEther = (amountInWei) => {
    return ethers.formatEther(amountInWei.toString()); // Convert BigInt to Ether
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="dashboard-overview py-8">
      <div className="summary-cards-container flex gap-4 items-center flex-wrap">
        <SummaryCard title="Pending Invoices"  value={Array.isArray(invoiceList) ? invoiceList.filter(invoice => !invoice.isPaid).length : 0} />
        <SummaryCard title="Sorted Invoices"  value={Array.isArray(invoiceList) ? invoiceList.filter(invoice => invoice.isPaid).length : 0} />
        <SummaryCard title="Active Contracts" value={18} />
        <SummaryCard title="Total Value Locked" value={"$45,230"} />
      </div>

      <div className="activity-and-transactions mt-6 flex flex-wrap gap-2 items-start justify-between">
        <div className="transactions w-[100%] bg-white border-grey border-[1px] border-solid md:w-[68%]">
          <h3 className="p-4 text-[18px] text-[black] font-bold">Recent Transactions</h3>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Invoice ID</th>
                  <th scope="col" className="px-6 py-3">Client</th>
                  <th scope="col" className="px-6 py-3">Amount</th>
                  <th scope="col" className="px-6 py-3">Due Date</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(invoiceList) && invoiceList.length > 0 ? (
                  invoiceList.map((invoice, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      onClick={() => handleInvoiceClick(index + 1)}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{invoice.clientAddress}</td>
                      <td className="px-6 py-4">{convertWeiToEther(invoice.amount)}</td>
                      <td className="px-6 py-4">{convertTimestampToDate(invoice.deadline)}</td>
                      <td className="px-6 py-4">{invoice.isPaid ? "Paid" : "Pending"}</td>
                    </tr>
                  ))
                ) : (
                  <div>No Invoice found</div>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedInvoice && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                &#x2715;
              </button>
              <h3 className="text-lg font-bold mb-4">Invoice Details</h3>
              <p><strong>Client Address:</strong> {selectedInvoice.clientAddress}</p>
              <p><strong>Amount:</strong> {convertWeiToEther(selectedInvoice.amount)} ETH</p>
              <p><strong>Due Date:</strong> {convertTimestampToDate(selectedInvoice.deadline)}</p>
              <p><strong>Status:</strong> {selectedInvoice.isPaid ? "Paid" : "Pending"}</p>
              <p><strong>Additional Conditions:</strong> {selectedInvoice.termsAndConditions}</p>
              <p><strong>Payment Term:</strong> {selectedInvoice.paymentterm}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
