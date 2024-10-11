import React, { useState } from 'react';

const TransactionHistory = () => {
    const [dateRange, setDateRange] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');

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
                <th className="border px-4 py-2">Transaction ID</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {/* Render transaction history data here */}
              <tr>
                <td className="border px-4 py-2">#TX-001</td>
                <td className="border px-4 py-2">2024-10-09</td>
                <td className="border px-4 py-2">$5,000</td>
                <td className="border px-4 py-2">Complete</td>
                <td className="border px-4 py-2">Invoice</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
  
          <div className="pagination mt-4">
            <p className="text-sm text-gray-500">Showing 1-10 of 24</p>
          </div>
        </div>
    //   </div>
    );
  }

  export default TransactionHistory