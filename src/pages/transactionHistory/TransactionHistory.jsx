/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { Contract_ABI } from '../../ABI/abi';
import { ethers } from 'ethers';
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import { toast } from 'react-toastify';


const TransactionHistory = () => {
  const [dateRange, setDateRange] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const { address } = useAccount();
  const [selectedInvoice, setSelectedInvoice] = useState(null); // To store the fetched invoice data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  
  const { data: fetchClientInvoice, isLoading, error } = useReadContract({
    address: "0x5C287a2819bF1B82A852de9a69f83c9ef294BEca",
    abi: Contract_ABI,
    functionName: "getInvoicesForClient",
    args: [address],
    enabled: selectedInvoiceId !== null, // Only run this when an ID is selected  
  });
  const { data: fetchedInvoiceDetails } = useReadContract({
    address: "0x5C287a2819bF1B82A852de9a69f83c9ef294BEca",
    abi: Contract_ABI,
    functionName: "getInvoice",
    args: [selectedInvoiceId],
    enabled: selectedInvoiceId !== null, // Only run this when an ID is selected
  });

  const { data: hash,isPending,  sendTransaction } = useSendTransaction()

  const depositToContract = async(address, value) => {
    try {
      if (!value) {
        console.error("Invalid value provided");
        return;
      }
      const formattedValue = ethers.formatEther(value.toString());
       sendTransaction({ to: address, value: parseEther(formattedValue) });
     toast.success("Deposited to contract successfully");
    }
    catch (error) {
      toast.error("Error depositing to contract: " + error.message);
      
    }
}
  useEffect(() => {
    if (fetchClientInvoice) {
      setSelectedInvoice(fetchClientInvoice);
    }
    if(fetchedInvoiceDetails){
      setSelectedInvoice(fetchedInvoiceDetails);
    }
  }, [fetchClientInvoice, fetchedInvoiceDetails]);
  console.log(fetchClientInvoice);
  const handleInvoiceClick = (selectedInvoiceId) => {
    setSelectedInvoiceId(selectedInvoiceId);
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
    if (!amountInWei) return "0";
    return ethers.formatEther(amountInWei.toString()); // Convert BigInt to Ether
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;



    const handleDateRangeChange = (event) => {
        setDateRange(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);

    };
  
    return (
        // <div className="transaction-history flex flex-col h-full">
        <div className="main-content flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
  
          <div className="filters flex space-x-4">
            <div className="relative">
              <label htmlFor="date-range" className="sr-only">Date Range:</label>
              <input type="text" id="date-range" className="border rounded-md px-3 py-2" value={dateRange} onChange={handleDateRangeChange} />
            </div>
  
            <div className="relative">
              <label htmlFor="status" className="sr-only">Status:</label>
              <select id="status" className="border rounded-md px-3 py-2" value={status} onChange={handleStatusChange}>
                <option value="">Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
  
            <div className="relative">
              <label htmlFor="type" className="sr-only">Type:</label>
              <select id="type" className="border rounded-md px-3 py-2" value={type} onChange={handleTypeChange}>
                <option value="">Type</option>
                <option value="invoice">Invoice</option>
                <option value="payment">Payment</option>
              </select>
            </div>
          </div>
  
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Seller Address</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Amount to pay</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Type</th>
              </tr>
            </thead>
          <tbody>
            <button> kushi</button>
            {/* Render transaction history data here */}
            {Array.isArray(fetchClientInvoice) && fetchClientInvoice.length > 0 ? (
              fetchClientInvoice.map((invoice, index) => (
                <tr key={index}  onClick={() => handleInvoiceClick(index + 1)}>
                  <td className="border px-4 py-2">{invoice.creatorAddress}</td>
                  <td className="border px-4 py-2">{convertTimestampToDate(invoice.deadline)}</td>
                  <td className="border px-4 py-2">{convertWeiToEther(invoice.amount)}</td>
                  <td className="border px-4 py-2">{invoice.isPaid ? 'Paid' : 'Pending'}</td>
                  <td className="border px-4 py-2">Invoice</td>
                </tr>
))): (
                <div>No Invoice found</div>
              
            )}
         
            
              {/* Add more rows as needed */}
            </tbody>
          </table>
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
              <p><strong>Client Address:</strong> {selectedInvoice.creatorAddress}</p>
              <p><strong>Amount:</strong> {convertWeiToEther(selectedInvoice.amount)} ETH</p>
              <p><strong>Due Date:</strong> {convertTimestampToDate(selectedInvoice.deadline)}</p>
              <p><strong>Status:</strong> {selectedInvoice.isPaid ? "Paid" : "Pending"}</p>
              <p><strong>Additional Conditions:</strong> {selectedInvoice.termsAndConditions}</p>
              <p><strong>Payment Term:</strong> {selectedInvoice.paymentterm}</p>
              {/* button to deposit  */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => depositToContract("0x5C287a2819bF1B82A852de9a69f83c9ef294BEca", selectedInvoice.amount )}> Deposit </button>
            </div>
          </div>
        )}
          <div className="pagination mt-4">
            <p className="text-sm text-gray-500">Showing 1-10 of 24</p>
          </div>
        </div>

    );
  }

  export default TransactionHistory