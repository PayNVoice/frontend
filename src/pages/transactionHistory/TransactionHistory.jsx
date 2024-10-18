import React, { useEffect, useState } from "react";
import abi from "../../config/abi";
import { contractAddress } from "../../config/contractAddress";
import { useReadContract,useAccount } from "wagmi";
import { formatEther, formatGwei } from "viem";


const TransactionHistory = () => {
	const [status, setStatus] = useState("");
	const [type, setType] = useState("");
	const [history, setHistory] = useState([]);
	const [milestones, setMilestones] = useState([]);
	const account = useAccount();

	const milestoneStatus = {
		0: "pending",
		1: "isCompleted",
		2: "confirmed",
	  }

	const {data:invoiceHistory, isSuccess} = useReadContract({
		abi,
		address: contractAddress,
		functionName: 'generateAllInvoice',
		account: account.address,
	  });

	useEffect(() =>{
		if(isSuccess){
			setHistory(invoiceHistory)
		}
	}, [invoiceHistory])

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
		<>
		<div className="main-content flex-1 p-4">
			<h2 className="text-2xl font-bold mb-4">Transaction History</h2>

			<div className="filters flex space-x-4">

				<div className="relative">
					<label htmlFor="status" className="sr-only">
						Status:
					</label>
					<select
						id="status"
						className="border rounded-md px-3 py-2"
						value={status}
						onChange={handleStatusChange}
					>
						<option value="">Status</option>
						<option value="pending">Pending</option>
						<option value="iscompleted">is completed</option>  
						<option value="confirmed">confirmed</option>  
					</select>
				</div>
			</div>

			<table className="table-auto w-full mt-4">
				<thead>
					<tr>
						<th className="border px-4 py-2">Transaction ID</th>
						<th className="border px-4 py-2">Description</th>
						<th className="border px-4 py-2">Date</th>
						<th className="border px-4 py-2">Amount</th>
						<th className="border px-4 py-2">Status</th>
					</tr>
				</thead>
				<tbody>
					{ 
					invoiceHistory.map((invoice, invoiceIndex) => 
						invoice.milestones.map((milestone, milestoneIndex) => ( 
						<tr key={`${invoiceIndex}-${milestoneIndex}`}>
						  <td className="border px-4 py-2">tnx-#{milestoneIndex}</td>
						  <th className="border px-4 py-2">{milestone.description}</th>
						  <td className="border px-4 py-2">{(new Date(Number(milestone.deadline) * 1000)).toLocaleDateString()}</td>
						  <td className="border px-4 py-2">{formatEther(milestone.amount)} eth</td>
						  <td className="border px-4 py-2">{milestoneStatus[milestone.status] || "unknown"}</td>
						</tr>
						))
						 )
					}
				</tbody>
			</table>

			<div className='history-buttom flex justify-between bottom-9'>
          <button className='flex bg-gradient-to-r to-[#568ce2] from-[#1f3a63] text-white rounded-md p-2 mt-4' type="button">
                   Download transaction history
          </button>
      </div>
		</div>
		</>
	);
};

export default TransactionHistory;
